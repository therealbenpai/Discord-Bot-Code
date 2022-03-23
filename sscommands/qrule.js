const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('qrule')
		.setDescription('Quickly displays a server rule')
}