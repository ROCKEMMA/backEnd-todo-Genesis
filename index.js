/* const db = require('./config/database');
 */require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();  

app.use(cors({
    origin: "*",
    methods: ['GET','POST','OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

//RUTAS TIPO GET
const getTablas = require('./routes/get/obtenerTablas');
app.use(getTablas);

const getTareas = require('./routes/get/obtenerTareas');
app.use(getTareas);



// MIS RUTAS MIDDLEWARE
/* app.get('/',(req,res)=>{

    let consulta = db.query('SHOW TABLES')
    res.send("Mi backEnd con ExpressJS");
});
 */

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Servidor: http://localhost:${PORT}`);
})

