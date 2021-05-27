const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    password: 'Eek6FEuxS7Y8IGlV@2021',
    user: 'test_user',
    database: 'testDB',
    host: '142.93.103.37',
    port: '3306'
});