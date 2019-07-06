const mongoose = require('mongoose');
const Test = require('mongoose').model('test');
 
//Funcion
async function add( args) {

    const {
        cliente, tipo_prestamo,monto_credito,tipo_interes_manejar,plazo,motivo, persona_empleada,personas_dependientes,personas_economicamentes_actias,
        promedio_ganancia_mensual,gasto_arrienda,gasto_comida,gasto_transporte,gasto_servicios,gasto_deudas,trabajo_formal, seguros, cuenta_pago_compania,
        edad, escolaridad, estado_emocional_1, estado_emocional_2  } = args;

        console.log(plazo);
    const test = new Test({
        cliente, tipo_prestamo,monto_credito,tipo_interes_manejar,plazo,motivo, persona_empleada,personas_dependientes,personas_economicamentes_actias,
        promedio_ganancia_mensual,gasto_arrienda,gasto_comida,gasto_transporte,gasto_servicios,gasto_deudas,trabajo_formal, seguros, cuenta_pago_compania,
        edad, escolaridad, estado_emocional_1, estado_emocional_2 
    });
    
    await test.save();

    return Test.findOne({cliente});
}

//Se exporta la funcion
module.exports = { add };