import { ColorResolvable, MessageEmbed } from "discord.js";
import { Player, Players } from "../../types/player";
import { Top10Type } from "../../types/top10";

export function getStatsTemplate(player : Player) {
    const color : ColorResolvable = player.ratio > 1 ? 'GREEN' : 'RED';

    const template = new MessageEmbed()
    .setColor(color)
    .setTitle(`Stats of ${player.name}`)
    .setDescription('Retrieved from nade404 retake servers')
    .addFields(
		{ name: 'Kills', value: `${player.kills}` },
        { name: 'Deaths', value: `${player.deaths}` },
        { name: 'Ratio', value: `${player.ratio}` },
        { name: 'Headshots', value: `${player.headshots}` },
        { name: 'Headshots percent', value: `${player.headshots_percent}%` },
    )

    return template;
}

export function getTop10Template(players : Players, type : Top10Type) {
    let title = "";
    let prop : keyof Player;
    let symbol = ""; 

    switch (type) {
        case Top10Type.HS:
            title = "headshots percentage"
            prop = "headshots_percent"
            symbol = "% headshots"
            break;
        case Top10Type.KD:
            title = "K/D"
            prop = "ratio"
            symbol = ""
            break;
        default:
            throw new Error('undefined type');
    }

    const fields = players.players.map((player, index) => {
        return {
            name : `${index+1}th place`,
            value : `${player.name} (${player[prop]}${symbol} with ${player.kills} kills)`
        }
    });

    const template = new MessageEmbed()
    .setColor('GREEN')
    .setTitle(`Top 10 by ${title}`)
    .setDescription('Retrieved from nade404 retake servers')
    .addFields(fields)

    return template;
}