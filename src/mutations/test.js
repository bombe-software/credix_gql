const mongoose = require('mongoose');
const Test = require('mongoose').model('test');
 
//Funcion
async function add( args) {
    const {
        cliente,
        promedio_ingresos_mensuales
    } = args;
    
    const test = new Test({
        cliente,
        promedio_ingresos_mensuales
    });
    
    await test.save();

    return Test.findOne({cliente});
}

//Se exporta la funcion
module.exports = { add };