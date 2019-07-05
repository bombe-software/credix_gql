const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = mongoose.Schema({
    nombre: String,
    telefono: String,
    domicilio: String,
    edad: Number, 
    curp: String,
    rfc: String,
    solicitud: [{
        type: Schema.Types.ObjectId,
        ref: 'solicitud'
    }]
});

mongoose.model('cliente', cliente);