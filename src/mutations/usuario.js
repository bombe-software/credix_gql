//Librerias y configuraciones requeridas
const passport = require('passport');

//Funcion
function login({ email, password, req }) {
  //Area del resolver
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user) => {
      if (!user) {reject('Password o email incorrecto.') }
      req.login(user, () => resolve(user));
    })({ body: { email, password } });
  });
}
function signup({ args, req }) {
  const {
    nombre, sexp,
    email, password
  } = args


}

//Se exporta la funcion
module.exports = { login };