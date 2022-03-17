const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('rdm')
        .setDescription('DMs a random user a message')
        .addStringOption(option =>
            option
                .setName('message')
                .setDescription('The Message To Be Sent')
                .setRequired(true)
        )
}