const { GraphQLObjectType,  GraphQLID, GraphQLString } = require('graphql');
const Usuario = require('mongoose').model('usuario');


const NullnameType = new GraphQLObjectType({
  name:  'NullnameType',
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString }
  })
});

module.exports = NullnameType;