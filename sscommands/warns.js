const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("warn")
        .setDescription("warn command system")
        .setDefaultPermission(false)
        .addSubcommand(subcommand =>
            subcommand
                .setName("show")
                .setDescription("Shows a user's warnings")
                .addUserOption(option =>
                    option
                        .setName("user")
                        .setDescription("User to show warnings from")
                        .setRequired(true)
                )
                .addBooleanOption(option =>
                    option
                        .setName("public")
                        .setDescription("Send details publicly")
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("add")
                .setDescription("Add a warn to a user")
                .addUserOption(option =>
                    option
                        .setName("user")
                        .setDescription("User to be warned")
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option
                        .setName("reason")
                        .setDescription("Reason for the warning")
                        .setRequired(true)
                )
                .addBooleanOption(option =>
                    option
                        .setName("public")
                        .setDescription("Send details publicly")
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("del")
                .setDescription("Deletes a warn")
                .addStringOption(option =>
                    option
                        .setName("id")
                        .setDescription("id of the warn to delete")
                        .setRequired(true)
                )
                .addBooleanOption(option =>
                    option
                        .setName("public")
                        .setDescription("Send details publicly")
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("clear")
                .setDescription("Clear a user's warnings")
                .addUserOption(option =>
                    option
                        .setName("user")
                        .setDescription("User to clear warnings from")
                        .setRequired(true)
                )
                .addBooleanOption(option =>
                    option
                        .setName("public")
                        .setDescription("Send details publicly")
                        .setRequired(true)
                )
        )
}