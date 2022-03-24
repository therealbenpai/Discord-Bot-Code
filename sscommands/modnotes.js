const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('modnotes')
		.setDescription('Moderation notes for a user')
		.addSubcommand(subcommand =>
			subcommand
			.setName("add")
			.setDescription("add a modnote to a user")
			.addUserOption(option => 
				option
				.setName("user")
				.setDescription("User to add the mod note to")
				.setRequired(true)
				)
			)
}