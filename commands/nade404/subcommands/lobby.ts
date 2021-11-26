import { formatEmoji } from "@discordjs/builders";
import { APIMessage } from "discord-api-types";
import { ButtonInteraction, CommandInteraction, GuildEmoji, Message, MessageActionRow, MessageButton, MessageComponentInteraction, MessageSelectMenu, Options, SelectMenuInteraction, User } from "discord.js";
import { MessageButtonStyles } from "discord.js/typings/enums";
import { LobbyConfiguration, MR_TYPE, LobbyMysqlData, PRIVACY, REGISTRATION_STEP } from "../../../types/lobby";
import { SelectMenuConfiguration } from "../../../types/selectMenu";
import { getButtonActionRow, getErrorTemplate, getSelectActionRow } from "../../../utils/template";
import { getCreateLobbyTemplate } from "../template";
import { EventEmitter } from 'events';
// import { mysqlDb } from "../../../database/mysqlDatabase";
import { RowDataPacket } from "mysql2";

const PRIVACY_MENU : SelectMenuConfiguration = {
    placeholder: 'Please select game privacy',
    options: [
        {
            label: 'Public',
            description: 'Create a public game',
            value: 'public'
        },
        {
            label: 'Private',
            description: 'Create private game',
            value: 'private'
        }
    ]
}

const KNIFE_MENU : SelectMenuConfiguration = {
    placeholder: 'Please select knife round enabled',
    options:[
        {
            label: 'Yes',
            description: 'Play knife round',
            value: 'knife_on'
        },
        {
            label: 'No',
            description: "Don't play knife round",
            value: 'knife_off'
        }
    ]
}

const ROUNDS_MENU : SelectMenuConfiguration = {
    placeholder: 'Please select number of round',
    options:[
        {
            label: 'MR16',
            description: '16 rounds to win',
            value: 'mr16'
        },
        {
            label: 'MR8',
            description: '8 rounds to win',
            value: 'mr8'
        }
    ]
}

const OVERTIME_MENU : SelectMenuConfiguration = {
    placeholder: 'Please select overtime enabled',
    options:[
        {
            label: 'Yes',
            description: 'Play overtime',
            value: 'overtime_yes'
        },
        {
            label: 'No',
            description: "Don't play overtime",
            value: 'overtime_no'
        }
    ]
}

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
    const selectMenu = getSelectActionRow('selectMenu', PRIVACY_MENU.placeholder, PRIVACY_MENU.options);

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
                            updateInteraction(interaction, backButton, selectMenu, KNIFE_MENU, false, lobbyConfiguration);
                            registrationStep = REGISTRATION_STEP.KNIFE;
                            break;
                        }
                        case REGISTRATION_STEP.KNIFE : {
                            lobbyConfiguration.KnifeEnabled = (interaction.values[0] === 'knife_on')
                            updateInteraction(interaction, backButton, selectMenu, ROUNDS_MENU, false, lobbyConfiguration);
                            registrationStep = REGISTRATION_STEP.MR;
                            break;
                        }
                        case REGISTRATION_STEP.MR : {
                            lobbyConfiguration.MRType = interaction.values[0] as MR_TYPE
                            updateInteraction(interaction, backButton, selectMenu, OVERTIME_MENU, false, lobbyConfiguration);
                            registrationStep = REGISTRATION_STEP.OVERTIME;
                            break;
                        }
                        case REGISTRATION_STEP.OVERTIME : {
                            lobbyConfiguration.Overtime = (interaction.values[0] === 'overtime_yes')
                            interaction.update({
                                embeds:[getCreateLobbyTemplate(lobbyConfiguration)],
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
                            updateInteraction(interaction, backButton, selectMenu, PRIVACY_MENU, true, lobbyConfiguration);
                            registrationStep = REGISTRATION_STEP.PRIVACY
                            break;
                        }
                        case REGISTRATION_STEP.MR : {
                            lobbyConfiguration.MRType = null;
                            lobbyConfiguration.KnifeEnabled = null;
                            updateInteraction(interaction, backButton, selectMenu, KNIFE_MENU, false, lobbyConfiguration);
                            registrationStep = REGISTRATION_STEP.KNIFE;
                            break;
                        }
                        case REGISTRATION_STEP.OVERTIME : {
                            lobbyConfiguration.Overtime = null;
                            lobbyConfiguration.MRType = null;
                            updateInteraction(interaction, backButton, selectMenu, ROUNDS_MENU, false, lobbyConfiguration);
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
                    .setEmoji('🤖')
                    .setDisabled(false),
            )
            .addComponents(
                new MessageButton()
                .setCustomId('leave')
                .setStyle('PRIMARY')
                .setLabel('🤖')
                .setDisabled(false),
            );
        
            let follow = await interaction.followUp({
                embeds: [getCreateLobbyTemplate(lobbyConfiguration)],
                components: [lobbyActions],
                ephemeral: false
            })
        
            if (follow instanceof Message) {
                const filter = (message : Message) => message.interaction?.user.id === memberId;
                const collector = follow.createMessageComponentCollector();
        
                collector.on('collect', async (interaction : SelectMenuInteraction | ButtonInteraction) => {
                    if (interaction.componentType === 'BUTTON') {
                        switch(interaction.customId) {
                            case 'join': {
                                const queryString : string = `SELECT * FROM du_users WHERE userid=?`
                                // mysqlDb.query(queryString, interaction.user.id, (err, result) => {
                                //     if (err) { console.log(err) }
                                //     if (result) {
                                //         const row = (<RowDataPacket> result)[0];
                                //         if (row) {
                                //             const user: MysqlData =  {
                                //                 ID: row.ID,
                                //                 LastAccountUse: row.last_accountuse,
                                //                 Member: row.member,
                                //                 SteamID: row.steamid,
                                //                 UserID: row.userid
                                //             }
                                //             console.log(user);
                                //             interaction.reply(interaction.user.username + " just join the lobby");
                                //         } else {
                                //             interaction.reply(interaction.user.username + " please link your steam id in order to join a lobby");
                                //         }
                                //     }
                                // })
                                break;
                            }
                        }
                    }
                });
            }
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