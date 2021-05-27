import { getPatients } from '../controllers/index.js'
const express = require('express');
const db = require('../db');

const router = express.Router();

router.get('/', getPatients);

router.get('/:name', async (req, res, next) => {
    try {
        let results = await db.one(req.params.name);
        res.json(results);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
});

module.exports = router;