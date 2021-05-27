const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'Eek6FEuxS7Y8IGlV@2021',
    user: 'test_user',
    database: 'testDB',
    host: '142.93.103.37',
    port: '3306'
});

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     password: '',
//     user: 'root',
//     database: 'testdb',
//     host: '127.0.0.1',
//     port: '3306'
// });
let patientData = {};

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

module.exports = pt4adb;