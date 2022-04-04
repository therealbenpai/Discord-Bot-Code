const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config-files/config.json');
const fs = require('fs');

/*
For Command Files:

const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
    .setName(name)
    .setDescription(description)
    .add#####Option(option =>
      option
        .setName()
        .setDescription()
        .setRequired(true)
    )
}
*/
const gcommands = [].map(command => command.toJSON());

const sscommands = [].map(command => command.toJSON());

const sscommandFiles = fs
    .readdirSync('./sscommands')
    .filter(file => file.endsWith('.js'));

for (const file of sscommandFiles) {
    const command = require(`./sscommands/${file}`);
    sscommands.push(command.data.toJSON());
}

const gcommandFiles = fs
    .readdirSync('./gcommands')
    .filter(file => file.endsWith('.js'));

for (const file of gcommandFiles) {
    const command = require(`./gcommands/${file}`);
    gcommands.push(command.data.toJSON());
}

const rest1 = new REST({ version: '9' }).setToken(token);
const rest2 = new REST({ version: '9' }).setToken(token);

rest1
    .put(Routes.applicationCommands(clientId), { body: gcommands })
    .then(_ => console.log('Successfully registered Global application commands.'))
    .catch(console.error);

rest2
    .put(Routes.applicationGuildCommands(clientId, guildId), { body: sscommands })
    .then(() => console.log('Successfully registered Guild application commands.'))
    .catch(console.error);