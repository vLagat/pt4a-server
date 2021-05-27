// const express = require('express');
// const db = require('../db');

// export const getPatients = async (req, res, next) => {
//     try {
//         let results = await db.all();
//         res.json(results);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// }


// export const getPatientByName = async(req, res, next) => {
//     try {
//         let patients = await db.one(req.params.name);
//         res.json(patients);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// }

// export const getLocations = async (req, res, next) => {
//     try {
//         let locations = await db.all();
//         res.json(locations);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// }

// export const getReports = async (req, res, next) => {
//     try {
//         let reports = await db.all();
//         res.json(reports);
//     } catch(e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// }