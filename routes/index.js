//thi is where wi wil lset up our api router
const router = require('express').Router();
const campusesRouter = require ('./campuses')
const studentssRouter = require ('./students')

router.use('/campuses', campusesRouter);