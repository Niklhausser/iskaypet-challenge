const request = require('supertest')
const { createServer } = require('http')
const app = require('../src/api')
const petsDb = require('../src/database/pets.db')
let info = require('../swagger/pets').getById

describe(info.operationId, () => {

  let server
  beforeAll((done) => { server = createServer(app)
    server.listen(done) })
  afterAll((done) => { server.close(() => {
      done() })
  })

  test(info.description, async () => {

    petsDb.getById = jest.fn().mockResolvedValue([{"id":2,"name":"Cala","species":"Pastora","gender":"Female","birthDate":"2017-05-24"}])

    const response = await request(app).get('/pets/2')

    expect(response.status).toBe(200)
    expect(response.body).toEqual([{"id":2,"name":"Cala","species":"Pastora","gender":"Female","birthDate":"2017-05-24"}])
  })
})
