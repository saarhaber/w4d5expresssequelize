//this is a file that you run so you can use your database
const { Student, Campus } = require("./database/models");

const students = [
    {firstName: "Allan", lastName: "Abe"},
    {firstName: "Brian", lastName: "Dern"},
    {firstName: "Hector", lastName: "Ruiz"},
    {firstName: "Alyssa", lastName: "Rodriguez"}
];

const campuses = [{name: "Hunter College"}, {name: "NYU"}];

function pickRandomId() {
    return Math.floor(Math.random() * 2) + 1;
  }
  

async function populateDatabase() {
    for (let i = 0; i < campuses.length; i++) {
        let currentCampus = campuses[i];
        await Campus.create(currentCampus);
      }

  for (let i = 0; i < students.length; i++) {
    let currentStudent = students[i];
    let savedStudent = await Student.create(currentStudent);
    await savedStudent.setCampus(pickRandomId());
  }

}

populateDatabase(); 