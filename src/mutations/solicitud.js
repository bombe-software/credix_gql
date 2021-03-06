const mongoose = require('mongoose');
const Solicitud = require('mongoose').model('solicitud');
const Cliente = require('mongoose').model('cliente');
const Test = require('mongoose').model('test');
//Funcion
async function add(args) {
    const {
        cantidad, cliente,
        gestor, test
    } = args;


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

async function aprobar_denegar(args) {
    const {
        status, id
    } = args;

    console.log(status, id);
    let res = await Solicitud.findByIdAndUpdate(mongoose.Types.ObjectId(id), {
        status
    }, { new: true });

    await Test.findByIdAndUpdate(res.test, {
        status
    }, { new: true });


    return Solicitud.findById(mongoose.Types.ObjectId(id));
}

//Se exporta la funcion
module.exports = { add, aprobar_denegar };