const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('private')
        .setDescription('Submit a anonymous message to a channel')
        .addSubcommand(subcommand =>
            subcommand
                .setName('rant')
                .setDescription('Submit a anonymous rant')
                .addStringOption(option =>
                    option
                        .setName('msg')
                        .setDescription('Rant Message')
                        .setRequired(true)
                )
        )
        
}