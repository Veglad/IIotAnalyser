import express from 'express'
import { processTemperatureMeasureBatch } from './service/elasticSearchService.js'

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || '8080'
// eslint-disable-next-line no-undef
const HOST = process.env.HOST || '0.0.0.0'

const app = express()
app.use(express.json())
app.get('/health', (req, res) => {
  res.send('Server is running...')
})

app.post('/sensor', async (req, res) => {
  const temperatureMeasureBatch = req.body
  processTemperatureMeasureBatch(temperatureMeasureBatch)
  res.send({ msg: `Processing ${temperatureMeasureBatch.length} measures` })
})

app.listen(PORT, HOST)
console.log(`running on http://${HOST}:${PORT}`)