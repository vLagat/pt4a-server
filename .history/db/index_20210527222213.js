const mysql = require('mysql');

// const pool = mysql.createPool({
//     connectionLimit: 10,
//     password: 'Eek6FEuxS7Y8IGlV@2021',
//     user: 'test_user',
//     database: 'testDB',
//     host: '142.93.103.37',
//     port: '3306'
// });
const pool = mysql.createPool({
    connectionLimit: 10,
    password: '',
    user: 'root',
    database: 'testdb',
    host: '127.0.0.1',
    port: '3306'
});

let patientData = {};
let locationData = {};

patientData.all = () => {
    return new Promise((resolve, reject) => {
        pool.query(`SELECT 
        fcs.id, p.name, DATE_FORMAT(p.dob,'%Y-%m-%d') as dob, p.gender, p.phone_number, YEAR(CURDATE()) - YEAR(dob) AS Age, DATE_FORMAT(p.date_created,'%Y-%m-%d') as date_created,
        case fcs.htn_status when '7285' then 'New Hypertensive' when '7286' then 'Known Hypertensive' else '--' end as htn_status, 
        case fcs.dm_status when '7281' then 'New Diabetic' when '7282' then 'Known Diabetic' else '--' end as dm_status
          
        from flat_cdm_summary fcs
        LEFT JOIN
        patient p 
        ON
        p.patient_id = fcs.patient_id;`, (err, results) => {
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