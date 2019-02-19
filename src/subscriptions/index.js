//Configuracion de GraphQL
const graphql = require('graphql');
const { GraphQLObjectType } = graphql;
const pubsub = require('./../../config/pubsub').pubsub;

//Tipos de chemas
const NullnameType = require('./../schemas/nullname');


//Contantes de las suscripciones
const {
    PRUEBA
} = require('./constantes');


const { resolver_generico } = require('./resolver_generico');

const RootSubscription = new GraphQLObjectType({
  name: 'Suscripciones',
  fields: {
    //Funciones add
    prueba: {
      type: NullnameType,
      subscribe: () => pubsub.asyncIterator(PRUEBA),
      resolve: (payload, args, context, info) => {
        return resolver_generico(payload, args, context, info, PRUEBA);
      }
    }
  }
});

module.exports = RootSubscription;