function rng1(min,max) {
	if (max <= min) throw new Error("Please Fix MIN-MAX ratio");
	return Math.floor(Math.random()*(max - min)) + min
}

const rng2 = (max) => Math.round(Math.random() * max)

function arrayRNG(length) {
	if (length <= 0) return "length must be greater than one";
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

function isDST(d) {
	const jan = new Date(d.getFullYear(),0,1).getTimezoneOffset()
	const jul = new Date(d.getFullYear(),6,1).getTimezoneOffset()
	return Math.max(jan,jul) !== d.getTimezoneOffset()
}

function getTime() {
	let datemod = new Date()
	const cdate = Date.now()
	let dst = isDST(datemod)
	if (dst === true) {
		datemod = new Date(cdate + (3600*1000))
		const time = datemod.toLocaleTimeString('en-US', { timeZone: 'EST', hour: '2-digit', minute: '2-digit', second: '2-digit' })
		return time
	} else {
		const time = datemod.toLocaleTimeString('en-US', { timeZone: 'EST', hour: '2-digit', minute: '2-digit', second: '2-digit' })
		return time
	}
}
function getDate() {
	let datemod = new Date();
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
function rtbSpect() {
	return "" + colorp.colorpc[arrayRNG(colorp.colorpc.length)]
}

//? Exports
module.exports = { rng1, rng2, arrayRNG, colorp, isDST, getTime, getDate, getFullDate, randHex, rtgSpect}