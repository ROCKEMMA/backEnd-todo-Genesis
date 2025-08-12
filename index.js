const db = require('./config/database');
require('dotenv').config();

// importando el módulo express
const express = require('express');

const app = express();

// MIS RUTAS MIDDLEWARE
app.get('/',(req,res)=>{

    let consulta = db.query('SHOW TABLES')
    res.send("Mi backEnd con ExpressJS");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Servidor: http://localhost:${PORT}`);
})

