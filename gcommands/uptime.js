const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('uptime')
    .setDescription('Shows how long the bot has been online')
}