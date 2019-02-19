//Configuracion de GraphQL
const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLInt } = graphql;

//Funciones add
const nullname = require('./nullname');

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
    }
  }
});

module.exports = RootMutation;