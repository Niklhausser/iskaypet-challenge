const {logLevel} = require('../enviroment').enviroment
const logLevels = ['debug','info', 'warn', 'error']
const log = (message, level) => {
    if(logLevels.indexOf(level) >= logLevels.indexOf(logLevel.toLowerCase())) console[level](`[${level.toUpperCase()}] ${message}`)
}

exports.debug = msg => log(msg, 'debug')
exports.info = msg => log(msg, 'info')
exports.warn = msg => log(msg, 'warn')
exports.error = msg => log(msg, 'error')