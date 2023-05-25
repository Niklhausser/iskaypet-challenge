const api = require('./api.js')
const { port } = require('../enviroment').enviroment
const logger = require('../utils/logger')
api.listen(port ?? 3000, ()=> logger.info('Server listening on port '+port))
module.exports = api