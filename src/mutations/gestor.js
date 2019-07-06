const mongoose = require('mongoose');
const Gestor = require('mongoose').model('gestor');
 
//Funcion
async function inhabilitar(args,req) {
    const {
        gestor
    } = args;
  
    await Gestor.findByIdAndUpdate(gestor,{
        status:"Inactivo"
    },{new: true})


    return Gestor.findOne({gestor});
}

//Se exporta la funcion
module.exports = { inhabilitar };