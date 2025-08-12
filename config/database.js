const mysql2 = require('mysql2');

const pool = mysql2.createPool({
    host: 'bv5o7ejzi4yfpe6nmmvt-mysql.services.clever-cloud.com',
    user: 'u04yuoivggmh9sae',
    password: 'u04yuoivggmh9sae',
    database: 'bv5o7ejzi4yfpe6nmmvt',
});

module.exports = pool.promise();