import { Client } from '@elastic/elasticsearch'

// eslint-disable-next-line no-undef
const elasticApiUrl = process.env.ELASTIC_SEARCH_API_URL || 'http://localhost:9200'
export const client = new Client({ node: elasticApiUrl })

const temperatureMeasureConfig = {
    INDEX: 'sensor-temperature-measure',
}

export const processTemperatureMeasureBatch = (batch = []) => {
    console.error(batch)
    batch.forEach(processTemperatureMeasure)
}

export const processTemperatureMeasure = ({ sensorId, timestamp, value }) => {
    if (!sensorId || !timestamp || !value) {
        throw new Error('All Measure data is required: [sensorId, timestamp, value]')
    }

    console.log(`Indexing ${sensorId} ${timestamp} ${value}`)
    client.index({
        index: temperatureMeasureConfig.INDEX,
        body: { sensorId, timestamp, value }
      })
}
