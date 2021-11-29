import { formatEmoji } from "@discordjs/builders";
import { APIMessage } from "discord-api-types";
import { ButtonInteraction, CommandInteraction, GuildEmoji, Message, MessageActionRow, MessageButton, MessageComponentInteraction, MessageSelectMenu, Options, SelectMenuInteraction, User, UserFlags } from "discord.js";
import { MessageButtonStyles } from "discord.js/typings/enums";
import { LobbyConfiguration, LobbyPlayer, MR_TYPE, PRIVACY, REGISTRATION_STEP } from "../../../types/lobby";
import { SelectMenuConfiguration } from "../../../types/selectMenu";
import { getButtonActionRow, getErrorTemplate, getSelectActionRow } from "../../../utils/template";
import { getCreateLobbyTemplate, getEndedLobbyConfig, getWaintingPlayerLobby } from "../template";
import { EventEmitter } from 'events';
import * as data from '../../../data/index'
import { du_users } from ".prisma/client";
import { prismaLink, prismaLobbies } from "../../../lib/prisma/prisma";
import { createLobbyMatch } from "../../../utils/apiCalls";

export async function createLobby(interaction: CommandInteraction) {
    const event = new EventEmitter();

    let registrationStep : REGISTRATION_STEP = REGISTRATION_STEP.PRIVACY
    let lobbyConfiguration : LobbyConfiguration = {
        Privacy: null,
        KnifeEnabled: null,
        MRType: null,
        Overtime: null
    }

    const memberId = interaction.user.id;

    const backButton = getButtonActionRow('back', 'Back', MessageButtonStyles.PRIMARY, true);
    const selectMenu = getSelectActionRow('selectMenu', data.PRIVACY_MENU.placeholder, data.PRIVACY_MENU.options);

    interaction.reply(
        { 
            embeds: [getCreateLobbyTemplate(lobbyConfiguration)],
            components: [selectMenu, backButton],
            ephemeral: true
        }
    )

    const message : Message | APIMessage = await interaction.fetchReply();
    if (message instanceof Message) {
        const filter = (message : Message) => message.interaction?.user.id === memberId;
        const collector = message.createMessageComponentCollector();
   
        collector.on('collect', async (interaction : SelectMenuInteraction | ButtonInteraction) => {
            if (interaction.user.id === memberId) {
                if (interaction.componentType === 'SELECT_MENU') {
                    switch(registrationStep) {
                        case REGISTRATION_STEP.PRIVACY : {
                            lobbyConfiguration.Privacy = interaction.values[0] as PRIVACY
                            updateInteraction(interaction, backButton, selectMenu, data.KNIFE_MENU, false, lobbyConfiguration);
                            registrationStep = REGISTRATION_STEP.KNIFE;
                            break;
                        }
                        case REGISTRATION_STEP.KNIFE : {
                            lobbyConfiguration.KnifeEnabled = (interaction.values[0] === 'knife_on')
                            updateInteraction(interaction, backButton, selectMenu, data.ROUNDS_MENU, false, lobbyConfiguration);
                            registrationStep = REGISTRATION_STEP.MR;
                            break;
                        }
                        case REGISTRATION_STEP.MR : {
                            lobbyConfiguration.MRType = interaction.values[0] as MR_TYPE
                            updateInteraction(interaction, backButton, selectMenu, data.OVERTIME_MENU, false, lobbyConfiguration);
                            registrationStep = REGISTRATION_STEP.OVERTIME;
                            break;
                        }
                        case REGISTRATION_STEP.OVERTIME : {
                            lobbyConfiguration.Overtime = (interaction.values[0] === 'overtime_yes')
                            interaction.update({
                                embeds:[getEndedLobbyConfig(lobbyConfiguration)],
                                components:[]
                            })
                            event.emit('waitingPlayers', interaction)
                            registrationStep = REGISTRATION_STEP.WAITING_FOR_PLAYERS;
                            break;
                        }
                    }
                }

                if (interaction.componentType === 'BUTTON') {
                    switch(registrationStep) {
                        case REGISTRATION_STEP.KNIFE: {
                            lobbyConfiguration.Privacy = null;
                            updateInteraction(interaction, backButton, selectMenu, data.PRIVACY_MENU, true, lobbyConfiguration);
                            registrationStep = REGISTRATION_STEP.PRIVACY
                            break;
                        }
                        case REGISTRATION_STEP.MR : {
                            lobbyConfiguration.MRType = null;
                            lobbyConfiguration.KnifeEnabled = null;
                            updateInteraction(interaction, backButton, selectMenu, data.KNIFE_MENU, false, lobbyConfiguration);
                            registrationStep = REGISTRATION_STEP.KNIFE;
                            break;
                        }
                        case REGISTRATION_STEP.OVERTIME : {
                            lobbyConfiguration.Overtime = null;
                            lobbyConfiguration.MRType = null;
                            updateInteraction(interaction, backButton, selectMenu, data.ROUNDS_MENU, false, lobbyConfiguration);
                            registrationStep = REGISTRATION_STEP.MR;
                            break;
                        }
                    }            
                }

                if (registrationStep == REGISTRATION_STEP.WAITING_FOR_PLAYERS) {
                    collector.stop();
                }
            }
        });

        event.once('waitingPlayers', async(interaction : SelectMenuInteraction | ButtonInteraction) =>  {
            const lobbyActions = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('join')
                    .setStyle('PRIMARY')
                    .setEmoji('🆙')
                    .setDisabled(false),
            )
            .addComponents(
                new MessageButton()
                .setCustomId('leave')
                .setStyle('PRIMARY')
                .setLabel('↩️')
                .setDisabled(false),
            );

            let players : du_users[] = [];        

            let follow = await interaction.followUp({
                embeds: [getWaintingPlayerLobby(lobbyConfiguration, players)],
                components: [lobbyActions],
                ephemeral: false
            })

            const MAX_PLAYERS = 1
        
            if (follow instanceof Message) {
                const filter = (message : Message) => message.interaction?.user.id === memberId;
                const collector = follow.createMessageComponentCollector();
        
                collector.on('collect', async (interaction : SelectMenuInteraction | ButtonInteraction) => {
                    if (interaction.componentType === 'BUTTON') {
                        const user = await prismaLink.du_users.findFirst({
                            where: {
                                userid: interaction.user.id,
                            },
                        })

                        switch(interaction.customId) {
                            case 'join': {
                                if (players.length == MAX_PLAYERS) {
                                    interaction.reply({
                                        content: "Sorry lobby is full",
                                        ephemeral: true
                                        });                                    
                                    break;
                                }

                                if (user) {
                                    const found = players.find(p => p.userid == user.userid);
                                    if (!found) {
                                        players.push(user);
                                        interaction.update({
                                            embeds: [getWaintingPlayerLobby(lobbyConfiguration, players)]
                                        })
                                    } else {
                                        interaction.reply({
                                        content: "You are already in the lobby",
                                        ephemeral: true
                                        });
                                    }
                                } else {
                                    interaction.reply(interaction.user.username + " please link your steam id in order to join a lobby");
                                }

                                break;
                            }
                            case 'leave' : {
                                if (user) {
                                    const found = players.find(p => p.userid == user.userid);
                                    if (found) {
                                        players = players.filter(p => p.userid != user.userid);
                                        interaction.update({
                                            embeds: [getWaintingPlayerLobby(lobbyConfiguration, players)]
                                        })
                                    } else {
                                        interaction.reply({
                                            content: "You are not in the lobby",
                                            ephemeral: true
                                            });
                                    }
                                } else {
                                    interaction.reply(interaction.user.username + " please link your steam id in order to join a lobby");
                                }
                                break;
                            }
                        }
                    }

                    if (players.length == MAX_PLAYERS) {
                        event.emit("lobbyFull", interaction, players)
                    }
                });
            }
        });

        event.once('lobbyFull', async(interaction : SelectMenuInteraction | ButtonInteraction, players: du_users[]) => {
            console.log(lobbyConfiguration);
            const server = await prismaLobbies.server_status.findFirst({
                where: {
                    USED: false
                },
            })

            if (server) {
                await prismaLobbies.server_status.update({
                    where: {
                        IP: server.IP
                    },
                    data: {
                        USED: true,
                        GAME_MODE: "PICKUP"
                    },
                })
            }
            else {
                // No server available found (all used cancel the lobby here)
            }

            const toto = await createLobbyMatch(lobbyConfiguration, players.map(p => p.steamid));
            console.log(toto.team1);
            console.log(toto.team2);
        });
    }
}

function updateInteraction (interaction : SelectMenuInteraction | ButtonInteraction, button : MessageActionRow, selectMenu : MessageActionRow, selectMenuConfiguration : SelectMenuConfiguration, disableButton : boolean, lobbyConfiguration: LobbyConfiguration) {
    (button.components[0] as MessageButton).setDisabled(disableButton);
    const { placeholder, options } = selectMenuConfiguration;
    (selectMenu.components[0] as MessageSelectMenu).setPlaceholder(placeholder).setOptions(options);

    interaction.update({
        embeds: [getCreateLobbyTemplate(lobbyConfiguration)],
        components: [selectMenu, button]
    });
}