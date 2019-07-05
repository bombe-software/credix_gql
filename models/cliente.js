const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cliente = mongoose.Schema({
    nombre: String,
    telefono: String,
    amonestaiones: [{
        type: Schema.Types.ObjectId,
        ref: 'amonestacion'
    }],
    domicilio: String,
    edad: Number, 
    curp: String,
    rfc: String,
    promedio_ingresos_mensual: Number
});

mongoose.model('cliente', cliente);