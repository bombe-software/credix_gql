//Configuracion de GraphQL
const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;

//Funciones add
const nullname = require('./nullname');
const usuario = require('./usuario');
const tokens = require('./token');

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
    },
    logout: {
      type: require('./../schemas/usuario'),
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      }
    },
    registro: {
      type: require('./../schemas/usuario'),
      args: {
        email: { type: GraphQLString },
        nombre: { type: GraphQLString },
        nombre_usuario:  { type: GraphQLString },
        password:  { type: GraphQLString },
        sexo:  { type: GraphQLString },
        token: { type: GraphQLString }
      },
      resolve(parentValue, { email, nombre, nombre_usuario, password, sexo, token }, req) {
        return usuario.signup({ email, nombre, nombre_usuario, password, sexo, token, req });
      }
    },
      token: {
        type: require('./../schemas/token'),
        args: {
          institucion: { type: GraphQLID },
          token: { type: GraphQLString }
        },
        resolve(parentValue, { institucion,token }, req) {
          return tokens.generateToken({ institucion, token, req });
      }
    }
  }
});

module.exports = RootMutation;