const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kick')
        .setDescription('Kicks a user')
        .addUserOption(option =>
            option
                .setName("user")
                .setDescription("User to be kicked")
                .setRequired(true)
        )
        .addStringOption(option =>
            option
                .setName("reason")
                .setDescription("Reason for the kick")
                .setRequired(true)
        )
        .addBooleanOption(option =>
            option
                .setName("public")
                .setDescription("Send details publicly")
                .setRequired(true)
        )
}