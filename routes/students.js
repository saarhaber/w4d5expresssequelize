//this where the api routes to students will be
const router = require('express').Router();
router.get('/', (req,res,next)=> 
{
    res.send("students");
})

module.exports = router;