import { Router } from 'express'
import Loki from 'lokijs'

const router = new Router()

// This is the lokijs - An in-memory db
// Here, I set a autosave flag to persist the data
const db = new Loki('../lokidb.db', { autosave: true, autosaveInterval: 4000 })
const things = db.addCollection('things')

router.post('/', (req, res) => {
  let { description } = req.body
  things.insert({ description })
  res.json(description)
})

router.get('/', (req, res) => {
  let allData = things.chain().data()
  res.json(allData)
})

export default router
