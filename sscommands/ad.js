const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('ad')
    .setDescription('Posts an Advertisment')
    .addStringOption(option =>
      option
        .setName('title')
        .setDescription('Title of the Ad')
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName('description')
        .setDescription('Description of the Ad')
        .setRequired(true)
    )
    .addStringOption(option =>
      option
        .setName('link')
        .setDescription('Link to what you\'re Advertising')
        .setRequired(true)
    )
}