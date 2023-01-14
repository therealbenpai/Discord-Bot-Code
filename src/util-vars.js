const util = require('./util-func')
const uuid = require('uuid')

const startTime = util.getTime()
const startDate = util.getDate()
const sessionUUID = uuid.v4()

module.exports = {startTime, startDate, sessionUUID}