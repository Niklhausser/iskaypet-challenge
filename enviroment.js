const path = require('path')

module.exports.enviroment = {
    PORT: 3000,
    pageSize: 10,
    logLevel:  'debug',
    dbConn: path.resolve(__dirname, './test.db')
}
