//this is where our middlewhere and express app will live
const express = require('express');
const app = express();

const apirouter = require('./routes');
app.use('/api', apirouter);

app.listen(3000, ()=> {
console.log("listening on port 3000");
});