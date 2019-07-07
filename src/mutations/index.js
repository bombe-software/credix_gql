//Configuracion de GraphQL
const graphql = require('graphql');
const { createCanvas, loadImage } = require('canvas');
const pubsub = require('./../../pubsub').pubsub;

const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLBoolean } = graphql;

//Funciones add
const nullname = require('./nullname');
const usuario = require('./usuario');
const tokens = require('./token');
const agestor = require('./gestor');
const cliente = require('./cliente');
const amonestacion = require('./amonestacion');
const test = require('./test');
const solicitud = require('./solicitud');

const io = require('socket.io');

function decodeBase64Image(dataString) {
  var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
    response = {};

  if (matches.length !== 3) {
    return new Error('Invalid input string');
  }

  response.type = matches[1];
  response.data = new Buffer(matches[2], 'base64');

  return response;
}

async function analize_img(imagen){
  const image = decodeBase64Image(imagen);
        
  var params = {
    images_file: image.data,
    classifier_ids: ["DefaultCustomModel_1460318682"],
    threshold: 0.2
  };
  var visualRecognition = new VisualRecognitionV3({
    version: '2018-03-19',
    iam_apikey: 'vUt4mo3qJw0Gbg0B_iNG6dmel_PJptPlym-08bL4k-LH'
  });
  let res = '';
  visualRecognition.classify(params, function (err, response) {

    try{
      res = JSON.stringify(response.images[0].classifiers[0].classes);
      //io.emit('image', { string: res });
    }catch(err){
      console.log(err);
    }
  });
  return { string: res }
}
      


