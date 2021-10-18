import { CommandInteraction } from "discord.js";
import userQuery from "../../database/userQuery";
import { Player, Players } from "../../types/player";
import { ApiResponse } from "../../types/response";
import { Top10, Top10Type } from "../../types/top10";
import { getStatsBySteamId, getTop10Hs, getTop10Kd } from "../../utils/apiCalls";
import { FormatSteamId } from "../../utils/steam";
import { getErrorTemplate } from "../../utils/template";
import { subCmdMe } from "./subcommands/me";
import { subCmdRegister } from "./subcommands/register";
import { subCmdStatsDiscord } from "./subcommands/stats.discord";
import { subCmdStatsSteam } from "./subcommands/stats.steam";
import { subCmdTop10 } from "./subcommands/top10";
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
                subCmdTop10(interaction, { type: Top10Type.HS, request() { return getTop10Hs() }})
                break;
            }
            case 'top10kd': {
                subCmdTop10(interaction, { type: Top10Type.KD, request() { return getTop10Kd() }})
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