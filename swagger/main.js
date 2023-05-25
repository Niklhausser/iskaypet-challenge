const pkg = require('../package.json')
const fs = require('fs')
const pets = require('./pets')

module.exports.swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: `v${pkg.version}`,
        title: pkg.name,
        description: pkg.description,
        termsOfService: '',
        contact: { name: 'Nicolas Haussaire', email: 'jnhaussaire@hotmail.com' }   },
    servers: [{  url: 'http://localhost:8080', description: 'Local server' },
                {  url: 'http://iskaypet-niko-api.eu-west-3.elasticbeanstalk.com/', description: 'ASW cloud test server' }],
    
    paths: {
        '/pets':{get: pets.getAll, post: pets.saveOrUpdate},
        '/pets/most_numerous_species': { get: pets.getMostNumerousSpecies },
        '/pets/{id}': {
            get: pets.getById,
            delete: pets.deleteById
        },
        '/pets/species/average_age': {
            get: pets.getSpeciesAverageAge
        }
        
        
        
    },
    components: { schemas: require('./models') }
}

const logo = fs.readFileSync(`${__dirname}/iskaipet-logo.png`,'base64')
const bigi = fs.readFileSync(`${__dirname}/gatito.jpg`,'base64')

module.exports.customCss = `
.swagger-ui .topbar { background-color: #888 }
.swagger-ui .topbar .topbar-wrapper { 
    background-image: url('data:image/png;base64,${logo}');
    background-size: 100px;
    background-repeat: no-repeat;
    padding-left: 200px;
}
.info{
    background-image: url('data:image/png;base64,${bigi}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position:right;
    padding: 4px;
}
.swagger-ui .info .title,.swagger-ui .info li, .swagger-ui .info p, .swagger-ui .info table{ color:white }
`