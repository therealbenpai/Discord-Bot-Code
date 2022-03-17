const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('unban')
    .setDescription('Unbans A User')
    .addIntegerOption(
    option =>
      option
        .setName('userid')
        .setDescription('Enter User ID here')
        .setRequired(true)
    )
}