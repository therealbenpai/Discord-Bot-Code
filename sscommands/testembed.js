const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('testembed')
    .setDescription('Test Embeds')
}