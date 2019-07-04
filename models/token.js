const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const token = mongoose.Schema({
    institucion: {
        type: Schema.Types.ObjectId,
        ref: 'institucion'
    },
    token: String
});

mongoose.model('token', token);