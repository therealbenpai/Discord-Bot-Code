const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('timeout')
		.setDescription('Puts a user into timeout')
		.setDefaultPermission(false)
		.addUserOption(option =>
			option
				.setName("user")
				.setDescription("User to be timeout-ed")
				.setRequired(true)
		)
		.addIntegerOption(option =>
			option
				.setName("minutes")
				.setDescription("Minutes to mute the user for")
				.setMinValue(5)
				.setMaxValue(120)
				.setRequired(true)
		)
		.addStringOption(option =>
			option
				.setName("reason")
				.setDescription("Reason for the timeout")
				.setRequired(true)
		)
		.addBooleanOption(option =>
			option
				.setName("public")
				.setDescription("Send details publicly")
				.setRequired(true)
		)
}