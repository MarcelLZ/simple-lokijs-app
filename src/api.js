import { Router } from 'express'
import { save, getAll } from './model'

const router = new Router()

router.post('/', (request, response) => {
  let { description } = request.body
  save({ description })

  response.json(description)
})

router.get('/', (request, response) => response.json(getAll()))

export default router
