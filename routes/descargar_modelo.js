var fs = require('fs');
const Test = mongoose.model('test');

exports.send = function (req, res) {
    Test.find({}).map((u)=>{ 
        console.log(u)
        //return u.name; 
    });

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
    console.log('modelo hecho');
};