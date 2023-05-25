const response500 = {  description: "Internal server error" }
const response404 = { description: 'Resource not found'}


exports.getAll = {
    tags:['pets'],
    description: "Returns list of pets",
    operationId: 'getPets',
    responses:{
        "200": {
            description: "Pets list", content: {
                "application/json": { schema: { type: 'array', items: {'$ref': '#/components/schemas/Pet'}}}
            }
        },
        "500": response500
    }
}

exports.getById = {
    tags:['pets'],
    description: "Returns a Pet by id",
    operationId: 'getById',
    parameters: [{ name: "id", in: "path", type: "string", required: true }],
    responses:{
        "200": {
            description: "Pet found", content: {
                "application/json": { schema: {'$ref': '#/components/schemas/Pet'}}
            }
        },
        "404": response404,
        "500": response500
    }
}

exports.saveOrUpdate = {
    tags:['pets'],
    description: "Save or update a pet",
    operationId: 'saveOrUpdate',
    requestBody:{
        content: { 'application/json': { schema: { '$ref': '#/components/schemas/Pet'}}}
    },
    responses:{
        "200": {
            description: "Pet saved", content: {
                "application/json": { schema: {'$ref': '#/components/schemas/Pet'}}
            }
        },
        "500": response500
    }
}

exports.deleteById = {
    tags:['pets'],
    description: "Delete pet",
    operationId: 'deleteById',
    parameters: [{ name: "id", in: "path", type: "string", required: true }],
    responses:{
        "200": { description: "Pet deleted"},
        "500": response500
    }
}

exports.getMostNumerousSpecies = {
    tags:['pets'],
    description: "Returns the species name and the number of pets belonging to that species.",
    operationId: 'getMostNumerousSpecies',
    responses:{
        "200": { description: "Most numerous species"},
        "500": response500
    }
}

exports.getSpeciesAverageAge = {
    tags:['pets'],
    description: "Calculates the average age and standard deviation of pets for a specific species based on their birth dates. It takes the species_name .",
    operationId: 'getSpeciesAverageAge',
    parameters: [{ name: "species_name", in: "query", type: "string", required: true }],
    responses:{
        "200": { description: "Most numerous species"},
        "500": response500
    }
}