//Configuracion de GraphQL
const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;

//Funciones add
const nullname = require('./nullname');
const usuario = require('./usuario');
const tokens = require('./token');
const agestor = require('./gestor');
const cliente = require('./cliente');
const amonestacion = require('./amonestacion');
const test = require('./test');
const solicitud = require('./solicitud');

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
      resolve(parentValue, { nombre,telefono,domicilio,edad,curp,rfc }, req) {
        return cliente.add({ nombre,telefono,domicilio,edad,curp,rfc, req });
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
      resolve(parentValue, { dias,cliente,solicitud,cantidad_deuda }, req) {
        return amonestacion.add({ dias,cliente,solicitud,cantidad_deuda, req });
      }
    },
    addTest: {
      type: require('./../schemas/test'),
      args: {
        promedio_ingresos_mensuales: { type: GraphQLInt },
        cliente: { type: GraphQLID }
      },
      resolve(parentValue, { cliente, promedio_ingresos_mensuales }, req) {
        return test.add({ cliente, promedio_ingresos_mensuales, req });
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
        return solicitud.aprobar_denegar({ status, id,  req });
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
  }
});

module.exports = RootMutation;