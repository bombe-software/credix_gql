const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const institucion = mongoose.Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuario'
    },
    gestores: [{
        type: Schema.Types.ObjectId,
        ref: 'gestor'
    }]
});

mongoose.model('institucion', institucion);