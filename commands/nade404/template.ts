import { ColorResolvable, MessageEmbed } from "discord.js";
import { Player, Players } from "../../types/player";
import { Top10Type } from "../../types/top10";
import { getCurrentFormatedDate } from "../../utils/date";

export function getStatsTemplate(player : Player) : MessageEmbed {
    const color : ColorResolvable = player.ratio > 1 ? 'GREEN' : 'RED';

    const template : MessageEmbed = new MessageEmbed()
    .setColor(color)
    .setTitle(`📊 Stats of ${player.name}`)
    .setDescription('Retrieved from nade404 retake servers')
    .addFields(
		{ name: '🔫 Kills', value: `${player.kills}`, inline: true },
        { name: '💀 Deaths', value: `${player.deaths}`, inline: true},
        { name: `${player.ratio > 1 ? '📈' : '📉'} Ratio`, value: `${player.ratio}`, inline: true },
        { name: '🤯 Headshots', value: `${player.headshots}`, inline: true },
        { name: '💥 Headshot %', value: `${player.headshots_percent}%`, inline: true },
    )
    .setFooter(`Generate the ${getCurrentFormatedDate()}`)

    return template;
}

const top10classement = [
    {icon:'🥇', abbr :'st'},
    {icon:'🥈', abbr :'nd'},
    {icon:'🥉', abbr :'rd'},
    {icon:'4️⃣', abbr :'th'},
    {icon:'5️⃣', abbr: 'th'},
    {icon:'6️⃣', abbr: 'th'},
    {icon:'7️⃣', abbr: 'th'},
    {icon:'8️⃣', abbr: 'th'},
    {icon:'9️⃣', abbr: 'th'},
    {icon:'🔟',  abbr: 'th'}
]

export function getTop10Template(players : Players, type : Top10Type) : MessageEmbed {
    let title : string = "";
    let prop : keyof Player;
    let symbol :string = ""; 

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
            name : `${top10classement[index].icon} ${index+1}${top10classement[index].abbr} place`,
            value : `${player.name} (${player[prop]}${symbol} with ${player.kills} kills)`
        }
    });

    const template : MessageEmbed = new MessageEmbed()
    .setColor('GREEN')
    .setTitle(`🏆 Top 10 by ${title}`)
    .setDescription('Retrieved from nade404 retake servers')
    .addFields(fields)
    .setFooter(`Generate on ${getCurrentFormatedDate()}`)

    return template;
}