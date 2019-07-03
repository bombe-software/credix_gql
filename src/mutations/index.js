//Configuracion de GraphQL
const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

//Funciones add
const nullname = require('./nullname');
const usuario = require('./usuario');

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
    }
  }
});

module.exports = RootMutation;