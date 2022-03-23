const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("modlog")
        .setDescription("Modlog command system")
        .addSubcommand(subcommand =>
            subcommand
                .setName("show")
                .setDescription("Shows a user's modlog")
                .addUserOption(option =>
                    option
                        .setName("user")
                        .setDescription("User to show the modlog of")
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("add")
                .setDescription("Add a modlog to a user")
                .addUserOption(option =>
                    option
                        .setName("user")
                        .setDescription("User to add the modlog to")
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option
                        .setName("reason")
                        .setDescription("Reason for modlog")
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("del")
                .setDescription("Deletes a modlog")
                .addUserOption(option =>
                    option
                        .setName("user")
                        .setDescription("User to have modlog deleted from")
                        .setRequired(true)
                )
                .addStringOption(option =>
                    option
                        .setName("id")
                        .setDescription("id of the modlog to delete")
                        .setRequired(true)
                )
        )
        .addSubcommand(subcommand =>
            subcommand
                .setName("clear")
                .setDescription("Clear a user's modlog")
                .addUserOption(option =>
                    option
                        .setName("user")
                        .setDescription("User to have the modlog cleared")
                        .setRequired(true)
                )
        )
}