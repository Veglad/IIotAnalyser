# IIotAnalyser
Simple IIoT monitoring app

## Local setup

### Environment
* Docker engine 
* Curl / Postman  or similar for testing

### Steps
The whole setup is just about running services with the root *docker-compose*

1. Clone this repo
2. Open root dir and execute `docker-compose up` 
3. It may take 5-10 minutes for Kibana / ElasticSearch services to be ready 
4. Wait until you will be able to open Kibana web interface `http://localhost:5601`

That's it!

## Integrating and testing

### Server API

#### Log temperature measures batch

**Path:** /sensor/temperature  
**Headers:** Content-Type: application/json  
**Body**: [TemperatureMeasure]  

Where TemperatureMeasure type definition:  

|    Name     | Type |       Comments      |
|-------------|------|---------------------|
|  sensorId   |string|                     |
|  timestamp  |string|Date format *iso8601*|
|  value      |float |                     |


Example:
```json
[
    { "sensorId": "ASD23E012", "timestamp": "2020-12-19T12:22:00Z", "value": 39 },
    { "sensorId": "ASD23E012", "timestamp": "2020-12-19T12:22:05Z", "value": 37.14 },
]
```

#### Log humidity measures batch

**Path:** /sensor/humidity  
**Headers:** Content-Type: application/json  
**Body*** [HumidityMeasure]  

Where HumidityMeasure type definition:  

|    Name     | Type |       Comments      |
|-------------|------|---------------------|
|  sensorId   |string|                     |
|  timestamp  |string|Date format *iso8601*|
|  value      |float |                     |


Example:
```json
[
    { "sensorId": "ASD23E011", "timestamp": "2020-12-19T12:22:00Z", "value": 49.0 },
    { "sensorId": "ASD23E011", "timestamp": "2020-12-19T12:22:05Z", "value": 48.14 },
]
```

