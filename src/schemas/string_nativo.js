const { GraphQLObjectType,  GraphQLID, GraphQLString } = require('graphql');
const Usuario = require('mongoose').model('usuario');


const StringnativoType = new GraphQLObjectType({
  name:  'StringnativoType',
  fields: () => ({
    string: { type: GraphQLString }
  })
});

module.exports = StringnativoType;