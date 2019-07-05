const mongoose = require('mongoose');
const Token = require('mongoose').model('token');
const Institucion = require('mongoose').model('institucion');

//Funcion
async function generateToken(args, req) {
   const {
      institucion, token
   } = args;

   const result = await Institucion.findOne({
      "usuario": institucion
   })
   const institucionID = result._id;
   const tokenG = new Token({
      institucion: institucionID, token
   });
   await tokenG.save();

   return Token.findOne({});
}

//Se exporta la funcion
module.exports = { generateToken };