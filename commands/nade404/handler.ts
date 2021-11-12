import * as subCmd from "./subcommands"
import { CommandInteraction } from "discord.js";
import { Top10Type } from "../../types/top10";
import { getTop10Hs, getTop10Kd } from "../../utils/apiCalls";

// TODO : upgrade nested switch by replacing with function (better readability)
export const nade404handler : Function = async (interaction: CommandInteraction) : Promise<void> => {
    const subCommandGroup : string | null = interaction.options.getSubcommandGroup(false);
    const subCommand : string | null = interaction.options.getSubcommand(false);

    if (subCommandGroup != null){
        switch (subCommandGroup) {
            case 'stats': {
                switch (subCommand) {
                    case 'steam':
                        subCmd.statsSteam(interaction);
                        break;
                    case 'discord':
                        subCmd.statsDiscord(interaction);
                        break;
                }
                break;
            }
            case 'lobby': {
                switch (subCommand) {
                    case 'create':
                        subCmd.createLobby(interaction);
                        break;
                }
            }
        }
    } else {
        switch (subCommand) {
            case 'top10hs': 
                subCmd.top10(interaction, { type: Top10Type.HS, request() { return getTop10Hs() }})
                break;
            case 'top10kd':
                subCmd.top10(interaction, { type: Top10Type.KD, request() { return getTop10Kd() }})
                break;            
            case 'me' :
                subCmd.me(interaction);
                break;
            case 'register' :
                subCmd.register(interaction);
                break;
            case 'change_steam_id':
                subCmd.changeSteamId(interaction);
                break;
        }
    }
}