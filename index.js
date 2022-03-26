//? Require the necessary discord.js classes
const { Client, Collection, Intents, guild, MessageEmbed, channel, User } = require(`discord.js`);
const { Builder, Embed } = require(`@discordjs/builders`);
const wait = require(`util`).promisify(setTimeout);
const StatusUpdater = require(`@tmware/status-rotate`)
const fUUID = require(`uuid`)
const cmdUtil = require('node-cmd')
const fs = require('fs')

//? Custom Utils
const cLog = require('./src/logfunc')
const { sessionUUID, startTime } = require('./src/util-vars')
const cuf = require('./src/util-func')

//? JSON Config Files
const { token } = require(`./config-files/config.json`);
const { userid, channelid, roleid } = require(`./config-files/ids.json`);
const { truth, dare } = require(`./config-files/tod.json`)
const { rdmUsers } = require('./config-files/cmd-confirm.json');
const { fact, id, facts } = require('./config-files/funfacts.json')

//? Locally Required Varibles
const regexcheck = /(shit)|(fuck)|(nigger)|(bitch)|(ass)/gi;
const statmsg = [
	{ type: `PLAYING`, name: `Your music` },
	{ type: `LISTENING`, name: `Your SOTD selections` },
	{ type: `PLAYING`, name: `with ur mum` },
	{ type: `WATCHING`, name: `anime` },
	{ type: `LISTENING`, name: `something idk` }
]
const staffrole = roleid[0];
var seconds = 30
const fStartTime = Date.now()

//? Discord Configuration
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
const Updater = new StatusUpdater(client, statmsg)

//? On startup code
client.once(`ready`, () => {
	console.log(`The bot has been properly started.\nStart Time: ${startTime}\nSession Code: ${sessionUUID}`);
	cLog.logs()
	Updater.updateStatus()
});

