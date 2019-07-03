const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const solicitud = mongoose.Schema({
   cantidad: Number,
   cliente: {
        type: Schema.Types.ObjectId,
        ref: 'cliente'
    },
    status: String,
    fecha: Date
});

mongoose.model('solicitud', solicitud);