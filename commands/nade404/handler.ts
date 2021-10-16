import { CommandInteraction } from "discord.js";
import { Player, Players } from "../../types/player";
import { ApiResponse } from "../../types/response";
import { Top10Type } from "../../types/top10";
import { getStatsBySteamId, getTop10Hs, getTop10Kd } from "../../utils/apiCalls";
import { getErrorTemplate } from "../../utils/template";
import { getStatsTemplate, getTop10Template } from "./template";

export const nade404handler = async (interaction: CommandInteraction) : Promise<void> => {
    switch (interaction.options.getSubcommand(true)) {
        case 'stats': {
            const steamId = interaction.options.getString('steamid', true);
            const { success, players } : ApiResponse = await getStatsBySteamId(steamId);
            if (success) interaction.reply({ embeds: [getStatsTemplate(players as Player)] })
            else interaction.reply({ embeds: [getErrorTemplate("Error on getting stats", "Cannot get stats")] })
            break;
        }
        case 'top10hs': {
            const { success, players } : ApiResponse = await getTop10Hs();
            if (success) interaction.reply({ embeds: [getTop10Template(players as Players, Top10Type.HS)] });
            else interaction.reply({ embeds: [getErrorTemplate("Error on getting top 10 hs", "Cannot get top 10 hs")] })
            break;
        }
        case 'top10kd': {
            const { success, players } : ApiResponse = await getTop10Kd();
            if (success) interaction.reply({ embeds: [getTop10Template(players as Players, Top10Type.KD)] });
            else interaction.reply({ embeds: [getErrorTemplate("Error on getting top 10 K/D", "Cannot get top 10 K/D")] })
            break;
        }
    }
}