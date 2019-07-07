const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const Solicitud = require('mongoose').model('solicitud');

const SolicitudType = new GraphQLObjectType({
  name: 'SolicitudType',
  fields: () => ({
    id: { type: GraphQLID },
    cantidad: { type: GraphQLInt },
    cliente: {
      type: require('./cliente'),
      resolve(parentValue) {
        return Solicitud.findById(parentValue.id).populate('solicitud')
          .then(solicitud => solicitud.cliente);
      }
    },
    gestor: {
      type: require('./gestor'),
      resolve(parentValue) {
        return Solicitud.findById(parentValue.id).populate('gestor')
          .then(solicitud => solicitud.gestor);
      }
    },
    test: {
      type: require('./test'),
      resolve(parentValue) {
        return Solicitud.findById(parentValue.id).populate('test')
          .then(solicitud => solicitud.test);
      }
    },
    status: { type: GraphQLString },
    fecha: { type: GraphQLString }
  })
});

module.exports = SolicitudType;