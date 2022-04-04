const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('addstaff')
    .setDescription('Add the staff role to yourself')
    .setDefaultPermission(false)
}