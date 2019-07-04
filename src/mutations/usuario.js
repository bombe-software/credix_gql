//Librerias y configuraciones requeridas
const passport = require('passport');
const User = require('mongoose').model('usuario');

//Funcion
function login({ email, password, req }) {
  //Area del resolver
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user) => {
      if (!user) { reject('Password o email incorrecto.') }

      req.login(user, () => resolve(user));
    })({ body: { email, password } });
  });
}
function signup(args) {
  console.log("Entra");
  console.log(args);
  const {
    email, nombre, nombre_usuario,
    password, sexo, token
  } = args;
  //Area de registro
  const usuario = new User({
    email, nombre, nombre_usuario,
    password, sexo
  });
  usuario.save(function (err) {
    console.log(err);
  });

  //Retorno
  return User.findOne({ email });
}

//Se exporta la funcion
module.exports = { login, signup };