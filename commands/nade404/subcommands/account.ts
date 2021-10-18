import { CommandInteraction } from "discord.js";
import userQuery from "../../../database/userQuery";
import { formatSteamId } from "../../../utils/steam";

export async function register(interaction: CommandInteraction) {
    const discordId : string = interaction.user.id;
    let steamId : string = formatSteamId(interaction.options.getString('steamid', true));

    const register : boolean = await userQuery.addUser({discordId:discordId, steamId:steamId});
    if (register) interaction.reply("Successfully registered.");
    else interaction.reply("You are already registered !");
}

export async function changeSteamId(interaction: CommandInteraction) {
    const discordId : string = interaction.user.id;
    let steamId : string = formatSteamId(interaction.options.getString('steamid', true));

    const update : boolean = await userQuery.updateUser({discordId:discordId, steamId:steamId})
    if (update) interaction.reply("Successfully updated.");
    else interaction.reply("You are not registered !");
}