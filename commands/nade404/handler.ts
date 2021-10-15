import { CommandInteraction } from "discord.js";
import { ApiResponse } from "../../types/Response";
import { getStatsBySteamId } from "../../utils/Nade404ApiCalls";

export const nade404handler = async (interaction: CommandInteraction) : Promise<void> => {
    switch (interaction.options.getSubcommand(true)) {
        case 'stats':
            const steamId = interaction.options.getString('steamid', true)
            const { success, players } : ApiResponse = await getStatsBySteamId(steamId);
            if (success) interaction.reply(JSON.stringify(players))
            else interaction.reply("Error, player not found");
    }
}