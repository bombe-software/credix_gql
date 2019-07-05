const mongoose = require('mongoose');
const Test = require('mongoose').model('test');
 
//Funcion
async function add( args) {

    const {
        cliente,
        promedio_ingresos_mensuales
    } = args;
    
    console.log({
        cliente,
        promedio_ingresos_mensuales
    })

    const test = new Test({
        cliente,
        promedio_ingresos_mensuales
    });
    
    await test.save();

    return Test.findOne({cliente});
}

//Se exporta la funcion
module.exports = { add };