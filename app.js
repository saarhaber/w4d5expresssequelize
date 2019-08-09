//this is where our middlewhere and express app will live
const express = require('express');
const app = express();

const db = require('./database');
const apirouter = require('./routes');

db.sync();

app.use('/api', apirouter);

app.listen(3000, ()=> {
console.log("listening on port 3000");
});