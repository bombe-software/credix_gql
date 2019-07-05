   const mongoose = require('mongoose');
   const Cliente = require('mongoose').model('cliente');
    
   //Funcion
   async function add( args,req) {
       const {
           nombre,telefono,domicilio,curp,rfc
       } = args;
       const cliente = new Cliente({
            nombre,telefono,domicilio,curp,rfc
       });
       
       await cliente.save();
   
       return Cliente.findOne({nombre});
   }
   
   //Se exporta la funcion
   module.exports = { add };