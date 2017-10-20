import { Router } from 'express'
import { save, getAll, clearDb } from './model'

const router = new Router()

router.post('/', (request, response) => {
  let { description } = request.body;
  save({ description })

  response.json(description)
})

router.get('/clear-db',(request,response) =>{
   clearDb()
  response.sendStatus(204);
});


router.get('/', (request, response) => response.json(getAll()))

export default router
