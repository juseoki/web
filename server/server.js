const express = require('express');
const app = express();
const api = require('./routes/index');
const test = require('./routes/test');

app.use('/api', api);
app.use('/api', test);

const port = 3002;
app.listen(port, ()=>console.log('Listening on port ${port}'));

