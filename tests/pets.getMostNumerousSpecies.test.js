const request = require('supertest')
const { createServer } = require('http')
const app = require('../src/api')
const petsDb = require('../src/database/pets.db')
let info = require('../swagger/pets').getMostNumerousSpecies

describe(info.operationId, () => {

  let server
  beforeAll((done) => { server = createServer(app)
    server.listen(done) })
  afterAll((done) => { server.close(() => {
      done() })
  })

  test(info.description, async () => {

    petsDb.getMostNumerousSpecies = jest.fn().mockResolvedValue({"species":"Pastora","number":3})

    const response = await request(app).get('/pets/most_numerous_species')

    expect(response.status).toBe(200)
    expect(response.body).toEqual({"species":"Pastora","number":3})
  })
})
