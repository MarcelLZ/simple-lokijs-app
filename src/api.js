import { Router } from 'express'
import Loki from 'lokijs'

const router = new Router()
const db = new Loki('../lokidb.json')
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
