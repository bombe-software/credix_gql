const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const amonestacion = mongoose.Schema({
    dias: Number,
    cantidad_deuda: Number,
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'cliente'
    },
    amonestacion: {
        type: Schema.Types.ObjectId,
        ref: 'amonestacion'
    }
});

mongoose.model('amonestacion', amonestacion);