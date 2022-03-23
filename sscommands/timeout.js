const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('timeout')
		.setDescription('Puts a user into timeout')
}