const RootMutation = new GraphQLObjectType({
  name: 'Mutaciones',
  fields: {
    test: {
      type: GraphQLString,
      args: {
        nombre: { type: GraphQLString }
      },
      resolve(parentValue, args, req) {
        return nullname.add({ args, req });
      }
    },
    login: {
      type: require('./../schemas/usuario'),
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return usuario.login({ email, password, req });
      }
    },
    logout: {
      type: require('./../schemas/usuario'),
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      }
    },
    registro: {
      type: require('./../schemas/usuario'),
      args: {
        email: { type: GraphQLString },
        nombre: { type: GraphQLString },
        nombre_usuario: { type: GraphQLString },
        password: { type: GraphQLString },
        sexo: { type: GraphQLString },
        token: { type: GraphQLString }
      },
      resolve(parentValue, { email, nombre, nombre_usuario, password, sexo, token }, req) {
        return usuario.signup({ email, nombre, nombre_usuario, password, sexo, token, req });
      }
    },
    token: {
      type: require('./../schemas/token'),
      args: {
        institucion: { type: GraphQLID },
        token: { type: GraphQLString }
      },
      resolve(parentValue, { institucion, token }, req) {
        return tokens.generateToken({ institucion, token, req });
      }
    },
    addCliente: {
      type: require('./../schemas/cliente'),
      args: {
        nombre: { type: GraphQLString },
        telefono: { type: GraphQLString },
        domicilio: { type: GraphQLString },
        edad: { type: GraphQLInt },
        curp: { type: GraphQLString },
        rfc: { type: GraphQLString }
      },
      resolve(parentValue, { nombre, telefono, domicilio, edad, curp, rfc }, req) {
        return cliente.add({ nombre, telefono, domicilio, edad, curp, rfc, req });
      }
    },
    addAmonestacion: {
      /**
        mutation AddAmonestacion($dias: Int!, $cliente: ID!, $cantidad_deuda: Int!, $solicitud: ID!   ){
          addAmonestacion(dias: $dias, cliente: $cliente, cantidad_deuda: $cantidad_deuda, solicitud: $solicitud){
            id
          }
        }
       */
      type: require('./../schemas/amonestacion'),
      args: {
        dias: { type: GraphQLInt },
        cliente: { type: GraphQLID },
        solicitud: { type: GraphQLID },
        cantidad_deuda: { type: GraphQLInt }
      },
      resolve(parentValue, { dias, cliente, solicitud, cantidad_deuda }, req) {
        return amonestacion.add({ dias, cliente, solicitud, cantidad_deuda, req });
      }
    },
    addTest: {
      type: require('./../schemas/test'),
      args: {
        cliente: { type: GraphQLID },
        tipo_prestamo: { type: GraphQLString },
        monto_credito: { type: GraphQLInt },
        tipo_interes_manejar: { type: GraphQLString },
        plazo: { type: GraphQLString },
        motivo: { type: GraphQLString },
        persona_empleada: { type: GraphQLBoolean },
        personas_dependientes: { type: GraphQLInt },
        personas_economicamente_activas: { type: GraphQLInt },
        promedio_ganancia_mensual: { type: GraphQLInt },
        gasto_arrienda: { type: GraphQLInt },
        gasto_comida: { type: GraphQLInt },
        gasto_transporte: { type: GraphQLInt },
        gasto_servicios: { type: GraphQLInt },
        gasto_deudas: { type: GraphQLInt },
        trabajo_formal: { type: GraphQLBoolean },
        seguros: { type: GraphQLBoolean },
        cuenta_pago_compania: { type: GraphQLBoolean },
        edad: { type: GraphQLInt },
        escolaridad: { type: GraphQLString },
        estado_emocional_1: { type: GraphQLString },
        estado_emocional_2: { type: GraphQLString },
        ordenar: { type: GraphQLInt },
        comprar_nuevo:  { type: GraphQLInt },
        estado_civil:  { type: GraphQLString },
        trabajo:  { type: GraphQLString },
        plaza:  { type: GraphQLString },
        bateria:  { type: GraphQLString },
        math:  { type: GraphQLInt }
      },
      resolve(parentValue, { cliente, tipo_prestamo,monto_credito,tipo_interes_manejar,plazo,motivo, persona_empleada,personas_dependientes,personas_economicamente_activas,
        promedio_ganancia_mensual,gasto_arrienda,gasto_comida,gasto_transporte,gasto_servicios,gasto_deudas,trabajo_formal, seguros, cuenta_pago_compania,
        edad, escolaridad, estado_emocional_1, estado_emocional_2,ordenar,comprar_nuevo,estado_civil,trabajo,plaza,bateria,math }, req) {
        return test.add({cliente, tipo_prestamo,monto_credito,tipo_interes_manejar,plazo,motivo, persona_empleada,personas_dependientes,personas_economicamente_activas,
          promedio_ganancia_mensual,gasto_arrienda,gasto_comida,gasto_transporte,gasto_servicios,gasto_deudas,trabajo_formal, seguros, cuenta_pago_compania,
          edad, escolaridad, estado_emocional_1, estado_emocional_2,ordenar,comprar_nuevo,estado_civil,trabajo,plaza,bateria,math, req });
      }
    },
    addSolicitud: {
      type: require('./../schemas/solicitud'),
      args: {
        cantidad: { type: GraphQLInt },
        cliente: { type: GraphQLID },
        gestor: { type: GraphQLID },
        test: { type: GraphQLID }
      },
      resolve(parentValue, { cantidad, cliente, gestor, test }, req) {
        return solicitud.add({ cantidad, cliente, gestor, test, req });
      }
    },
    aprobarDenegar: {
      type: require('./../schemas/solicitud'),
      args: {
        status: { type: GraphQLString },
        id: { type: GraphQLID }
      },
      resolve(parentValue, { status, id }, req) {
        return solicitud.aprobar_denegar({ status, id, req });
      }
    },
    inhabilitarGestor: {
      type: require('./../schemas/gestor'),
      args: {
        gestor: { type: GraphQLID },
      },
      resolve(parentValue, { gestor }, req) {
        return agestor.inhabilitar({ gestor });
      }
    },
    prediccion: {
      type: require('./../schemas/string_nativo'),
      args: {
        imagen: { type: GraphQLString }
      },
      resolve(parentValue, { imagen }) {
        return analize_img(imagen);
      }
    }
  }
});

module.exports = RootMutation;