const express = require('express');
const app = express();
const api = require('./routes/index');
const test = require('./routes/test');
const db = require('../db/index');

app.use('/api', api);
app.use('/api', test);
db();

const port = 3002;
app.listen(port, ()=>console.log('Listening on port ${port}'));

