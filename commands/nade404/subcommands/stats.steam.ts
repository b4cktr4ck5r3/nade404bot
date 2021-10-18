import { CommandInteraction } from "discord.js";
import { Player } from "../../../types/player";
import { ApiResponse } from "../../../types/response";
import { getStatsBySteamId } from "../../../utils/apiCalls";
import { FormatSteamId } from "../../../utils/steam";
import { getErrorTemplate } from "../../../utils/template";
import { getStatsTemplate } from "../template";

export async function subCmdStatsSteam(interaction: CommandInteraction) {
    let steamId : string = FormatSteamId(interaction.options.getString('steamid', true));
           
    const { success, players } : ApiResponse = await getStatsBySteamId(steamId);
    if (success) interaction.reply({ embeds: [getStatsTemplate(players as Player)] })
    else interaction.reply({ embeds: [getErrorTemplate("Error on getting stats", "Cannot get stats")] })
}