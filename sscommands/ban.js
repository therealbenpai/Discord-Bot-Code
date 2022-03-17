const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Bans A User')
    .addUserOption(option =>
    option
      .setName('user')
      .setDescription('User To Be Banned')
      .setRequired(true)
    )
}