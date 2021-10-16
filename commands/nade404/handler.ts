import { CommandInteraction } from "discord.js";
import { Player, Players } from "../../types/player";
import { ApiResponse } from "../../types/response";
import { Top10Type } from "../../types/top10";
import { getStatsBySteamId, getTop10Hs, getTop10Kd } from "../../utils/apiCalls";
import { getErrorTemplate } from "../../utils/template";
import { getStatsTemplate, getTop10Template } from "./template";

// TODO : upgrade nested switch by replacing with function (better readability)
export const nade404handler = async (interaction: CommandInteraction) : Promise<void> => {
    const subCommandGroup = interaction.options.getSubcommandGroup(false);
    const subCommand = interaction.options.getSubcommand(false);

    if (subCommandGroup != null){
        switch (subCommandGroup) {
            case 'stats': {
                switch (subCommand) {
                    case 'steam': {
                        let steamId : string = interaction.options.getString('steamid', true);
                        if (steamId.startsWith("STEAM_0")) steamId = steamId.replace("STEAM_0", "STEAM_1")
            
                        const { success, players } : ApiResponse = await getStatsBySteamId(steamId);
                        if (success) interaction.reply({ embeds: [getStatsTemplate(players as Player)] })
                        else interaction.reply({ embeds: [getErrorTemplate("Error on getting stats", "Cannot get stats")] })
                        break;
                    }
                    case 'discord': {
                        interaction.reply("Under development");
                        break;
                    }
                }
                break;
            }
        }
    } else {
        switch (subCommand) {
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
            case 'me' : {
                interaction.reply(JSON.stringify(interaction.user.username));
            }
        }
    }
}