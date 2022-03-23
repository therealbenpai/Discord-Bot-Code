const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('modnotes')
		.setDescription('Moderation notes for a user')
}