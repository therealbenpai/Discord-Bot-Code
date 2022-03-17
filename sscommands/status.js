const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('status')
        .setDescription('Add a status to the rotation')
        .addStringOption(option =>
            option
                .setName('type')
                .setDescription('The Status Type')
                .setRequired(true)
                .addChoice('Playing', 'PLAYING')
                .addChoice('Listening', 'LISTENING')
                .addChoice('Watching', 'WATCHING')
        )
        .addStringOption(option =>
          option
            .setName('status')
            .setDescription('The status message')
            .setRequired(true)
        )
}