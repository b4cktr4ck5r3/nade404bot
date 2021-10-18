import { CommandInteraction } from "discord.js";
import userQuery from "../../database/userQuery";
import { Player, Players } from "../../types/player";
import { ApiResponse } from "../../types/response";
import { Top10Type } from "../../types/top10";
import { getStatsBySteamId, getTop10Hs, getTop10Kd } from "../../utils/apiCalls";
import { FormatSteamId } from "../../utils/steam";
import { getErrorTemplate } from "../../utils/template";
import { subCmdMe } from "./subcommands/me";
import { subCmdRegister } from "./subcommands/register";
import { subCmdStatsDiscord } from "./subcommands/stats.discord";
import { subCmdStatsSteam } from "./subcommands/stats.steam";
import { subCmdTop10 } from "./subcommands/top10hs";
import { getStatsTemplate, getTop10Template } from "./template";

// TODO : upgrade nested switch by replacing with function (better readability)
export const nade404handler : Function = async (interaction: CommandInteraction) : Promise<void> => {
    const subCommandGroup : string | null = interaction.options.getSubcommandGroup(false);
    const subCommand : string | null = interaction.options.getSubcommand(false);

    if (subCommandGroup != null){
        switch (subCommandGroup) {
            case 'stats': {
                switch (subCommand) {
                    case 'steam':
                        subCmdStatsSteam(interaction);
                        break;
                    case 'discord':
                        subCmdStatsDiscord(interaction);
                        break;
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
            case 'me' :
                subCmdMe(interaction);
                break;
            case 'register' :
                subCmdRegister(interaction);
                break;
        }
    }
}