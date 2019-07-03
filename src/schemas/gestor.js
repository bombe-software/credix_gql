const { GraphQLObjectType, GraphQLID, GraphQLList } = require('graphql');
const Gestor = require('mongoose').model('gestor');

const GestorType = new GraphQLObjectType({
  name: 'GestorType',
  fields: () => ({
    id: { type: GraphQLID },
    usuario: {
      type: require('./usuario'),
      resolve(parentValue) {
        return Gestor.findById(parentValue.id)
          .populate('usuario')
          .then(gestor => gestor.usuario)
      }
    },
    prestamos: {
      type: new GraphQLList(require('./gestor')),
      resolve(parentValue) {
        return Gestor.findById(parentValue.id)
          .populate('prestamos')
          .then(gestor => gestor.prestamos);
      }
    }
  })
});

module.exports = GestorType;