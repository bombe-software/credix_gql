const mongoose = require('mongoose');
const graphql = require('graphql');
const { 
  GraphQLObjectType,  GraphQLString,  GraphQLID
} = graphql;


const NullnameType = new GraphQLObjectType({
  name:  'NullnameType',
  fields: () => ({
    id: { type: GraphQLID },
    nombre: { type: GraphQLString }
  })
});

module.exports = NullnameType;