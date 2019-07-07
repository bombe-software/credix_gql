const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const solicitud = mongoose.Schema({
    cantidad: Number,
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'cliente'
    },
    gestor: {
        type: Schema.Types.ObjectId,
        ref: 'gestor'
    }, 
    test: {
        type: Schema.Types.ObjectId,
        ref: 'test'
    },
    status: {
        type: String,
        enum: ['Aprobada', 'Negada', 'Pendiente']
    },
    fecha: Date
});

mongoose.model('solicitud', solicitud);