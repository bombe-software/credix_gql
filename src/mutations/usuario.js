//Librerias y configuraciones requeridas
const passport = require('passport');
const User = require('mongoose').model('usuario');
const Institucion = require('mongoose').model('institucion');
const Gestor = require('mongoose').model('gestor');
const Token = require('mongoose').model('token')

//Funcion
async function login({ email, password, req }) {
  //Area del resolver
  return new Promise((resolve, reject) => {
    passport.authenticate('local', (err, user) => {
      if (!user) { reject('Password o email incorrecto.') }

      req.login(user, () => resolve(user));
    })({ body: { email, password } });
  });
}
async function signup(args) {
  const {
    email, nombre, nombre_usuario,
    password, sexo, token
  } = args;
  let tipo_usuario;
  let institucionID;
  //Area de registro
  if (token) {
    institucionID = await Token.findOneAndDelete({
      "token": token
    })
    if (!institucionID) throw new Error("Token invalido");
    tipo_usuario = "Gestor"
  } else tipo_usuario = "Institucion"

  const usuario = new User({
    email, nombre, nombre_usuario,
    password, sexo, tipo_usuario,
    status: 'Activo'
  });
  usuario.save(function (err, usu) { console.log(err); });
  const usuarioId = usuario._id;

  if (token) {
    const gestor = new Gestor({
      usuario: usuarioId
    })
    const gestorS = await gestor.save();
    await Institucion.findByIdAndUpdate(institucionID.institucion,
      { $push: { "gestores": gestorS._id } }, { new: true });
  }
  else {
    const institucion = new Institucion({
      usuario: usuarioId
    });
    institucion.save();
  }
  //Retorno
  return User.findOne({ email });
}

//Se exporta la funcion
module.exports = { login, signup };