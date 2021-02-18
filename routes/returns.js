const express = require('express');
const router = express.Router();
// const dummyData = require();

/* GET returns. */
router.get('/', (req,res)=>{
    res.json({title: 'returns page'});
});

module.exports = router;