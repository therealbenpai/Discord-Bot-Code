const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('eannounce')
        .setDescription('Make an announcement, but in an embed')
        .addStringOption(option =>
            option
                .setName('content')
                .setDescription('Text to be sent')
                .setRequired(true)
        )
        .addBooleanOption(option =>
            option
                .setName('ping')
                .setDescription('Ping announcments')
                .setRequired(true)
        )
}