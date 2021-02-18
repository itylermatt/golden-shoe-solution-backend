const express = require('express');
const router = express.Router();

/* GET purchases. */
router.get('/', (req,res) => {
   res.json({title: 'Purchases'});
});

module.exports = router;
