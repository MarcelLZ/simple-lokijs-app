import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

const PORT = 9000

express()
  .use('*', cors({ origin: '*' }))
  .get('/', (req, res) => res.json({ healthCheck: true }))
  .listen(PORT, () => console.log(`Running! Access http://localhost:${PORT}`))