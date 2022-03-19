const fs = require('fs')
const {startDate, startTime, sessionUUID} = require('./util-vars')
const cuf = require('./util-func')

function loga(user, cmdname) {
    fs.appendFile(
        './logs/allowcmd.log',
        `${cuf.getFullDate()} :
        - UserID: ${user.id}
        - Command: ${cmdname}
        - Session UUID: ${sessionUUID}\n`,
        function () { }
    )
}

function logd(user, cmdname) {
    fs.appendFile(
        './logs/denycmd.log',
        `${cuf.getFullDate()} :
        - UserID: ${user.id}
        - Command: ${cmdname}
        - Session UUID: ${sessionUUID}\n`,
        function () { }
    )
}

function loge(user, message, exp) {
    fs.appendFile(
        './logs/echo.log',
        `${cuf.getFullDate()} :
        - UserID: ${user.id}
        - Message: "${message.toString()}"
        - Exp: ${exp.toString()}
        - Session UUID: ${sessionUUID}\n`,
        function () { }
    )
}

function logs() {
    fs.appendFile(
        './logs/session.log',
        `Session Info :
        - Session Date ${startDate}
        - Session Start Time: ${startTime}
        - Session UUID: ${sessionUUID}\n`,
        function () { }
    )
}

function logr(user, message, exp, enduser) {
    fs.appendFile(
        './logs/rdm.log',
        `${cuf.getFullDate()} :
        - UserID: ${user}
        - EndUserID: ${enduser.toString()}
        - Message: "${message.toString()}"
        - Exp: ${exp.toString()}
        - Session UUID: ${sessionUUID}\n`,
        function () { }
    )
}

function logerr(error) {
    fs.appendFile(
        './logs/errorlog.log',
        `${cuf.getFullDate()} :
        - Error: ${error}\n`,
        function() { }
    )
}

exports.loga = loga
exports.logd = logd
exports.loge = loge
exports.logs = logs
exports.logr = logr
exports.logerr = logerr