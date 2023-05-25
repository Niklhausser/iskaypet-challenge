const localEnv = !process.env.PORT? require('./env.local').enviroment : null

module.exports.enviroment = {
    port: 3000,
    pageSize: 10,
    logLevel:  'debug',
    dbConn: path.resolve(__dirname, './test.db')
}
