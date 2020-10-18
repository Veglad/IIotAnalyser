'use strict';

const express = require('express');

const port = 8080;
const host = '0.0.0.0';

const app = express();
app.get('/health', (req, res) => {
  res.send('Server is running...');
});

app.listen(port, host);
console.log(`running on http://${host}:${port}`);