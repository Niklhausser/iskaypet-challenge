const request = require('supertest')
const { createServer } = require('http')
const app = require('../src/api')
const petsDb = require('../src/database/pets.db')
let info = require('../swagger/pets').getSpeciesAverageAge

describe(info.operationId, () => {

  let server
  beforeAll((done) => { server = createServer(app)
    server.listen(done) })
  afterAll((done) => { server.close(() => {
      done() })
  })

  test(info.description, async () => {

    petsDb.getbirthDatesBySpecies = jest.fn().mockResolvedValue([{birthDate: "2017-05-24"},{birthDate: "2015-05-24"},{birthDate: "2007-02-05"}])

    const response = await request(app).get('/pets/species/average_age?species_name=Pastora')

    expect(response.status).toBe(200)
    expect(response.body).toEqual({"averageAge":"10.00","standardDeviation":"4.32"})
  })
})
