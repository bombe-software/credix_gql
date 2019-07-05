const mongoose = require('mongoose');
const Solicitud = require('mongoose').model('solicitud');
const Cliente = require('mongoose').model('cliente');
//Funcion
async function add(args) {
    const {
        cantidad, cliente,
        gestor, test
    } = args;

    
    console.log({
        cantidad,        cliente,
        gestor,         test
    })
    const solicitud = new Solicitud({
        cantidad, cliente,
        gestor, test,
        status: 'Pendiente', fecha: new Date().toString()
    });

    const result = await solicitud.save();

    await Cliente.findByIdAndUpdate(cliente,
        { $push: { "solicitud": result._id } }, { new: true });

    return Solicitud.findOne({ cliente });
}

//Se exporta la funcion
module.exports = { add };