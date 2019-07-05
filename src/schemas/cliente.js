const { GraphQLObjectType,  GraphQLID, GraphQLString, GraphQLInt, GraphQLList } = require('graphql');
const Cliente = require('mongoose').model('cliente');

const ClienteType = new GraphQLObjectType({
  name:  'ClienteType',
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString },
    telefono: {type: GraphQLString},
    solicitud: {
      type: new GraphQLList(require('./solicitud')),
      resolve(parentValue) {
        return Cliente.findById(parentValue.id)
          .populate('solicitud')
          .then(cliente => cliente.solicitud);
      }
    },
    domicilio: { type: GraphQLString },
    curp: { type: GraphQLString },
    rfc: { type: GraphQLString }
  })
});

module.exports = ClienteType;