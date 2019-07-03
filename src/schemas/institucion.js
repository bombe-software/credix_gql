const { GraphQLObjectType, GraphQLID, GraphQLList } = require('graphql');
const Institucion = require('mongoose').model('institucion');

const InstitucionType = new GraphQLObjectType({
  name: 'InstitucionType',
  fields: () => ({
    id: { type: GraphQLID },
    usuario: {
      type: require('./usuario'),
      resolve(parentValue) {
        return Institucion.findById(parentValue.id)
          .populate('usuario')
          .then(institucion => institucion.usuario)
      }
    },
    gestores: {
      type: new GraphQLList(require('./gestor')),
      resolve(parentValue) {
        return Institucion.findById(parentValue.id)
          .populate('gestores')
          .then(institucion => institucion.gestores);
      }
    }
  })
});

module.exports = InstitucionType;