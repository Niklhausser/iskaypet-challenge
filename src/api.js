const express = require('express')
const app = express()
const logger = require('../utils/logger')

const swaggerUi = require('swagger-ui-express')
const {swaggerDocument, customCss} = require('../swagger/main')
app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocument,{ customCss: customCss }))

app.use(express.json())

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers , Access-Control-Allow-Methods , X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept')
    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE')
    next();
  });

app.get('/', (req, res) => res.send(JSON.stringify({"msg": 'Server is up & running!!... Im Aliveeee' })))

const handle = fn => async (req, res) => {
    try { 
        res.status(200).json(await fn(req, res))
    } 
    catch (error) {
        const json = Object.assign({message: error.message, stack: error.stack},error)
        logger.error(JSON.stringify(json))
        res.status(error.status || 400).json(json)
    }
}

let petsRouter = express.Router()
let petsServices= require('./services/pets.services')
let petsDb= require('./database/pets.db')

petsRouter.post('/', handle(async (req, res)=> await petsDb.saveOrUpdate(req.body)))
petsRouter.get('/', handle(async (req, res)=> await petsDb.getAll(req.query)))
petsRouter.get('/most_numerous_species', handle(async (req, res)=> await petsDb.getMostNumerousSpecies()))
petsRouter.get('/:id', handle(async (req, res)=> await petsDb.getById(req.params.id)))
petsRouter.delete('/:id', handle(async (req, res)=> await petsDb.deleteById(req.params.id)))
petsRouter.get('/species/average_age', handle(async (req, res)=> await petsServices.getSpeciesAverageAge(req.query.species_name)))
app.use('/pets', petsRouter)

module.exports = app