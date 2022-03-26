const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('qrule')
		.setDescription('Quickly displays a server rule')
		.addStringOption(option =>
			option
				.setName("rule")
				.setDescription("Rule to display")
				.setRequired(true)
				.addChoice('Rule 1', 'r1')
				.addChoice('Rule 2', 'r2')
				.addChoice('Rule 3', 'r3')
				.addChoice('Rule 4', 'r4')
				.addChoice('Rule 5', 'r5')
				.addChoice('Rule 6', 'r6')
				.addChoice('Rule 7', 'r7')
				.addChoice('Rule 8', 'r8')
				.addChoice('Rule 9', 'r9')
		)
}