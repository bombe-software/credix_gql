//Funcion
//Librerias y configuraciones requeridas
/**
 * Mongoose
    */
const mongoose = require('mongoose');
const Nullname = mongoose.model('nullname');
 

//Funcion
function add({ args, req }) {
    const {
        nombre
    } = args;
    const nullname = new Nullname({
        nombre
    });
    
    nullname.save();

    return Nullname.findOne({nombre});
}

//Se exporta la funcion
module.exports = { add };