const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
   data: new SlashCommandBuilder()
   .setName('session')
   .setDescription('Gets the session information')
}