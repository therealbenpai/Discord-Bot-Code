const {User} = require('discord.js')
const fs = require('fs')
const {startDate, startTime, sessionUUID} = require('./util-vars')
const cuf = require('./util-func')

/**
 * @copyright GNU (v3)
 * @author sparty18202
 * @param {User} user The user that used the command
 * @param {String} cmdname Command Used
 */
function loga(user, cmdname) {
    fs.appendFile(
        './logs/allowcmd.log',
        `${cuf.getFullDate()} :
        - UserID: ${user.id}
        - User: ${user.tag}
        - Command: ${cmdname}
        - Session UUID: ${sessionUUID}\n`,
        function () { }
    )
}

/**
 * @copyright GNU (v3)
 * @author sparty18202
 * @param {User} user The user that used the command
 * @param {String} cmdname Command Used
 */
function logd(user, cmdname) {
    fs.appendFile(
        './logs/denycmd.log',
        `${cuf.getFullDate()} :
        - UserID: ${user.id}
        - User: ${user.tag}
        - Command: ${cmdname}
        - Session UUID: ${sessionUUID}\n`,
        function () { }
    )
}

/**
 * @copyright GNU (v3)
 * @author sparty18202
 * @param {User} user The user that used the command
 * @param {String} message Message Sent
 * @param {Boolean} exp Explicit Message Boolean
 */
function loge(user, message, exp) {
    fs.appendFile(
        './logs/echo.log',
        `${cuf.getFullDate()} :
        - UserID: ${user.id}
        - User: ${user.tag}
        - Message: "${message.toString()}"
        - Exp: ${exp.toString()}
        - Session UUID: ${sessionUUID}\n`,
        function () { }
    )
}

/**
 * @copyright GNU (v3)
 * @author sparty18202
 */
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

/**
 * @copyright GNU (v3)
 * @author sparty18202
 * @param {User} user The user that used the command
 * @param {String} msg Message Sent
 * @param {Boolean} exp Explicit Message Boolean
 * @param {User} enduser The receiving user
 */
function logr(user, message, exp, enduser) {
    fs.appendFile(
        './logs/rdm.log',
        `${cuf.getFullDate()} :
        - UserID: ${user.id}
        - User: ${user.tag}
        - EndUserID: ${enduser.id}
        - EndUser: ${enduser.tag}
        - Message: "${message.toString()}"
        - Exp: ${exp.toString()}
        - Session UUID: ${sessionUUID}\n`,
        function () { }
    )
}
/**
 * @copyright GNU (v3)
 * @author sparty18202
 * @param {Error} error Error Message
 */
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