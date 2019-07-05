const { GraphQLObjectType,  GraphQLID, GraphQLString, GraphQLInt } = require('graphql');
const Cliente = require('mongoose').model('cliente');

const ClienteType = new GraphQLObjectType({
  name:  'ClienteType',
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString },
    telefono: {type: GraphQLString},
    amonestaciones: {
        type: require('./amonestacion'),
        resolve(parentValue) {
          return Cliente.findById(parentValue.id).populate('cliente')
            .then(cliente => cliente.amonestacion);
        }
      },
    domicilio: { type: GraphQLString },
    edad: { type: GraphQLInt },
    curp: { type: GraphQLString },
    rfc: { type: GraphQLString },
    promedio_ingresos_mensual: { type: GraphQLInt }
  })
});

module.exports = ClienteType;