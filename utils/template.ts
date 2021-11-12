import { Message, MessageActionRow, MessageButton, MessageButtonStyleResolvable, MessageEmbed, MessageSelectMenu } from "discord.js";
import { ActionRow } from "../types/selectMenu";

export function getErrorTemplate(title: string, message: string) : MessageEmbed {
    const template : MessageEmbed = new MessageEmbed()
    .setColor('RED')
    .setTitle(title)
    .setDescription(message)

    return template;
}

export function getSelectActionRow(id: string, placeholder: string, options: ActionRow[]) : MessageActionRow {
    const row : MessageActionRow = new MessageActionRow()
    .addComponents(
        new MessageSelectMenu()
        .setCustomId(id)
        .setPlaceholder(placeholder)
        .addOptions(options)
    );
    
    return row;
}

export function getButtonActionRow(id: string, label: string, style: MessageButtonStyleResolvable, disabled: boolean) : MessageActionRow {
    const row = new MessageActionRow()
    .addComponents(
        new MessageButton()
            .setCustomId(id)
            .setLabel(label)
            .setStyle(style)
            .setDisabled(disabled),
    );

    return row;
}