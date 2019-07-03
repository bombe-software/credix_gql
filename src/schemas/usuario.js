const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');
const Usuario = require('mongoose').model('usuario');

const UsuarioType = new GraphQLObjectType({
  name: 'UsuarioType',
  fields: () => ({
    id: { type: GraphQLID },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    nombre_usuario: { type: GraphQLString },
    nombre: { type: GraphQLString },
    tipo_usuario:  { type: GraphQLString }
  })
});

module.exports = UsuarioType;