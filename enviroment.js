const path = require('path')

module.exports.enviroment = {
    PORT: process.env.PORT || 8080,
    pageSize: process.env.PAGE_SIZE || 10,
    logLevel:  process.env.LOG_LEVEL || 'debug',
    dbConn: process.env.DBCONN || path.resolve(__dirname, './test.db')
}
