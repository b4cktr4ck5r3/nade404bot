import { CommandInteraction } from "discord.js";
import { FindUser } from "../../../database/query";
import { Player } from "../../../types/player";
import { ApiResponse } from "../../../types/response";
import { getStatsBySteamId } from "../../../utils/apiCalls";
import { formatSteamId } from "../../../utils/steam";
import { getErrorTemplate } from "../../../utils/template";
import { getStatsTemplate } from "../template";

export async function statsDiscord(interaction: CommandInteraction) {
    const discordId : string = interaction.options.getUser('user', true).id;
    const steamId : string | null = formatSteamId(await FindUser(discordId).then(user => user.steamId));
    if (steamId) {
        const { success, players } : ApiResponse = await getStatsBySteamId(steamId);
        if (success) interaction.reply({ embeds: [await getStatsTemplate(players as Player)] })
        else interaction.reply({ embeds: [getErrorTemplate("Error on getting stats", "Cannot get stats")] })
    } else {
        interaction.reply({ embeds: [getErrorTemplate("Error on getting stats", "Player not registered")] })
    }
}

export async function statsSteam(interaction: CommandInteraction) {
    let steamId : string = formatSteamId(interaction.options.getString('steamid', true));
           
    const { success, players } : ApiResponse = await getStatsBySteamId(steamId);
    if (success) interaction.reply({ embeds: [await getStatsTemplate(players as Player)] })
    else interaction.reply({ embeds: [getErrorTemplate("Error on getting stats", "Cannot get stats")] })
}