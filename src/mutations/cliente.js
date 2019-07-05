   const mongoose = require('mongoose');
   const Cliente = require('mongoose').model('cliente');
    
   //Funcion
   async function add( args,req) {
       const {
           nombre,telefono,domicilio,edad,curp,rfc
       } = args;
       const promedio_ingresos_mensual = args.ingresos;
       const cliente = new Cliente({
            nombre,telefono,domicilio,edad,curp,rfc,promedio_ingresos_mensual
       });
       
       await cliente.save();
   
       return Cliente.findOne({nombre});
   }
   
   //Se exporta la funcion
   module.exports = { add };