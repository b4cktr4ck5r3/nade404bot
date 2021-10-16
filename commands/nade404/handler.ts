import { CommandInteraction } from "discord.js";
import { Player } from "../../types/player";
import { ApiResponse } from "../../types/response";
import { getStatsBySteamId, getTop10Hs, getTop10Kd } from "../../utils/apiCalls";
import { getStatsTemplate } from "./template";

export const nade404handler = async (interaction: CommandInteraction) : Promise<void> => {
    switch (interaction.options.getSubcommand(true)) {
        case 'stats': {
            const steamId = interaction.options.getString('steamid', true);
            const { success, players } : ApiResponse = await getStatsBySteamId(steamId);
            if (success) interaction.reply({ embeds: [getStatsTemplate(players as Player)] })
            else interaction.reply("Error, player not found");
            break;
        }
        case 'top10hs': {
            const { success, players } : ApiResponse = await getTop10Hs();
            if (success) interaction.reply(JSON.stringify(players));
            else interaction.reply("Error, players not found");
            break;
        }
        case 'top10kd': {
            const { success, players } : ApiResponse = await getTop10Kd();
            if (success) interaction.reply(JSON.stringify(players));
            else interaction.reply("Error, players not found");
            break;
        }
    }
}