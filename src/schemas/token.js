const { GraphQLObjectType, GraphQLID, GraphQLList } = require('graphql');
const Token = require('mongoose').model('token');

const TokenType = new GraphQLObjectType({
  name: 'TokenType',
  fields: () => ({
    id: { type: GraphQLID },
    gestor: {
      type: require('./gestor'),
      resolve(parentValue) {
        return Token.findById(parentValue.id)
          .populate('gestor')
          .then(token => token.gestor)
      }
    },
    prestamos:  { type: GraphQLString }
  })
});

module.exports = TokenType;