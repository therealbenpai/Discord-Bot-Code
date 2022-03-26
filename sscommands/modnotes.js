const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('modnotes')
		.setDescription('Moderation notes for a user')
		.addSubcommand(subcommand =>
			subcommand
				.setName("show")
				.setDescription("Shows the user's modnotes")
				.addUserOption(option =>
					option
						.setName("user")
						.setDescription("User to show the modnotes of")
						.setRequired(true)
				)
				.addBooleanOption(option =>
					option
						.setName("public")
						.setDescription("Send details publicly")
						.setRequired(true)
				)
		)
		.addSubcommand(subcommand =>
			subcommand
				.setName("add")
				.setDescription("add a modnote to a user")
				.addUserOption(option =>
					option
						.setName("user")
						.setDescription("User to add the modnote to")
						.setRequired(true)
				)
				.addStringOption(option =>
					option
						.setName("note")
						.setDescription("The modnote")
						.setRequired(true)
				)
				.addBooleanOption(option =>
					option
						.setName("public")
						.setDescription("Send details publicly")
						.setRequired(true)
				)
		)
		.addSubcommand(subcommand =>
			subcommand
				.setName("delete")
				.setDescription("delete a modnote from a user")
				.addUserOption(option =>
					option
						.setName("user")
						.setDescription("User to delete the modnote from")
						.setRequired(true)
				)
				.addBooleanOption(option =>
					option
						.setName("public")
						.setDescription("Send details publicly")
						.setRequired(true)
				)
		)
}