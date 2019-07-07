var fs = require('fs');
const mongoose = require('mongoose');
const Test = mongoose.model('test');

exports.send =  async function (req, res) {
    let contenido = await Test.find()
        contenido =contenido.map(u=>{
            return (
            u.tipo_prestamo +','+
            u.monto_credito +','+ 
            u.tipo_interes_manejar +','+
            u.plazo +','+  
            u.motivo +','+
            u.persona_empleada +','+
            u.personas_dependientes +','+
            u.personas_economicamente_activas +','+
            u.promedio_ganancia_mensual +','+
            u.gasto_arrienda +','+
            u.gasto_comida +','+
            u.gasto_transporte +','+
            u.gasto_servicios +','+
            u.gasto_deudas +','+
            u.trabajo_formal +','+
            u.seguros +','+
            u.cuenta_pago_compania +','+
            u.edad +','+
            u.escolaridad +','+
            // u.localizacion +','+
            u.estado_emocional_1 +','+
            u.estado_emocional_2 +','+
            u.ordenar +','+
            u.comprar_nuevo +','+
            u.estado_civil +','+
            u.trabajo +','+
            u.plaza +','+
            u.bateria +','+
            u.amonestaciones.length +','+
            u.status
            )
        })
       // console.log(contenido);

    
    fs.writeFile('./bd.csv', contenido.join('\n'), function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Archivo escrito correctamente!")
    });
    res.end();
    /*
    tipo_prestamo ['personal ', 'bienes de consumo duradero', 'estudios', 'hipotecarios', 'empresarial']
    monto_credito Number
    tipo_interes_manejar ['variable ', 'fijo'],
    plazo ['corto ', 'mediano', 'largo']
    motivo ['refaccionario ', 'financiamiento']
    persona_empleada: Boolean,
    personas_dependientes: Number,
    personas_economicamente_activas: Number,
    promedio_gananacia_mensual: Number,
    promedio_ganancias: Number,
    gasto_arrienda: Number,
    gasto_comida: Number, 
    gasto_transporte: Number,
    gasto_servicios: Number,
    gasto_deudas: Number,
    trabajo_formal: Boolean
    seguros: Boolean
    cuenta_pago_compañia: Boolean
    consulta_buro: Boolean
    edad: Number,
    escolaridad ['nula ', 'primaria', 'secundaria', 'preparatoria', 'universidad', 'posgrado']
    localizacion: String
    estado_emocional_1: String
    estado_emocional_2: String
    */
};