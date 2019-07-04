const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = require('graphql');
const Token = require('mongoose').model('token');

const TokenType = new GraphQLObjectType({
  name: 'TokenType',
  fields: () => ({
    id: { type: GraphQLID },
    institucion: {
      type: require('./institucion'),
      resolve(parentValue) {
        return Token.findById(parentValue.id)
          .populate('institucion')
          .then(token => token.institucion)
      }
    },
    token:  { type: GraphQLString }
  })
});

module.exports = TokenType;