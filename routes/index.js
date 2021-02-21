const express = require('express');
const router = express.Router();
const titleData = require('../dummy-data/index').titleData;
const categories = require('../dummy-data/index').categories;
const categoryItems = require('../dummy-data/index').categoryItems;

/* GET home. */
router.get('/', function (req, res, next) {
    res.json({titleData, categoryItems, categories});
});

module.exports = router;
