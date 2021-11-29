import { du_users } from ".prisma/client";
import { ColorResolvable, EmbedFieldData, MessageEmbed } from "discord.js";
import { LobbyConfiguration, LobbyPlayer } from "../../types/lobby";
import { Player, Players } from "../../types/player";
import { Top10Type } from "../../types/top10";
import { getCurrentFormatedDate } from "../../utils/date";
import { getSteamInfos } from "../../utils/steam";
import { userMention } from "@discordjs/builders";

export async function getStatsTemplate(player : Player) : Promise<MessageEmbed> {
    const color : ColorResolvable = player.ratio > 1 ? 'GREEN' : 'RED';
    const { response : { players}} =  await getSteamInfos(player.steam_id);
    let steamInfos;
    if (players) steamInfos = players[0]
    else steamInfos = null;
    const template : MessageEmbed = new MessageEmbed()
    .setColor(color)
    .setTitle(`📊 Stats of ${player.name}`)
    .setThumbnail(steamInfos === null ? '' : steamInfos.avatarmedium)
    .setDescription('Retrieved from nade404 retake servers')
    .addFields(
        { name: '🏆 Rank', value: `${player.rank}` },
		{ name: '🔫 Kills', value: `${player.kills}`, inline: true },
        { name: '💀 Deaths', value: `${player.deaths}`, inline: true},
        { name: `${player.ratio > 1 ? '📈' : '📉'} Ratio`, value: `${player.ratio}`, inline: true },
        { name: '🤯 Headshots', value: `${player.headshots}`, inline: true },
        { name: '💥 Headshot %', value: `${player.headshots_percent}%`, inline: true }
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

export function getCreateLobbyTemplate(lobbyConfiguration : LobbyConfiguration) : MessageEmbed {
    const color : ColorResolvable = "ORANGE"
    const fields : EmbedFieldData | EmbedFieldData[] = Object.entries(lobbyConfiguration)
    .filter(([name, value]) => value !== null)
    .map(([name, value]) => {
        name = convertPropertyNameToField(name);
        return {name, value : String(value), inline: true}
    });

    const template : MessageEmbed = new MessageEmbed()
    .setColor(color)
    .setTitle(`📊 Creation of the lobby`)
    .setDescription('Configuring lobby')
    .addFields(fields)
    .setFooter(`Generate the ${getCurrentFormatedDate()}`)

    return template;
}

export function getEndedLobbyConfig(lobbyConfiguration : LobbyConfiguration) : MessageEmbed {
    const template : MessageEmbed = new MessageEmbed()
    .setColor("GREEN")
    .setTitle(`📊 Lobby created`)
    .setDescription('Configuring lobby')
    .addFields({
        name: "Ended",
        value: "Lobby created"
    })
    .setFooter(`Generate the ${getCurrentFormatedDate()}`)

    return template;
}

export function getWaintingPlayerLobby(lobbyConfiguration : LobbyConfiguration, players : du_users[]) : MessageEmbed {
    const color : ColorResolvable = "ORANGE"
    const fields : EmbedFieldData | EmbedFieldData[] = Object.entries(lobbyConfiguration)
    .filter(([name, value]) => value !== null)
    .map(([name, value]) => {
        name = convertPropertyNameToField(name);
        return {name, value : String(value), inline: true}
    });

    let strPlayers : string = players.map(p => userMention(p.userid)).join('\n');
    if (!strPlayers) strPlayers = "Waiting for players..."

    fields.push({
        name: 'Players in lobby',
        value: strPlayers
    })

    const template : MessageEmbed = new MessageEmbed()
    .setColor(color)
    .setTitle(`📊 Lobby created`)
    .setDescription('Lobby configuration:')
    .addFields(fields)
    .setFooter(`Generate the ${getCurrentFormatedDate()}`)

    return template;
}

function convertPropertyNameToField(name: string): string {
    switch (name) {
        case 'Privacy':
            return '🔑 Privacy';
        case 'KnifeEnabled':
            return '🔪 Knife';
        case 'MRType':
            return '🎮 Rounds';
        case 'Overtime':
            return '⚔️ Overtime';
        default:
            return name
    }
}