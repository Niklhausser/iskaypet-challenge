const request = require('supertest')
const { createServer } = require('http')
const app = require('../src/api')
const petsDb = require('../src/database/pets.db')
let info = require('../swagger/pets').deleteById

describe(info.operationId, () => {

  let server
  beforeAll((done) => { server = createServer(app)
    server.listen(done) })
  afterAll((done) => { server.close(() => {
      done() })
  })

  test(info.description, async () => {

    petsDb.deleteById = jest.fn().mockResolvedValue({"delete":'ok'})

    const response = await request(app).delete('/pets/15')

    expect(response.status).toBe(200)
    expect(response.body).toEqual({"delete":'ok'})
  })
})
