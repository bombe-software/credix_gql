const mongoose = require('mongoose');
const graphql = require('graphql');
const { 
  GraphQLObjectType, GraphQLList, GraphQLID, 
  GraphQLNonNull, GraphQLString 
} = graphql;

//Importar models
const Nullname = mongoose.model('nullname');


const RootQuery = new GraphQLObjectType({
  name: 'Consultas',
  fields: () => ({
    nullnames: {
      type: new GraphQLList(require('./nullname')),
      resolve() {
        return Nullname.find({});
      }
    },
    usuario: {
      type: new GraphQLList(require('./usuario')),
      resolve(parentValue, args, req) {
        return req.user;
      }
    }
  })
});

module.exports = RootQuery;