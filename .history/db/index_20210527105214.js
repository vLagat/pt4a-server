const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'Eek6FEuxS7Y8IGlV@2021',
    user: 'test_user',
    database: 'testDB',
    host: '142.93.103.37',
    port: '3306'
});

let patientData = {};
let locationData = {};

patientData.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM patient`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

patientData.one = (name) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM patient WHERE name = ?`, [name], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

module.exports = patientData;