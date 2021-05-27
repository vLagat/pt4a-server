const express = require('express');
const patientData = require('../db');
const locationData = require('../db/location.js');
const reportData = require('../db/reports.js');

const router = express.Router();

router.get('/patients/', async (req, res, next) => {
    try {
        let results = await patientData.all();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/patients/:name', async (req, res, next) => {
    try {
        let results = await patientData.one(req.params.name);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/locations/', async (req, res, next) => {
    try {
        let results = await locationData.all();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/reports/', async (req, res, next) => {
    try {
        let results = await reportData.all();
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});
module.exports = router;