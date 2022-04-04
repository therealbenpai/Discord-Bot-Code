const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ban')
		.setDescription('Bans a user')
		.setDefaultPermission(false)
		.addUserOption(option =>
			option
				.setName("user")
				.setDescription("User to be banned")
				.setRequired(true)
		)
		.addStringOption(option =>
			option
				.setName("reason")
				.setDescription("Reason for the ban")
				.setRequired(true)
		)
		.addBooleanOption(option =>
			option
				.setName("public")
				.setDescription("Send details publicly")
				.setRequired(true)
		)
}