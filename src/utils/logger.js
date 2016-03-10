//log: os.hostname(),time,pid
var moment = require("moment")
var _ = require('lodash')
var hostname = require('os').hostname,
    pid = process.pid
function Logger() {

}

var proto = Logger.prototype
proto.info = function (msg, opt) {
    console.log(generateLogJson(msg, opt))
}

proto.warn = function (msg, opt) {
    console.warn(generateLogJson(msg, opt))
}

proto.error = function (msg, opt) {
    console.error(generateLogJson(msg, opt))
}

module.exports = Logger

function generateLogJson(msg, option) {
    var json = {
        t: moment().format('YYYYY-MM-DD hh:mm:ss'),
        m: msg,
        pid: pid,
        hn: hostname
    }
    _.extend(json, option)

    return JSON.stringify(json)
}

