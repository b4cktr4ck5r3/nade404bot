import { getCommandsAsJSON } from './utils/commandsFile';
import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { clientId, guildId, token } from './config.json';
import * as fs from 'fs';

async function deployCommands() : Promise<void> {
	const rest : REST = new REST({ version: '9' }).setToken(token);

	console.log('Started refreshing application (/) commands.');

	await rest.put(
		Routes.applicationGuildCommands(clientId, guildId), {
			body: await getCommandsAsJSON()
		})
		.then(() => console.log("Successfully reloaded application (/) commands."))
		.catch(console.error);
}

deployCommands().then(() => console.log("script done"));