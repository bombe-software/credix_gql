const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = require('graphql');
const Test = require('mongoose').model('test');

const TestType = new GraphQLObjectType({
    name: 'TestType',
    fields: () => ({
        id: { type: GraphQLID },
        cliente: {
            type: require('./cliente'),
            resolve(parentValue) {
                return Test.findById(parentValue.id).populate('cliente')
                    .then(test => test.cliente);
            }
        },
        promedio_ingresos_mensuales: { type: GraphQLString }
    })
});

module.exports = TestType;