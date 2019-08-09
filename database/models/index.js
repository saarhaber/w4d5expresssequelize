// Here is where we will execute database definitions and make associations;

const Campus = require("./campus");
const Student = require("./student");

/* TODO: make associations here */
Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {
  Campus,
  Student
} 