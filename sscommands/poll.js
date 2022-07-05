const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('poll')
        .setDescription('Start a poll')
        .addSubcommand(subcommand =>
            subcommand
                .setName('yn')
                .setDescription('Start a yes/no poll')
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName('multi')
                .setDescription('Start a multiple choice poll')
                .addIntegerOption(option =>
                    option
                        .setName('amount')
                        .setDescription('Amount of options')
                        .setRequired(true)
                        .setMaxValue(4)
                        .setMinValue(2)
                )
        )
}