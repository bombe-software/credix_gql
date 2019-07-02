const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuario = mongoose.Schema({
    email: String,
    password: String
});

mongoose.model('usuario', usuario);