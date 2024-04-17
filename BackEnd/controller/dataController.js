const express = require('express');
const router = express.Router();
const SampleData = require('../models/sample-data');


router.post('/upload', async (req, res) => {
});

router.get('/filter', async (req, res) => {
  const { startTime, frequency } = req.query;
  
});

module.exports = router;