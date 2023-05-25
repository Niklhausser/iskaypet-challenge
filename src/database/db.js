const sqlite3 = require('sqlite3').verbose()
const dbConn = require('../../enviroment').enviroment.dbConn
const logger = require('../../utils/logger')

const db = new sqlite3.Database(dbConn, sqlite3.OPEN_READWRITE, (e) => {if(e) logger.error('db con: '+e.message)})

exports.getDb = () => db

//create table
//db.run('CREATE TABLE pets(id INTEGER PRIMARY KEY, name TEXT, species TEXT, gender TEXT, birthDate DATE);')