const api = require('./deploy').api;
const ws = require('./deploy').ws;
const status = require('./deploy').status;
const MONGO_URI = require('./deploy').MONGO_URI;

//Librerias de express
const express = require('express');
const bodyParser = require('body-parser');
const createServer = require('http').createServer;
const app = express();
const port = process.env.PORT || 3000;

//Librerias de la base de datos
const mongoose = require('mongoose');
const models = require('./models');

//Librerias de autenticacion
const cors = require('cors');

//Librerias de graphql
const expressGraphQL = require('express-graphql');
const SubscriptionServer = require('subscriptions-transport-ws').SubscriptionServer;
const execute = require('graphql').execute;
const subscribe = require('graphql').subscribe;
const PubSub = require('graphql-subscriptions').PubSub;

//Importar schemas
const schema = require('./src');
mongoose.Promise = require('bluebird');
mongoose.connect(MONGO_URI).catch(err => console.error(err));

const corsOptions = {
  origin: web,
  credentials: true,
}
app.use(cors(corsOptions));


//Integracion de graphql
app.use('/graphql', bodyParser.json(),  
expressGraphQL({
  schema,
  graphiql: !status
}));


//Configuracion 
const server = createServer(app);
server.listen(port, () => {
  new SubscriptionServer({
    execute,
    subscribe,
    schema: schema,
  }, {
    server: server,
    path: '/subscriptions',
  });
  console.log(`${api}`); 
  console.log(`${ws}/subscriptions`); 
});