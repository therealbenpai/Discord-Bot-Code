const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('innerval')
        .setDescription('Sets the status innerval')
        .setDefaultPermission(false)
        .addIntegerOption(option =>
            option
                .setName('time')
                .setDescription('Time in seconds')
                .setRequired(true)
        )
}