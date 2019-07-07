const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const test = mongoose.Schema({
    cliente: {
        type: Schema.Types.ObjectId,
        ref: 'cliente'
    },
    tipo_prestamo: {
        type: String,
        enum: ['personal','estudios', 'hipotecarios'],
    },
    monto_credito: Number,
    /**
       corto_plazo. plazo máximo de un año.
       medio plazo. entre un año y tres años.
       largo plazo. superior a los tres años.
     */
    tipo_interes_manejar:{
        type: String,
        enum: ['variable', 'fijo'],
    },
    plazo:{
        type: String,
        enum: ['corto', 'mediano', 'largo'],
    },
    motivo:{
        type: String,
        enum: ['refaccionario', 'financiamiento']
    },
    persona_empleada: Boolean,
    personas_dependientes: Number,
    personas_economicamente_activas: Number, // 9,10
    promedio_ganancia_mensual: Number,
    gasto_arrienda: Number,
    gasto_comida: Number, 
    gasto_transporte: Number,
    gasto_servicios: Number, //agua, luz, etc,
    gasto_deudas: Number,
    trabajo_formal: Boolean, //Validar con RFC en front
    seguros: Boolean,
    cuenta_pago_compania: Boolean,
    edad: Number,
    escolaridad: {
        type: String,
        enum: ['nula', 'primaria', 'secundaria', 'preparatoria', 'universidad', 'posgrado']
    },
    //localizacion: String,
    estado_emocional_1: String,
    estado_emocional_2: String,
    ordenar: Number,
    comprar_nuevo: Number,
    estado_civil: {
        type: String,
        enum: ['casado', 'divorciado', 'viudo']
    },
    trabajo: {
        type: String,
        enum: ['oficio', 'licenciado', 'ingeniero', 'abogado', 'salud', 'social','servidor_publico']
    },
    plaza: {
        type: String,
        enum: ['tecnologia', 'ropa','cine', 'comida']
    },
    bateria: {
        type: String,
        enum: ['trabajo', 'noche', 'tarde']
    },
    math:Number,
    amonestaciones:[{
        type: Schema.Types.ObjectId,
        ref: 'amonestacion'
    }],
    status: {
        type: String,
        enum: ['Aprobada', 'Negada', 'Pendiente']
    }
})

mongoose.model('test', test);