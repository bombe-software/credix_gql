const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuario = mongoose.Schema({
    nombre: String,
    sexo: String,
    email: String,
    password: String,
    nombre_usuario: String,
    nombre: String,
    tipo_usuario: {
        type: String,
        enum: ['Administrador', 'Institucion', 'Gestor']
    },
    sexo: {
        type: String,
        enum: ['Femenino', 'Masculino']
    }
});

mongoose.model('usuario', usuario);