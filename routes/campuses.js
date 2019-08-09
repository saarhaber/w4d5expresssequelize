//this where the api routes to campuses will be
const router = require('express').Router();
const { Campus, Student } = require("../database/models");

router.get('/', (req,res,next)=> 
{
    Campus.findAll({ include: [Student] })
    .then(campuses => res.status(200).json(campuses))
    .catch(err => console.log(err));
})

module.exports = router;