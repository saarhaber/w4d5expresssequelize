//this where the api routes to campuses will be
const router = require('express').Router();
router.get('/', (req,res,next)=> 
{
    res.send("campuses"
    );
})

module.exports = router;