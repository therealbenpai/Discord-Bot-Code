const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('modlog')
		.setDescription('Moderation Logs')
		.addSubcommand(subcommand =>
			subcommand
			.setName()
			)
}