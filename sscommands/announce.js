const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('announce')
        .setDescription('Announce a message')
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