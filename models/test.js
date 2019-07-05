const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const test = mongoose.Schema({
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'cliente'
    },
    //RFC
    promedio_ingresos_mensuales: Number
});

mongoose.model('test', test);