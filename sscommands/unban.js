const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('unban')
		.setDescription('Unbans a user')
		.setDefaultPermission(false)
		.addStringOption(option =>
			option
				.setName("userid")
				.setDescription("ID of the user to be unbanned")
				.setRequired(true)
		)
		.addStringOption(option =>
			option
				.setName("reason")
				.setDescription("Reason for the unban")
				.setRequired(true)
		)
		.addBooleanOption(option =>
			option
				.setName("public")
				.setDescription("Send details publicly")
				.setRequired(true)
		)
}