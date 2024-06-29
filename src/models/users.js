const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    correo: {
        type: String,
        require: true
    },
    telefono: {
        type: String,
        requie: true
    },
    contrasena: {
        type: String,
        require: true
    },
    roles: [{
        type: String,
        require: false
    }],
    fecha_registro: {
        type: Date,
        require: true
    }
});

module.exports = mongoose.model('User', userSchema);