const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const amonestacion = mongoose.Schema({
    dias: Number,
    cantidad_deuda: Number,
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'cliente'
    }, 
    solicitud: {
        type: Schema.Types.ObjectId,
        ref: 'solicitud'
    }
});

mongoose.model('amonestacion', amonestacion);