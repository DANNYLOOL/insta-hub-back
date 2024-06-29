const express = require('express');
const mongoose = require('mongoose');
require("dotenv").config();

const usersRoute = require("./routes/users");


const app = express();
const port = process.env.PORT || 9000;

//Routes
app.get('/', (req, res) => {
    res.send("Api funcionando! :D")
});

app.use('/api', usersRoute);

//Conexion a MongoDB
mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log("Conectado a la base de datos en MongoDB"))
    .catch((eror) => console.log(error));

app.listen(port, () => {
    console.log("El servidor esta corriendo en el puerto", port);
});