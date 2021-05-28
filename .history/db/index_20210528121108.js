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
        pool.query(`SELECT 
        fcs.patient_id,p.name, DATE_FORMAT(encounter_datetime,'%d-%m-%Y') AS encounter_datetime,
        case fcs.htn_status when '7285' then 'New Hypertensive' when '7286' then 'Known Hypertensive' else '--' end as htn_status, 
        case fcs.dm_status when '7281' then 'New Diabetic' when '7282' then 'Known Diabetic' else '--' end as dm_status,
        p.gender, (YEAR(CURDATE()) - YEAR(dob)) AS Age, fcs.location_id, DATE_FORMAT(encounter_datetime,'%Y-%m') AS encounter_datetime_min, DATE_FORMAT(dob,'%Y-%m-%d') AS dob, p.phone_number
   FROM 
       testDB.flat_cdm_summary  fcs
   LEFT OUTER JOIN
       testDB.patient p
   ON
   p.patient_id = fcs.patient_id
   ORDER BY fcs.id ASC`, (err, results) => {
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