const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const test = mongoose.Schema({
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'cliente'
    },
    tipo_prestamo: {
        type: String,
        enum: ['personal ', 'bienes de consumo duradero', 'estudios', 'hipotecarios', 'empresarial'],
    },
    monto_credito: Number,
    /**
       corto_plazo. plazo máximo de un año.
       medio plazo. entre un año y tres años.
       largo plazo. superior a los tres años.
     */
    tipo_interes_manejar:{
        type: String,
        enum: ['variable ', 'fijo'],
    },
    plazo:{
        type: String,
        enum: ['corto ', 'mediano', 'largo'],
    },
    motivo:{
        type: String,
        enum: ['refaccionario ', 'financiamiento']
    },
    persona_empleada: Boolean,
    personas_dependientes: Number,
    personas_economicamente_activas: Number,
    promedio_gananacia_mensual: Number,
    promedio_ganancias: Number,
    gasto_arrienda: Number,
    gasto_comida: Number, 
    gasto_transporte: Number,
    gasto_servicios: Number, //agua, luz, etc,
    gasto_deudas: Number,
    trabajo_formal: Boolean, //Validar con RFC en front
    seguros: Boolean,
    cuenta_pago_compañia: Boolean,
    consulta_buro: Boolean,
    edad: Number,
    escolaridad: {
        type: String,
        enum: ['nula ', 'primaria', 'secundaria', 'preparatoria', 'universidad', 'posgrado']
    },
    localizacion: String,
    estado_emocional_1: String,
    estado_emocional_2: String
});

mongoose.model('test', test);