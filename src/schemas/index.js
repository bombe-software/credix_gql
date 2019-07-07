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
    cliente: {
      type: require('./cliente'),
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { id }) {
        return Cliente.findById(id);
      }
    },
    solicitudes: {
      type: new GraphQLList(require('./solicitud')),
      resolve() {
        return Solicitud.find({});
      }
    },
    solicitud: {
      type: require('./solicitud'),
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) }
      },
      resolve(parentValue, { id }) {
        return Solicitud.findById(id);
      }
    },
    tests: {
      type: new GraphQLList(require('./test')),
      resolve() {
        return Test.find({});
      }
    },
    solicitudes_gestor: {
      type: new GraphQLList(require('./solicitud')),
      resolve(parentValue, values, req) {
        return Solicitud.find({gestor: mongoose.Types.ObjectId(req.user.id)});
      }
    },
    string_nativo: {
      type: new GraphQLList(require('./string_nativo')),
      resolve(parentValue, values, req) {
        return {string: ""};
      }
    }     
  })
});

module.exports = RootQuery;