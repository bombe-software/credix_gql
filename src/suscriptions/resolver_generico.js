//Funcion
function resolver_generico(payload, args, context, info, constante) {
    console.log('Suscrito: ' + constante);
    return payload;
}

//Se exporta la funcion
module.exports = { resolver_generico };