import { CommandInteraction } from "discord.js";
import { FindUser } from "../../../database/query";
import { Player } from "../../../types/player";
import { ApiResponse } from "../../../types/response";
import { getStatsBySteamId } from "../../../utils/apiCalls";
import { formatSteamId } from "../../../utils/steam";
import { getErrorTemplate } from "../../../utils/template";
import { getStatsTemplate } from "../template";

export async function me(interaction: CommandInteraction){
    const discordId : string = interaction.user.id;
    let steamId : string | null = formatSteamId(await FindUser(discordId).then(res => res.steamId));
    if (steamId) {
        const { success, players } : ApiResponse = await getStatsBySteamId(steamId);
        if (success) interaction.reply({ embeds: [await getStatsTemplate(players as Player)] })
        else interaction.reply({ embeds: [getErrorTemplate("Error on getting stats", "Cannot get stats")] })
    } else {
        interaction.reply({ embeds: [getErrorTemplate("Error on getting stats", "Cannot get stats")] })
    }
}