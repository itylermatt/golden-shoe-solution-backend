const express = require('express');
const router = express.Router();
const purchases = require('../dummy-data/purchases');

/* GET purchases. */
router.get('/', (req,res) => {
   res.json({purchases});
});

module.exports = router;
