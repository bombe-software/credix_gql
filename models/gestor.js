const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gestor = mongoose.Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuario'
    },
    prestamos: [{
        type: Schema.Types.ObjectId,
        ref: 'solicitud'
    }]
});

mongoose.model('gestor', gestor);