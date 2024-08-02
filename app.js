'use strict';

const express = require('express');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 4201;
const app = express();

const server = require('http').createServer(app);

app.use(bodyparser.urlencoded({ limit: '50mb', extended: true }));
app.use(bodyparser.json({ limit: '50mb', extended: true }));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header('Allow', 'GET, PUT, POST, DELETE, OPTIONS');
    next();
});

async function startServer() {
    try {
        await mongoose.connect('mongodb://localhost:27017/insta_hub');
        console.log("Conectado a la base de datos...");

        server.listen(port, function () {
            console.log("Servidor corriendo en el puerto " + port);
        });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

startServer();

module.exports = app;