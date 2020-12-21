import { Client } from '@elastic/elasticsearch'

// eslint-disable-next-line no-undef
const elasticApiUrl = process.env.ELASTIC_SEARCH_API_URL || 'http://localhost:9200'
export const client = new Client({ node: elasticApiUrl })

const config = {
    TEMPERATURE_INDEX: 'sensor-temperature-measure',
    HUMIDITY_INDEX: 'sensor-humidity-measure',
}

export const processTemperatureMeasureBatch = (batch = []) => {
    batch.forEach(processTemperatureMeasure)
}

export const processHumidityMeasureBatch = (batch = []) => {
    batch.forEach(processHumidityMeasure)
}

export const processTemperatureMeasure = async ({ sensorId, timestamp, value }) => {
    if (!sensorId || !timestamp || !value) {
        throw new Error('All Measure data is required: [sensorId, timestamp, value]')
    }

    console.log(`Indexing ${sensorId} ${timestamp} ${value}`)
    const response = await client.index({
        index: config.TEMPERATURE_INDEX,
        body: { sensorId, timestamp, value }
      })
    console.log(response)
}

export const processHumidityMeasure = async ({ sensorId, timestamp, value }) => {
    if (!sensorId || !timestamp || !value) {
        throw new Error('All Measure data is required: [sensorId, timestamp, value]')
    }

    console.log(`Indexing ${sensorId} ${timestamp} ${value}`)
    const response = await client.index({
        index: config.HUMIDITY_INDEX,
        body: { sensorId, timestamp, value }
      })
    console.log(response)
}
