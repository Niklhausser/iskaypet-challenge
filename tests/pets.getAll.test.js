const request = require('supertest')
const { createServer } = require('http')
const app = require('../src/api')
const petsDb = require('../src/database/pets.db')
let info = require('../swagger/pets').getAll

describe(info.operationId, () => {

  let server
  beforeAll((done) => { server = createServer(app)
    server.listen(done) })
  afterAll((done) => { server.close(() => {
      done() })
  })

  test(info.description, async () => {

    petsDb.getAll = jest.fn().mockResolvedValue([
      {"id":1,"name":"Max","species":"Policia","gender":"Male","birthDate":"2023-05-24"},
      {"id":2,"name":"Cala","species":"Pastora","gender":"Female","birthDate":"2017-05-24"},
      {"id":3,"name":"Chola","species":"Pastora","gender":"Female","birthDate":"2015-05-24"}])

    const response = await request(app).get('/pets')

    expect(response.status).toBe(200)
    expect(response.body).toEqual([
      {"id":1,"name":"Max","species":"Policia","gender":"Male","birthDate":"2023-05-24"},
      {"id":2,"name":"Cala","species":"Pastora","gender":"Female","birthDate":"2017-05-24"},
      {"id":3,"name":"Chola","species":"Pastora","gender":"Female","birthDate":"2015-05-24"}])
  })
})
