import { Router } from 'express'
import Loki from 'lokijs'

const router = new Router()

// This is the lokijs - An in-memory db
// Here, I set a autosave flag to persist the data
const dataBase = new Loki('./db.json', { autosave: true, autosaveInterval: 1000 })
const things = dataBase.addCollection('things')

router.post('/', (request, response) => {
  let { description } = request.body
  things.insert({ description })
  dataBase.saveDatabase()

  response.json(description)
})

router.get('/', (request, response) => {
  let allData = things.chain().data()
  response.json(allData)
})

export default router
