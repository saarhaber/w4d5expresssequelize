//this is where our middlewhere and express app will live
const express = require('express');
const app = express();

const db = require('./database');
const apirouter = require('./routes');

db.sync({ force: true }) // NOTE: this option of "force": true is a destructive operation --- it will drop all of your tables --- so you might need two terminals open if this is passed in --- one for running the application and one for seeding your data;

app.use('/api', apirouter);

app.listen(3000, ()=> {
console.log("listening on port 3000");
});