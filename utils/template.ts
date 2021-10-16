import { MessageEmbed } from "discord.js";

export function getErrorTemplate(title: string, message: string) {
    const template = new MessageEmbed()
    .setColor('RED')
    .setTitle(title)
    .setDescription(message)

    return template;
}