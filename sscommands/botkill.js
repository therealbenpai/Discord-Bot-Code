const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('botkill')
    .setDescription('Kills The Bot')
    .setDefaultPermission(false)
}