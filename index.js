require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();  

app.use(cors({
    origin: "*",
    methods: ['GET','POST','OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// RUTAS TIPO GET
const getTablas = require('./routes/get/obtenerTablas');
app.use(getTablas);

const getTareas = require('./routes/get/obtenerTareas');
app.use(getTareas);

// RUTA RAÍZ (para que no de 404 en /)
app.get('/', (req, res) => {
    res.send("✅ Backend funcionando en Render");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