//? Command Handleing
client.on(`interactionCreate`, async interaction => {
	if (!interaction.isCommand()) { return; }

	function deny(user, cmd) {
		cLog.logd(user, cmd)
		interaction.reply({
			content: `<:mhdeny:936031945337479288> ${user.tag} You don't have the correct permissions to use ${cmd}`,
			ephemeral: true
		})
	}

	//? Quick Varibles
	const intermember = interaction.member;
	const interuser = interaction.user;

	//? Random Replies for "balls" command
	const randreply = {
		replys: [
			`HAHA get trolled!`,
			`You will never be good`,
			`HAHAHAHAHAHA`,
			`**This Post Was Made By Anti-Fun Gang**`,
			`What do you call a stupid Discord User? A ` + interuser.username
		]
	};

	//? Command name colector
	const { commandName } = interaction;

	function staffCheck() {
		if (interaction.member.roles.cache.has(roleid[0])) {
			return true;
		} else {
			return false;
		}
	}

	function permCheck() {
		const sc = staffCheck()
		if (sc === true || interaction.user.id === userid[0] || interaction.user.id === userid[1]) {
			return true;
		} else {
			return false;
		}
	}

	try {
		//? Command Reponses
		if (commandName === `ping`) {
			await interaction.reply(`Pong!`);
		}
		else if (commandName === `server`) {
			await interaction.reply(
				`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`
			);
		}
		else if (commandName === `user`) {
			await interaction.reply(`User info.`);
		}
		else if (commandName === `botkill`) {
			if (interuser.id === userid[0] || userid[1]) {
				await interaction.reply(`Killing the bot`);
				client.user.setStatus(`invisible`);
				console.error(`Bot Ended. Reason: Native Command Quit by: ` + interaction.user.tag);
				process.exit();
			}
			else {
				deny(interuser, `botkill`);
			}
		}
		else if (commandName === `sotd`) {
			const check = permCheck()
			if (check == true) {
				const string = interaction.options.getString(`input`);
				const msgstr = string.split(` by `);
				const link = interaction.options.getString(`link`);
				const schannel = client.channels.cache.get(channelid[0]);
				let embed;
				if (link == undefined || null) {
					embed = {
						color: cuf.rtbSpect(),
						author: {
							name: interuser.tag,
							icon_url: interuser.displayAvatarURL({ dynamic: true })
						},
						title: `Song Of The Day`,
						description: `**♪♫.ılılıll|llılılı.♫♪\ntoday’s song is:**\n\n**${msgstr[0]}** by **${msgstr[1]}**`,
						timestamp: new Date(),
						footer: {
							text: `Choosen by: ` + interuser.tag,
							icon_url: interuser.displayAvatarURL({ dynamic: true })
						}
					}
				}
				else {
					embed = {
						color: cuf.rtbSpect(),
						author: {
							name: interuser.tag,
							icon_url: interuser.displayAvatarURL({ dynamic: true })
						},
						title: `Song Of The Day`,
						description: `**♪♫.ılılıll|llılılı.♫♪\ntoday’s song is:**\n\n**${msgstr[0]}** by **${msgstr[1]}**`,
						fields: [
							{
								name: 'Link:',
								value: `[Song Link](${link})`,
								inline: true
							}
						],
						timestamp: new Date(),
						footer: {
							text: `Choosen by: ` + interuser.tag,
							icon_url: interuser.displayAvatarURL({ dynamic: true })
						}
					}
				}
				cLog.loga(interuser, `sotd`);
				schannel.send({ content: `<@&771928489166897202>`, embeds: [embed] });
				await interaction.reply({
					content: `<:mhallow:936031945027096586> Sent the SOTD embed`,
					ephemeral: true
				});
			}
			else {
				deny(interuser, `sotd`);
			}
		}
		else if (commandName === `newchannel`) {
			await interaction.reply(`nope not in the mood`);
		}
		else if (commandName === `ad`) {
			const adchannel = client.channels.cache.get(channelid[1]);
			const title = interaction.options.getString(`title`);
			const description = interaction.options.getString(`description`);
			const link = interaction.options.getString(`link`);
			const nembed = {
				color: cuf.randHex('#'),
				title: title,
				url: link,
				author: {
					name: interuser.tag,
					icon_url: interuser.displayAvatarURL({ dynamic: true })
				},
				description: description,
				timestamp: new Date(),
				footer: {
					text: `Advertisment is not directly supported by Mango Hangout. This was posted by a member of the community`
				}
			}
			adchannel.send({ embeds: [nembed] });
			await interaction.reply(`<:mhallow:936031945027096586> Posted!`);
			cLog.loga(interuser, `ad`);
		}
		else if (commandName === `addstaff`) {
			if (intermember.roles.cache.has(roleid[1]) || intermember.roles.cache.has(roleid[2]) || interuser.id === userid[0]) {
				if (!intermember.roles.cache.has(roleid[0])) {
					const role = guild.roles.cache.find(role => role.id === roleid[0]);
					intermember.roles.add(role);
					interaction.reply({ content: `<:mhallow:936031945027096586> Added Staff Role`, ephemeral: true });
					cLog.loga(interuser, `addstaff`);
				}
				else {
					interaction.reply({
						content: `<:mhinfo:936031945090011197> You already have the role`,
						ephemeral: true
					});
				}
			}
			else {
				deny(interuser, `addstaff`);
			}
		}
		else if (commandName === `announce`) {
			if (permCheck() == true) {
				const pingbol = interaction.options.getBoolean(`ping`);
				const content = interaction.options.getString(`content`);
				const achannel = client.channels.cache.get(channelid[2]);
				if (pingbol === true) {
					achannel.send(
						`<@&777654579361349682>\n` +
						content +
						`\n\n**Sent by:** ` +
						interuser.tag
					);
				}
				else {
					achannel.send(content + `\n\n**Sent by:** ` + interuser.tag);
				}
				interaction.reply({ content: `<:mhallow:936031945027096586> Posted`, ephemeral: true });
				cLog.loga(interuser, `announce`);
			}
			else {
				deny(interuser, `announce`);
			}
		}
		else if (commandName === `eannounce`) {
			if (permCheck() == true) {
				const pingbol = interaction.options.getBoolean(`ping`);
				const content = interaction.options.getString(`content`);
				const achannel = client.channels.cache.get(channelid[2]);
				let embed = {
					color: cuf.randHex('#'),
					title: 'Announcement',
					author: {
						name: interuser.tag,
						icon_url: interuser.displayAvatarURL({ dynamic: true })
					},
					description: content,
					timestamp: new Date(),
					footer: {
						text: 'Annoumcement Pog'
					}
				}
				if (pingbol === true) {
					achannel.send(`<@&777654579361349682>`);
				}
				achannel.send({ embeds: [embed] })
				interaction.reply({ content: `<:mhallow:936031945027096586> Posted`, ephemeral: true });
				cLog.loga(interuser, `eannounce`);
			}
			else {
				deny(interuser, `eannounce`);
			}
		}
		else if (commandName === `about`) {
			const bol = interaction.options.getBoolean(`dm`);
			if (bol == true) {
				const user = client.users.cache.get(interuser.id);
				user.send(
					`Hello! I'm Mango Utillities Bot! Im used by the staff to post Songs of the days, to post announcements, and to post ads.` +
					` I also can tell info about the server and you! I was coded by ` +
					client.users.cache.get(userid[0]).tag
				);
				interaction.reply({ content: `<:validate_blue_purple:935929657092632586> Sent`, ephemeral: true });
			}
			else {
				interaction.reply({
					content:
						`Hello! I'm Mango Utillities Bot! Im used by the staff to post Songs of the days, to post announcements, and to post ads.` +
						` I also can tell info about the server and you! I was coded by ` +
						client.users.cache.get(userid[0]).tag,
					ephemeral: true
				});
			}
			cLog.loga(interuser, `about`);
		}
		else if (commandName === `balls`) {
			const member1 = intermember;
			if (permCheck() == false) {
				const user = interuser;
				const getid = interuser.id;
				const reinv = `https://discord.gg/bWqRxqsmc3`;
				await interaction.reply()
				await user.send(reinv);
				await wait(100);
				await interaction.guild.bans.create(getid);
				await wait(100);
				await interaction.guild.members.unban(getid);
			}
			else {
				var i;
				const num = Math.ceil(Math.random() * 100);
				const user = client.users.cache.get(interuser.id);
				interaction.reply({
					content: `DMing you ` + num + ` times`,
					ephemeral: true
				});
				for (i = 0; i < num; i++) {
					user.send(randreply.replys[cuf.arrayRNG(randreply.replys.length)]);
				}
			}
			cLog.loga(interuser, `balls`);
		}
		else if (commandName === `echo`) {
			const str = interaction.options.getString(`output`);
			const tr = regexcheck.test(str);
			if (!tr) {
				interaction.reply(str);
			}
			else {
				interaction.reply({
					content: `Message Contains Explicit Content`,
					ephemeral: true
				});
			}
			cLog.loge(interuser, str, tr)
			cLog.loga(interuser, `echo`);
		}
		else if (commandName === `truth`) {
			let embed;
			if (interaction.user.id == "589972995825729559") {
				embed = new MessageEmbed()
					.setColor(cuf.randHex(`#`))
					.setTitle(`Truth`)
					.setDescription("why are you horny 24/7?")
					.setTimestamp()
			}
			else {
				const rn = cuf.arrayRNG(truth.length)
				const output = truth[rn]
				embed = new MessageEmbed()
					.setColor(cuf.randHex(`#`))
					.setTitle(`Truth`)
					.setDescription(output)
					.setTimestamp()
			}
			interaction.reply({ embeds: [embed] })
			cLog.loga(interuser, `truth`)
		}
		else if (commandName === `dare`) {
			const rn = cuf.arrayRNG(dare.length)
			const output = dare[rn]
			const embed = new MessageEmbed()
				.setColor(cuf.randHex(`#`))
				.setTitle(`Dare`)
				.setDescription(output)
				.setTimestamp()
			interaction.reply({ embeds: [embed] })
			cLog.loga(interuser, `dare`)
		}
		else if (commandName === `tod`) {
			const choose = function () {
				const num = Math.floor(Math.random() * 2)
				if (num === 0) {
					return `truth`
				}
				else {
					return `dare`
				}
			}
			const todc = choose()
			let embed;
			switch (todc) {
				case 'truth':
					if (interaction.user.id == "589972995825729559") {
						embed = new MessageEmbed()
							.setColor(cuf.randHex('#'))
							.setTitle('Truth')
							.setDescription("why are you horny 24/7?")
							.setTimestamp()
					} else {
						const rn = cuf.arrayRNG(truth.length)
						const output = truth[rn]
						embed = new MessageEmbed()
							.setColor(cuf.randHex(`#`))
							.setTitle(`Truth`)
							.setDescription(output)
							.setTimestamp()
					}
					break;
				case 'dare':
					const rn = cuf.arrayRNG(dare.length)
					const output = dare[rn]
					embed = new MessageEmbed()
						.setColor(cuf.randHex(`#`))
						.setTitle(`Dare`)
						.setDescription(output)
						.setTimestamp()
					break;
				default:
					throw new Error("The command `tod` threw an error (switch-case err)")
			}
			interaction.reply({ embeds: [embed] })
			cLog.loga(interuser, `tod`)
		}
		else if (commandName == 'status') {
			if (interuser.id === userid[0] || intermember.roles.cache.has(roleid[1])) {
				let ctype = interaction.options.getString("type")
				let cmessage = interaction.options.getString("status")
				Updater.addStatus(
					{
						type: ctype,
						name: cmessage
					}
				)
				cLog.loga(interuser, 'status')
				interaction.reply({
					content: `Status Added`,
					ephemeral: true
				})
			} else {
				deny(interuser, 'status')
			}
		}
		else if (commandName == 'innerval') {
			if (interuser.id === userid[0]) {
				if (interaction.options.getInteger('time') <= 30) {
					interaction.reply({
						content: `Time needs to be greater than 30`,
						ephemeral: true
					})
				} else {
					seconds = interaction.options.getInteger('time')
					Updater.stop()
					Updater.start(1000 * seconds)
					interaction.reply({
						content: `Time has been updated to ${seconds}`,
						ephemeral: true
					})
					console.log(`Status clock timer has been updated to ${seconds}s`)
				}
			} else {
				cLog.logd(interuser, 'innerval')
			}
		}
		else if (commandName == 'rdm') {
			const str = interaction.options.getString(`message`)
			const tr = regexcheck.test(str);
			const randUserS = cuf.arrayRNG(rdmUsers.length)
			const sEndUser = rdmUsers[randUserS]
			if (tr) {
				client.users.fetch(sEndUser.toString(), false)
					.then(user => cLog.logr(interuser, str, tr, user))
				interaction.reply({
					content: `Message Contains Explicit Content`,
					ephemeral: true
				});
				return;
			} else {
				client.users.fetch(sEndUser.toString(), false)
					.then(function (user) { user.send(`Message from anonymous user: ${str}`); return user })
					.then(user => cLog.logr(interuser, str, tr, user))
				interaction.reply({
					content: `Dm Sent`,
					ephemeral: true
				});
			}
			cLog.loga(interuser, 'rdm')
		}
		else if (commandName == 'session') {
			interaction.reply(`Session start = **${startTime}**\nSession UUID: **${sessionUUID}**`)
			cLog.loga(interuser, `session`)
		}
		else if (commandName == 'randomfact') {
			const random = cuf.arrayRNG(facts.length)
			const fact = facts[random].fact
			const factID = facts[random].id
			await interaction.reply(
				`${interuser.username}'s random fun fact: **${fact}**`
			)
			await interaction.followUp(`*fact id: **${factID}***`)
			cLog.loga(interuser, 'randomfact')
		}
		else if (commandName == 'feedback') {
			interaction.reply(`<@${interuser.id}> Yow can submit feed back at https://forms.gle/9hMETLrL6ihvc5xv8`)
			cLog.loga(interuser, 'feedback')
		}
		// else if (commandName == 'uptime') {
		// 	function getElapsedTime() {
		// 		const currentTime = null;
		// 		const stime = {
		// 			days : (fStartTime - (fStartTime % (24*60*60*1000))) / (24*60*60*1000),
		// 			hours : ((fStartTime - (fStartTime % (60*60*1000))) / (60*60*1000)) % 24,
		// 			minutes : ((fStartTime - (fStartTime % (60*1000))) / (60*1000)) % (24*60),
		// 			seconds : ((fStartTime - (fStartTime % 1000)) / 1000) % (24*60*60)
		// 		}
		// 		const elapedStr = ``
		// 		const str = `Bot Uptime Details:
		// 		Start Time: **${startTime}**
		// 		Current Time: **${cuf.getTime()}**
		// 		Elasped Time: **${elapedStr}**`
		// 		return str;
		// 	}
		// 	interaction.reply({
		// 		content: getElapsedTime(),
		// 		ephemeral: true
		// 	})
		// 	cLog.loga(interuser, 'uptime')
		// }
		else if (commandName == 'restart') {
			if (interuser.id === userid[0]) {
				await interaction.reply({ content: 'Restarting...', ephemeral: true })
				cLog.loga(interuser, 'restart')
				process.exit()
			}
			else {
				deny(interuser, 'restart')
			}
		}
		else if (commandName === 'warn') {
			const pc = permCheck()
			if (pc === false) { deny(interuser, 'warn'); }
			else {
				let ptag;
				if (interaction.options.getBoolean("public") == true) { ptag = false } else { ptag = true }
				const warnArray = require('./data/warns.json')
				if (interaction.options.getSubcommand() === 'show') {
					const fArray = { dataFound: [] }
					warnArray.warns.forEach(
						(data) => {
							if (data.userid === interaction.options.getUser("user").id) {
								fArray.dataFound[fArray.dataFound.length] = data
								const modTag = client.users.cache.get(data.modid)
								const time = new Date(data.datestamp);
								fArray.dataFound[fArray.dataFound.length - 1].modTag = modTag.tag;
								fArray.dataFound[fArray.dataFound.length - 1].formatedDate = time
									.toLocaleString('en-US', { timeZone: 'EST' });
							}
						}
					)
					const embed = new MessageEmbed()
						.setTitle("Modlogs")
						.setDescription(`Modlogs for ${interaction.options.getUser("user").tag}`)
					fArray.dataFound.forEach((data, index) => {
						embed
							.addField(
								`Modlog #${index + 1}`,
								`Moderator: ${data.modTag}\nReason: ${data.reason}\nDate: ${data.formatedDate}\nWarn ID: ${data.warnid}`,
								false
							)
					})
					await interaction.reply({ embeds: [embed], ephemeral: ptag })
				} else if (interaction.options.getSubcommand() === "add") {
					warnArray.warns[warnArray.warns.length] = {
						userid: interaction.options.getUser("user").id,
						modid: interuser.id,
						reason: interaction.options.getString("reason"),
						datestamp: Date.now(),
						warnid: fUUID.v4()
					}
					fs.writeFile(
						'./data/warns.json',
						JSON.stringify(warnArray),
						function () { }
					)
					await interaction.reply(
						{
							content: `added warning to ${interaction.options.getUser("user").tag}`,
							ephemeral: ptag
						}
					)
				} else if (interaction.options.getSubcommand() === "del") {
					warnArray.warns.forEach(
						(data, index) => {
							if (data.warnid === interaction.options.getString("id")) {
								warnArray.warns.splice(index, 1)
							}
						}
					)
					fs.writeFile(
						'./data/warns.json',
						JSON.stringify(warnArray),
						function () { }
					)
					await interaction.reply({ content: "Deleted", ephemeral: ptag })
				} else if (interaction.options.getSubcommand() === "clear") {
					warnArray.warns.forEach(
						(data, index) => {
							if (data.userid === interaction.options.getUser("user").id) {
								warnArray.warns.splice(index, 1)
							}
						}
					)
					fs.writeFile(
						'./data/warns.json',
						JSON.stringify(warnArray),
						function () { }
					)
					await interaction.reply({ content: "Cleared", ephemaral: ptag })
				} else {

				}
				cLog.loga(interuser, 'warn')
			}
		} else if (commandName == "modnotes") {
			const pc = permCheck()
			if (pc === false) { deny(interuser, 'modnotes'); }
			else {
				let ptag;
				if (interaction.options.getBoolean("public") == true) { ptag = false } else { ptag = true }
				const notesArray = require('./data/modnotes.json')
				if (interaction.options.getSubcommand() === 'show') {
					/**
					 * JSON scema:
					 * {
					 *	"moderatorid": {User.id},
					 *	"userid": {User.id},
					 *	"note": {String},
					 *	"datestamp": {Date.now()}
					 * }
					 */
					const fArray = { dataFound: [] }
					notesArray.notes.forEach(
						(data) => {
							if (data.userid === interaction.options.getUser("user").id) {
								fArray.dataFound[fArray.dataFound.length] = data
								const modTag = client.users.cache.get(data.moderatorid)
								const time = new Date(data.datestamp);
								fArray.dataFound[fArray.dataFound.length - 1].modTag = modTag.tag;
								fArray.dataFound[fArray.dataFound.length - 1].formatedDate = time
									.toLocaleString('en-US', { timeZone: 'EST' });
							}
						}
					)
					const embed = new MessageEmbed()
						.setTitle("Modnotes")
						.setDescription(`Modnotes for ${interaction.options.getUser("user").tag}`)
					fArray.dataFound.forEach((data, index) => {
						embed
							.addField(
								`Modnote #${index + 1}`,
								`Moderator: ${data.modTag}\nNote: ${data.note}\nDate: ${data.formatedDate}\nModnote ID: ${data.modnoteid}`,
								false
							)
					})
					await interaction.reply({ embeds: [embed], ephemeral: ptag })
				}
				// add modnote
				else if (interaction.options.getSubcommand() === 'add') {
					notesArray.notes[notesArray.notes.length] = {
						moderatorid: interuser.id,
						userid: interaction.options.getUser("user").id,
						note: interaction.options.getString("note"),
						datestamp: Date.now()
					}
					fs.writeFile(
						'./data/modnotes.json',
						JSON.stringify(notesArray),
						function () { }
					)
					await interaction.reply(
						{
							content: `Added modnote to ${interaction.options.getUser("user").tag}`,
							ephemeral: ptag
						}
					)
				}
				else if (interaction.options.getSubcommand() === 'del') {
					notesArray.notes.forEach(
						(data, index) => {
							if (data.userid === interaction.options.getUser("user").id && data.moderatorid === interaction.user.id) {
								notesArray.notes.splice(index, 1)
							}
						}
					)
					fs.writeFile(
						'./data/modnotes.json',
						JSON.stringify(notesArray),
						function () { }
					)
					await interaction.reply({ content: "Deleted", ephemeral: ptag })
				}
				cLog.loga(interuser, 'modnotes')
			}
		} else if (commandName == "ban") {
			const pc = permCheck()
			if (pc === false) { deny(interuser, 'ban'); }
			else {
				let ptag;
				if (interaction.options.getBoolean("public") == true) { ptag = false } else { ptag = true }
				// ban user
				const user = interaction.options.getUser("user")
				await interaction.guild.members.ban(user, { reason: interaction.options.getString("reason") })
				await interaction.reply(
					{
						content: `Banned ${user.tag} for ${interaction.options.getString("reason")}`,
						ephemeral: ptag
					}
				)
				cLog.loga(interuser, 'ban')
			}
		} else if (commandName == "unban") {
			const pc = permCheck()
			if (pc === false) { deny(interuser, 'unban'); }
			else {
				let ptag;
				if (interaction.options.getBoolean("public") == true) { ptag = false } else { ptag = true }
				const userid = interaction.options.getString("userid")
				await interaction.guild.members.unban(userid);
				const user = client.users.cache.get(userid);
				interaction.reply({ content: `Unbanned ${user.tag}`, ephemeral: ptag })
				cLog.loga(interuser, 'unban')
			}
		} else if (commandName == "timeout") {
			const pc = permCheck()
			if (pc === false) { deny(interuser, 'timeout'); }
			else {
				let ptag;
				if (interaction.options.getBoolean("public") == true) { ptag = false } else { ptag = true }
				const utm = interaction.guild.members.cache.get(interaction.options.getUser("user").id)
				await utm.timeout(interaction.options.getInteger("minutes") * 60 * 1000)
				await interaction.reply(
					{
						content: `Timed out ${interaction.options.getUser("user").tag} for ${interaction.options.getInteger("minutes")} minutes`,
						ephemeral: ptag
					}
				)
				cLog.loga(interuser, 'timeout')
			}
		} else if (commandName == "kick") {
			const pc = permCheck()
			if (pc === false) { deny(interuser, 'warn'); }
			else {
				let ptag;
				if (interaction.options.getBoolean("public") == true) { ptag = false } else { ptag = true }
				const utm = interaction.guild.members.cache.get(interaction.options.getUser("user").id)
				await utm.kick(interaction.options.getString("reason"))
				await interaction.reply(
					{
						content: `Kicked ${interaction.options.getUser("user").tag} for ${interaction.options.getString("reason")}`,
						ephemeral: ptag
					}
				)
				cLog.loga(interuser, 'kick')
			}
		} else if (commandName == "qrule") {
			// Switch reply based on what choice a user made
			switch (interaction.options.getString("rule")) {
				case "r1":
					await interaction.reply("♥︎ no racism, homophobia, or any form of discrimination, WHATSOEVER. **FAILURE TO ABIDE BY THIS RULE WILL RESULT IN A BAN**")
					break;
				case "r2":
					await interaction.reply("♥︎ use the right channels. (eg general talk in <#852259627332927490>)")
					break;
				case "r3":
					await interaction.reply("♥︎ don't mass ping roles")
					break;
				case "r4":
					await interaction.reply("♥︎ keep the convos clean. No porn/nsfw please. Talking about it is fine, just no content that may contain graphic content.")
					break;
				case "r5":
					await interaction.reply("♥︎ don't spam")
					break;
				case "r6":
					await interaction.reply("♥ no offensive nicknames or profile pics. eg; ||Hitler||")
					break;
				case "r7":
					await interaction.reply("♥ don’t ask for staff roles. We have enough of them already")
					break;
				case "r8":
					await interaction.reply("♥ mark triggering topics with trigger warnings, and cover the words with two “|” on each side. like so (eg. \|\|text\|\| turns into ||text||)")
					break;
				case "r9":
					await interaction.reply("♥ don’t find gaps in the rules! staff members can strike you for anything they find doesn’t fit in our server.")
					break;
			}
			cLog.loga(interuser,'qrule')
		} else {
			console.error("A user has triggered this to run, but a valid command option wasn't found")
			throw new Error("A user has triggered this to run, but a valid command option wasn't found")
		}
	} catch (err) {
		cLog.logerr(err)
	}
});

//? Login to Discord with your client`s token
client.login(token);
Updater.start(1000 * seconds)