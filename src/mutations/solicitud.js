const mongoose = require('mongoose');
const Solicitud = require('mongoose').model('solicitud');
 
//Funcion
async function add( args) {
    const {
        cantidad,        cliente,
        gestor,         test
    } = args;
    
    const solicitud = new Solicitud({
        cantidad,  cliente,
        gestor, test, 
        status: 'Pendiente', fecha: new Date().toString()
    });
    
    await solicitud.save();

    return Solicitud.findOne({cliente});
}

async function aprobar_denegar( args) {
    const {
        status,id
    } = args;
    
    console.log(status, id);

    return Solicitud.findById(mongoose.Types.ObjectId(id));
}

//Se exporta la funcion
module.exports = { add, aprobar_denegar };