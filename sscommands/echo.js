const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
    .setName('echo')
    .setDescription('Echos Something')
    .addStringOption(
        option =>
            option
                .setName('output')
                .setDescription('String to output')
                .setRequired(true)
    )
}