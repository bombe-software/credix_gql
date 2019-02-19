//Llamada de modelos
const mongoose = require('mongoose');
const async = require('async');
const Nullname = mongoose.model('nullname');

async function carga_nullnames(req, res) {
    //Array de Categorias
    let bd_coleccion = [];
    const coleccion = [
        { nombre: 'Nombre 1' },
        { nombre: 'Nombre 2' },
        { nombre: 'Nombre 3' }
    ];
    await coleccion.map((item, index) => {
        const bd_item = new Nullname(item);
        bd_coleccion.push(bd_item);
        bd_item.save()
            .then(item => {
                //console.log(item);
            });
    });
    return bd_coleccion;
}


async function main(req, res) {
    //Se encarga de que las funciones se ejecuten en serie
    
    const nullname = await carga_nullnames(req, res);
    //setTimeout(function(){ require('./vicroni').work(categorias, categoria_materias, sedes); }, 6000);
    
    console.log('Acabó el proceso síncrono');
}  

exports.registro = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    main(req, res);
    res.end(); 
};