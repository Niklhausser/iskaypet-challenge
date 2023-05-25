const localEnv = !process.env.PORT? require('./env.local').enviroment : null

module.exports.enviroment = {
    port: process.env.PORT || localEnv.port,
    pageSize: process.env.PAGE_SIZE || localEnv.pageSize,
    logLevel: process.env.LOG_LEVEL || localEnv.logLevel,
    dbConn: process.env.DBCONN || localEnv.dbConn
}
