const request = require('supertest')
const { createServer } = require('http')
const app = require('../src/api')
const petsDb = require('../src/database/pets.db')
let info = require('../swagger/pets').saveOrUpdate
let { example } = require('../swagger/models').Pet


describe(info.operationId, () => {

    let server
    beforeAll((done) => { server = createServer(app)
      server.listen(done) })
    afterAll((done) => { server.close(() => {
        done() })
    })

    test(info.description, async () => {

      petsDb.saveOrUpdate = jest.fn().mockResolvedValue({"update":'ok'})

      const response = await request(app).post('/pets').send(example)

      expect(response.status).toBe(200)
      expect(response.body).toEqual({"update":'ok'})
    })

    test(info.description, async () => {

      petsDb.saveOrUpdate = jest.fn().mockResolvedValue({"insert":'ok'})

      delete example.id
      const response = await request(app).post('/pets').send(example)

      expect(response.status).toBe(200)
      expect(response.body).toEqual({"insert":'ok'})
    })
})