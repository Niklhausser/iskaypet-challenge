const path = require('path')

module.exports.enviroment = {
    PORT: 8080,
    pageSize: 10,
    logLevel:  'debug',
    dbConn: path.resolve(__dirname, './test.db')
}
