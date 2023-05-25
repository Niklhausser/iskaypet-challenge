const logger = require('../../utils/logger')
let db = require('./db').getDb()
const pageSize = Number(require('../../enviroment').enviroment.pageSize)


exports.saveOrUpdate = async pet => {
    if(pet.id){
        return new Promise((resolve, reject) => { db.run('UPDATE pets SET name = ?, species = ?, gender = ?, birthDate = ? WHERE id = ?',
                    [pet.name, pet.species, pet.gender, pet.birthDate, pet.id],
                    (e) => {e? reject({update:'ko', message: e.message}):resolve({update:'ok'})})})
    }
    return new Promise((resolve, reject) => { db.run('INSERT INTO pets (name, species, gender, birthDate) VALUES (?, ?, ?, ?)',
                    [pet.name, pet.species, pet.gender, pet.birthDate],
                    (e) => {e? reject({insert:'ko', message: e.message}):resolve({insert:'ok'})})})
}

exports.getAll = async queryParams => {

    let page = queryParams.page? Number(queryParams.page) : null

    let query = `SELECT * FROM pets ${page? ' LIMIT '+pageSize+' OFFSET '+ (page - 1) * pageSize : ''}`

    return new Promise((resolve, reject) => { db.all(query, [], (e, r) => {return e? reject(e) : resolve(r)})})

}

exports.getById = async id => {
    return new Promise((resolve, reject) => { db.all(`SELECT * FROM pets WHERE id=${id}`, [], (e, r) => {return e? reject(e) : resolve(r)})})
}

exports.deleteById = async id => {
    return new Promise((resolve, reject) => { db.all(`DELETE FROM pets WHERE id=${id}`, [], (e) => {e? reject({delete:'ko', message: e.message}):resolve({delete:'ok'})})})
}

exports.getMostNumerousSpecies = async () => {
    return new Promise((resolve, reject) => { db.all(`SELECT species, COUNT(*) AS num FROM pets GROUP BY species ORDER BY num DESC LIMIT 1`, [],
    (e, r) => {e? reject({message: e.message}):resolve({species:r[0].species, number:r[0].num})})})
}

exports.getbirthDatesBySpecies = async species_name => {
    return new Promise((resolve, reject) => { db.all(`SELECT birthDate FROM pets WHERE species = ?`, [species_name],
    (e, r) => {e? reject({message: e.message}) : resolve(r)})})
}