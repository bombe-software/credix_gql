const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const token = mongoose.Schema({
    gestor: {
        type: Schema.Types.ObjectId,
        ref: 'gestor'
    },
    token: String
});

mongoose.model('token', token);