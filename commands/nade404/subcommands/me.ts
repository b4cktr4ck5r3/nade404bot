import { CommandInteraction } from "discord.js";
import userQuery from "../../../database/userQuery";
import { Player } from "../../../types/player";
import { ApiResponse } from "../../../types/response";
import { getStatsBySteamId } from "../../../utils/apiCalls";
import { FormatSteamId } from "../../../utils/steam";
import { getErrorTemplate } from "../../../utils/template";
import { getStatsTemplate } from "../template";

export async function me(interaction: CommandInteraction){
    const discordId : string = interaction.user.id;
    let steamId : string | null | undefined = FormatSteamId(await userQuery.getUser(discordId).then(user => user?.steamId));
    if (steamId) {
        const { success, players } : ApiResponse = await getStatsBySteamId(steamId);
        if (success) interaction.reply({ embeds: [getStatsTemplate(players as Player)] })
        else interaction.reply({ embeds: [getErrorTemplate("Error on getting stats", "Cannot get stats")] })
    } else {
        interaction.reply({ embeds: [getErrorTemplate("Error on getting stats", "Cannot get stats")] })
    }
}