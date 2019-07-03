const { GraphQLObjectType,  GraphQLID, GraphQLString, GraphQLInt } = require('graphql');
const Solicitud = require('mongoose').model('solicitud');

const SolicitudType = new GraphQLObjectType({
  name:  'SolicitudType',
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
    status: { type: GraphQLString },
    fecha: { type: GraphQLString}
  })
});

module.exports = SolicitudType;