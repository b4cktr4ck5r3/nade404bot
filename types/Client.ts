import { SlashCommandBuilder } from "@discordjs/builders";
import { BaseCommandInteraction, Client } from "discord.js";

export interface Command {
    data: SlashCommandBuilder
    execute (interaction: BaseCommandInteraction): void
}

export interface ClientWithCommands extends Client {
    commands?: Map<string, Command>
}