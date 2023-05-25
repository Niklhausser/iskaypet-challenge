const Pet = {
    type: 'object',
    properties: {
        "id" : {type:'integer'},
        "name" : {type:'string', required: true},
        "species" : {type:'string'},
        "gender" : {type:'string'},
        "birthDate" : { type: 'string', format:'date'}
    },
    example:{
        "id" : 5,
        "name" : "Cala",
        "species" : null,
        "gender" : "female",
        "birthDate" : "12-07-2014"
    }
}

module.exports = {
    'Pet': Pet
}