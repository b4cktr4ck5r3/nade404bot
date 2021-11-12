import { APIMessage } from "discord-api-types";
import { ButtonInteraction, CommandInteraction, Message, MessageActionRow, MessageButton, MessageComponentInteraction, MessageSelectMenu, Options, SelectMenuInteraction } from "discord.js";
import { MessageButtonStyles } from "discord.js/typings/enums";
import { REGISTRATION_STEP } from "../../../types/lobby";
import { SelectMenuConfiguration } from "../../../types/selectMenu";
import { getButtonActionRow, getErrorTemplate, getSelectActionRow } from "../../../utils/template";

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
    let registrationStep : REGISTRATION_STEP = REGISTRATION_STEP.PRIVACY
    const memberId = interaction.user.id;

    const backButton = getButtonActionRow('back', 'Back', MessageButtonStyles.PRIMARY, true);
    const selectMenu = getSelectActionRow('selectMenu', PRIVACY_MENU.placeholder, PRIVACY_MENU.options);

    interaction.reply(
        { 
            embeds: [getErrorTemplate("TEST", "Description")],
            components: [selectMenu, backButton]
        }
    )

    const message : Message | APIMessage = await interaction.fetchReply();
    if (message instanceof Message) {
        const filter = (message : Message) => message.interaction?.user.id === memberId;
        const collector = message.createMessageComponentCollector();
    
        collector.on('collect', (interaction : SelectMenuInteraction | ButtonInteraction) => {
            if (interaction.user.id === memberId) {
                if (interaction.componentType === 'SELECT_MENU') {
                    switch(registrationStep) {
                        case REGISTRATION_STEP.PRIVACY : {
                            updateInteraction(interaction, backButton, selectMenu, KNIFE_MENU, false);
                            registrationStep = REGISTRATION_STEP.KNIFE;
                            break;
                        }
                        case REGISTRATION_STEP.KNIFE : {
                            updateInteraction(interaction, backButton, selectMenu, ROUNDS_MENU, false);
                            registrationStep = REGISTRATION_STEP.MR;
                            break;
                        }
                        case REGISTRATION_STEP.MR : {
                            updateInteraction(interaction, backButton, selectMenu, OVERTIME_MENU, false);
                            registrationStep = REGISTRATION_STEP.OVERTIME;
                            break;
                        }
                        case REGISTRATION_STEP.OVERTIME : {
                            interaction.channel?.send("ENDED");
                            interaction.update({
                                components: []
                            });
                            registrationStep = REGISTRATION_STEP.ENDED;
                            break;
                        }
                    }
                }

                if (interaction.componentType === 'BUTTON') {
                    switch(registrationStep) {
                        case REGISTRATION_STEP.KNIFE: {
                            updateInteraction(interaction, backButton, selectMenu, PRIVACY_MENU, true);
                            console.log("RETURN TO PRIVACY")
                            registrationStep = REGISTRATION_STEP.PRIVACY
                            break;
                        }
                        case REGISTRATION_STEP.MR : {
                            updateInteraction(interaction, backButton, selectMenu, KNIFE_MENU, false);
                            console.log("RETURN TO KNIFE")
                            registrationStep = REGISTRATION_STEP.KNIFE;
                            break;
                        }
                        case REGISTRATION_STEP.OVERTIME : {
                            updateInteraction(interaction, backButton, selectMenu, ROUNDS_MENU, false);
                            console.log("RETURN TO MR")
                            registrationStep = REGISTRATION_STEP.MR;
                            break;
                        }
                    }                    
                }
                if (registrationStep === REGISTRATION_STEP.ENDED)
                {
                    interaction.channel?.send("done");
                    collector.stop();
                }
            }
        });
    }    
}

function updateInteraction (interaction : SelectMenuInteraction | ButtonInteraction, button : MessageActionRow, selectMenu : MessageActionRow, selectMenuConfiguration : SelectMenuConfiguration, disableButton : boolean) {
    (button.components[0] as MessageButton).setDisabled(disableButton);
    const { placeholder, options } = selectMenuConfiguration;
    (selectMenu.components[0] as MessageSelectMenu).setPlaceholder(placeholder).setOptions(options);

    interaction.update({
        components: [selectMenu, button]
    });
}