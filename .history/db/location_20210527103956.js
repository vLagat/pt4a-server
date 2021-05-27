const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'Eek6FEuxS7Y8IGlV@2021',
    user: 'test_user',
    database: 'testDB',
    host: '142.93.103.37',
    port: '3306'
});

let locationData = {};

locationData.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM location`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};
module.exports = locationData;