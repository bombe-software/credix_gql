const mongoose = require('mongoose');
const Amonestacion = require('mongoose').model('amonestacion');
 
//Funcion
async function add( args) {
    const {
        dias,  cliente,
        solicitud,  cantidad_deuda
    } = args;
    if(!args.req.user) throw new Error("Token invalido");
    
    const amonestacion = new Amonestacion({
        dias,  cliente,
        solicitud,  cantidad_deuda
    });
    
    await amonestacion.save();

    return Amonestacion.findOne({cliente});
}

//Se exporta la funcion
module.exports = { add };