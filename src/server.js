const api = require('./api.js')
const { PORT } = require('../enviroment').enviroment
const logger = require('../utils/logger')
api.listen(PORT ?? 8080, ()=> logger.info('Server listening on port '+PORT))
module.exports = api