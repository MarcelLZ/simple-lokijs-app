import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import api from './api'

const PORT = process.env.PORT || 9000

express()
  .use('*', cors({ origin: '*' }))
  .use(bodyParser.json())
  .use('/', api)
  .get('/health-check', (req, res) => res.json({ healthCheck: true }))
  .listen(PORT, () => console.log(`Running! Access http://localhost:${PORT}`))
