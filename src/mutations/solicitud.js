const mongoose = require('mongoose');
const Solicitud = require('mongoose').model('solicitud');
 
//Funcion
async function add( args) {
    const {
        cantidad,        cliente,
        gestor,         test
    } = args;
    
    console.log({
        cantidad,        cliente,
        gestor,         test
    })
    const solicitud = new Solicitud({
        cantidad,  cliente,
        gestor, test, 
        status: 'Pendiente', fecha: new Date().toString()
    });
    
    await solicitud.save();

    return Solicitud.findOne({cliente});
}

//Se exporta la funcion
module.exports = { add };