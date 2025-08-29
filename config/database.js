/* const mysql2 = require('mysql2');

const pool = mysql2.createPool({
    host: 'b3kqozfueweuqm7uayjk-mysql.services.clever-cloud.com',
    user: 'unpy22jt4bwgpans',
    password: 'm0maetxYj4NcbokWOZqm',
    database: 'b3kqozfueweuqm7uayjk',
});

module.exports = pool.promise(); */

const mysql2 = require('mysql2');

const pool = mysql2.createPool({
    host: "b3kqozfueweuqm7uayjk-mysql.services.clever-cloud.com",        // ej: "mysql-xxxx.render.com"
    user: "unpy22jt4bwgpans",               
    password: "m0maetxYj4NcbokWOZqm",         
    database: "mysql -h b3kqozfueweuqm7uayjk-mysql.services.clever-cloud.com -P 3306 -u unpy22jt4bwgpans -p b3kqozfueweuqm7uayjk",     // el nombre de tu base de datos
    port: 3306,                       
    ssl: { rejectUnauthorized: true } 
});

module.exports = pool.promise();