const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuario = mongoose.Schema({
    nombre: String,
    sexo: String,
    email: String,
    password: String
});

mongoose.model('usuario', usuario);