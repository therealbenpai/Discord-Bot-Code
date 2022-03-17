function rng1(min,max) {
	if (max < min || max == min) {return "Please Fix MIN-MAX ratio"}
	const tRange = max - min
	const random = Math.floor(Math.random()*tRange) + min
	return random

}
function rng2(max) {
	const random = Math.round(Math.random() * max)
	return random
}
function arrayRNG(length) {
	if (length <= 0) {return "length must be greater than one"}
	const tRange = length - 1
	const random = Math.floor(Math.random()*tRange)
	return random
}

const colorp = {
	colorpc: [
		`#ff0000`,
		`#e3001c`,
		`#c60039`,
		`#aa0055`,
		`#8e0071`,
		`#71008e`,
		`#5500aa`,
		`#3900c6`,
		`#1c00e3`,
		`#0000ff`
	]
}

function getTime() {
	const datemod = new Date()
	const time = datemod.toLocaleTimeString('en-US', { timeZone: 'EST', hour: '2-digit', minute: '2-digit', second: '2-digit' })
	return time
}
function getDate() {
	const datemod = new Date();
	const date = datemod.toLocaleDateString('en-US', { timeZone: 'EST', year: "2-digit", month: "2-digit", day: "2-digit" })
	return date;
}
function getFullDate() {
	const date = getDate()
	const time = getTime()
	return `${date} ${time}`
}
function randHex(prefix) {
	const hex = Math.floor(Math.random() * Math.pow(16, 6)).toString(16)
	return `${prefix}${hex}`
}
function endclient(user) {
	client.user.setStatus(`invisible`);
	console.error(`Bot Ended. Reason: Native Command Quit by: ` + user);
	process.exit();
}
function rtbSpect() {
	const spot = arrayRNG(colorp.colorpc.length)
	return String(colorp.colorpc[spot])
}

//? Exports
exports.getTime = getTime
exports.getDate = getDate
exports.getFullDate = getFullDate
exports.randHex = randHex
exports.arrayRNG = arrayRNG
exports.rtbSpect = rtbSpect
exports.endclient = endclient
exports.rng1 = rng1
exports.rng2 = rng2