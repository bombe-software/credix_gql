const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const nullname = mongoose.Schema({
    nombre: String
});

mongoose.model('nullname', nullname);