const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = require('graphql');
const Amonestacion = require('mongoose').model('amonestacion');

const AmonestacionType = new GraphQLObjectType({
  name: 'AmonestacionType',
  fields: () => ({
    id: { type: GraphQLID },
    dias: { type: GraphQLInt },
    cantidad_deuda: { type: GraphQLInt },
    cliente: {
      type: require('./cliente'),
      resolve(parentValue) {
        return Amonestacion.findById(parentValue.id).populate('cliente')
          .then(amonestacion => amonestacion.cliente);
      }
    },
    solicitud: {
      type: require('./solicitud'),
      resolve(parentValue) {
        return Amonestacion.findById(parentValue.id).populate('solicitud')
          .then(amonestacion => amonestacion.solicitud);
      }
    }
  })
});

module.exports = AmonestacionType;