const express = require('express');
const patientData = require('../db');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        let results = await patientData.all();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/:name', async (req, res, next) => {
    try {
        let results = await patientData.one(req.params.name);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;