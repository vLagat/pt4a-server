const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'Eek6FEuxS7Y8IGlV@2021',
    user: 'test_user',
    database: 'testDB',
    host: '142.93.103.37',
    port: '3306'
});

let reportData = {};

reportData.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM flat_cdm_summary`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

reportData.one = (encounter_datetime) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM flat_cdm_summary WHERE encounter_datetime = ?`, [encounter_datetime], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

module.exports = reportData;