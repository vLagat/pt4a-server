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
        pool.query(`SELECT 
        DATE_FORMAT(encounter_datetime,'%Y-%m') AS month, location_id, COUNT(IF(htn_status='7285',1, NULL)) 'New Hypertensive', COUNT(IF(htn_status='7286',1, NULL)) 'Known Hypertensive',
         COUNT(IF(dm_status='7281',1, NULL)) 'New Diabetic', COUNT(IF(dm_status='7282',1, NULL)) 'Known Diabetic'
        
        FROM 
            flat_cdm_summary  fcs
        group by
        fcs.location_id, DATE_FORMAT(encounter_datetime,'%Y-%m')`, (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

reportData.one = (id) => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM flat_cdm_summary WHERE id = ?`, [id], (err, results) => {
            if(err){
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

module.exports = reportData;