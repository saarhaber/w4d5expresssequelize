const Sequelize = require('sequelize');
const databaseName = 'w4d5demo';

console.log("opening database connection");

const db=new Sequelize(`postgres://localhost:5432/${databaseName}`, {logging: false});


module.exports = db;