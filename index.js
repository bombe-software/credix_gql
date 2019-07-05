const { api, ws, web, status, MONGO_URI } = require('./config/variables');
//Librerias openCV
//const cv = require('opencv4nodejs');
//const wCamp = new cv.VideoCapture(0);

//Librerias de express
const express = require('express');
const bodyParser = require('body-parser');
const createServer = require('http').createServer;
const app = express();
const server = createServer(app);
//const io = require('socket.io')(server);

const port = process.env.PORT || 9000;

//Librerias de la base de datos
const mongoose = require('mongoose');
const models = require('./models');

//Librerias de autenticacion
const cors = require('cors');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const configPassport = require('./config_passport');

//Librerias de graphql
const expressGraphQL = require('express-graphql');
const SubscriptionServer = require('subscriptions-transport-ws').SubscriptionServer;
const execute = require('graphql').execute;
const subscribe = require('graphql').subscribe;
const PubSub = require('graphql-subscriptions').PubSub;

//Importar schemas
const schema = require('./src');
mongoose.Promise = require('bluebird');
mongoose.connect(MONGO_URI, { useNewUrlParser: true }).catch(err => console.error(err));

const corsOptions = {
  origin: web,
  credentials: true,
}
app.use(cors(corsOptions));

//Configuracion de las sesiones e integracion con mongodb
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'jaiba',
  store: new MongoStore({
    url: MONGO_URI,
    autoReconnect: true
  })
}));
app.use(passport.initialize());
app.use(passport.session());

// app.get('/webcam', (req, res) => {
//   res.sendFile(path.join(__dirname, './index.html'))
// });
/*
setInterval(() => {
  const frame = wCamp.read();

  const image = cv.imencode('.jpg',frame).toString('base64');
  
  io.emit('image', image);
}, 50)
*/


//Integracion de graphql
app.use('/graphql', bodyParser.json(),
  expressGraphQL({
    schema,
    graphiql: !status
  }));

//Rutas express
app.get('/registro', require('./routes/registro').registro);
app.get(/img/, require("./routes/img").send);

//Configuracion 

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