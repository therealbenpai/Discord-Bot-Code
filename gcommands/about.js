const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('about')
        .setDescription('About Me')
        .addBooleanOption(option =>
            option
                .setName('dm')
                .setDescription('DM Responce')
                .setRequired(true)
        )
}