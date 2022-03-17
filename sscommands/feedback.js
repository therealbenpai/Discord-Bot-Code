const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('feedback')
    .setDescription('Submit Some Feedback')
}