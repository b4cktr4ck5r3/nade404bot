import { Interaction, Intents, Client, Collection } from "discord.js";
import { token } from './config.json'
import { ClientWithCommands, Command } from "./types/Client";
import { getCommandsAsMap } from "./utils/CommandsFile";

const fs = require('fs');

async function main() {
	const client : ClientWithCommands = new Client({ intents: [Intents.FLAGS.GUILDS] });
	client.commands = await getCommandsAsMap();
	
	client.once('ready', () => {
		console.log('=== Bot is ready ===');
	});
	
	client.on('interactionCreate', async interaction => {
		if (!interaction.isCommand()) return;
	
		const command : Command | undefined = client.commands?.get(interaction.commandName);
		
		if (!command) return;
	
		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	});
	
	client.login(token);
}

main();