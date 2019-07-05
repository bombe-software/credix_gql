const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType, GraphQLList, GraphQLID,
  GraphQLNonNull, GraphQLString
} = graphql;

//Importar models
const Nullname = mongoose.model('nullname');
const Usuario = mongoose.model('usuario');
const Gestor = mongoose.model('gestor');
const Institucion = mongoose.model('institucion');
const Cliente = mongoose.model('cliente');
const Solicitud = mongoose.model('solicitud');
const Test = mongoose.model('test');

const RootQuery = new GraphQLObjectType({
  name: 'Consultas',
  fields: () => ({
    gestores: {
      type: new GraphQLList(require('./gestor')),
      resolve() {
        return Gestor.find({});
      }
    },
    gestor: {
      type: require('./gestor'),
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { id }) {
        return Gestor.findById(id);
      }
    },
    instituciones: {
      type: new GraphQLList(require('./institucion')),
      resolve() {
        return Institucion.find({});
      }
    },
    institucion: {
      type: require('./institucion'),
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { id }) {
        return Institucion.findById(id);
      }
    },
    usuario: {
      type: require('./usuario'),
      resolve(parentValue, args, req) {
        return req.user;
      }
    },
    token: {
      type: require('./token'),
      resolve(parentValue, args, req) {
        return req.user;
      }
    },
    clientes: {
      type: new GraphQLList(require('./cliente')),
      resolve() {
        return Cliente.find({});
      }
    },
    solicitudes: {
      type: new GraphQLList(require('./solicitud')),
      resolve() {
        return Solicitud.find({});
      }
    },
    tests: {
      type: new GraphQLList(require('./test')),
      resolve() {
        return Test.find({});
      }
    }
  })
});

module.exports = RootQuery;