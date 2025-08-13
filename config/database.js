const mysql2 = require('mysql2');

const pool = mysql2.createPool({
    host: 'b3kqozfueweuqm7uayjk-mysql.services.clever-cloud.com',
    user: 'unpy22jt4bwgpans',
    password: 'm0maetxYj4NcbokWOZqm',
    database: 'b3kqozfueweuqm7uayjk',
});

module.exports = pool.promise();