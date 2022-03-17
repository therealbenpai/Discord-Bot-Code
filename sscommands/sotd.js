const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('sotd')
    .setDescription('Start the sond of the day')
    .addStringOption(option =>
      option
        .setName('input')
        .setDescription('Song Name \' by \' Author format please')
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName('link')
        .setDescription('Song link')
    )
}