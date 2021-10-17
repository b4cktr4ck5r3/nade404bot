import { Message, MessageEmbed } from "discord.js";

export function getErrorTemplate(title: string, message: string) : MessageEmbed {
    const template : MessageEmbed = new MessageEmbed()
    .setColor('RED')
    .setTitle(title)
    .setDescription(message)

    return template;
}