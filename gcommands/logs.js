const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('logs')
        .setDescription('View Log Files')
        .addSubcommand(subcommand =>
            subcommand
                .setName("allowcmd")
                .setDescription("Shows the allowcmd.log file contents")
                .addBooleanOption(option =>
                    option
                        .setName("public")
                        .setDescription("Send details publicly")
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("denycmd")
                .setDescription("Shows the denycmd.log file contents")
                .addBooleanOption(option =>
                    option
                        .setName("public")
                        .setDescription("Send details publicly")
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("echo")
                .setDescription("Shows the echo.log file contents")
                .addBooleanOption(option =>
                    option
                        .setName("public")
                        .setDescription("Send details publicly")
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("errorlog")
                .setDescription("Shows the errorlog.log file contents")
                .addBooleanOption(option =>
                    option
                        .setName("public")
                        .setDescription("Send details publicly")
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("rdm")
                .setDescription("Shows the rdm.log file contents")
                .addBooleanOption(option =>
                    option
                        .setName("public")
                        .setDescription("Send details publicly")
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("session")
                .setDescription("Shows the session.log file contents")
                .addBooleanOption(option =>
                    option
                        .setName("public")
                        .setDescription("Send details publicly")
                        .setRequired(true)
                )
        )
}