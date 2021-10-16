import { MessageEmbed } from "discord.js";
import { Player } from "../../types/player";

export function getStatsTemplate(player : Player) {
    const template = new MessageEmbed()
    .setColor('#04bd24')
    .setTitle(`Stats of ${player.name}`)
    .setDescription('Retrieved from nade404 retake servers')
    .addFields(
		{ name: 'Kills', value: `${player.kills}` },
        { name: 'Deaths', value: `${player.deaths}` },
        { name: 'Ratio', value: `${player.ratio}` },
        { name: 'Headshots', value: `${player.headshots}` },
        { name: 'Headshots percent', value: `${player.headshots_percent}` },
    )

    return template;
}