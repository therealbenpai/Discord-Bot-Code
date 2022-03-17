const util = require('./util-func')
const uuid = require('uuid')

const startTime = util.getTime()
const startDate = util.getDate()
const sessionUUID = uuid.v4()

exports.startTime = startTime
exports.startDate = startDate
exports.sessionUUID = sessionUUID