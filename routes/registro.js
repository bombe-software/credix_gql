//Llamada de modelos
const mongoose = require('mongoose');
const async = require('async');
const Universidad = mongoose.model('universidad');
const Sede = mongoose.model('sede');
const Carrera = mongoose.model('carrera');
const Materia = mongoose.model('materia');
const Categoria = mongoose.model('categoria');
const CategoriaMateria = mongoose.model('categoria_materia');

async function carga_universidades(req, res) {
    let bd_universidades = [];
    //Array de Universidades
    const universidades = [
        {
            nombre: "Instituto Politecnico Nacional",
            abreviatura: "IPN",
            logo: "IPN.jpg"
        },
        {
            nombre: "Universidad Autonoma de Mexico",
            abreviatura: "UNAM",
            logo: "UNAM.jpg"
        }
    ];
    await universidades.map((item, index) => {
        const universidad = new Universidad(item);
        bd_universidades.push(universidad);
        universidad.save()
            .then(item => {
                //console.log(item);
            });
    });
    return bd_universidades;
}

async function carga_categorias(req, res) {
    //Array de Categorias
    let bd_categorias = [];
    const categorias = [
        { nombre: 'Ciencias Fisico Matematicas' },
        { nombre: 'Ciencias Medico Biologicas' },
        { nombre: 'Ciencias Sociales y Administrativas' },
        { nombre: 'Humanidades y Artes' },
        { nombre: 'Interdisciplinaria' }
    ];
    await categorias.map((item, index) => {
        const categoria = new Categoria(item);
        bd_categorias.push(categoria);
        categoria.save()
            .then(item => {
                //console.log(item);
            });
    });
    return bd_categorias;
}

async function carga_categoria_materias(req, res) {
    let bd_categorias_materias = [];
    //Array de Categorias
    const categoria_materias = [
        /*0*/{ nombre: 'Matemáticas' },
        /*1*/{ nombre: 'Física' },
        /*2*/{ nombre: 'Química' },
        /*3*/{ nombre: 'Humanidades y Artes' },
        /*4*/{ nombre: 'Biología' },
        /*5*/{ nombre: 'Electrónica' },
        /*6*/{ nombre: 'Programación' },
        /*7*/{ nombre: 'Herramientas Computacionales' },
        /*8*/{ nombre: 'Administración' },
        /*9*/{ nombre: 'Optativa o Electiva' },
       /*10*/{ nombre: 'Manufactura' },
       /*11*/{ nombre: 'Opción de Titulación' },
       /*12*/{ nombre: 'Geografía' },
       /*13*/{ nombre: 'Arquitectura y Construcción' }
    ];
    await categoria_materias.map((item, index) => {
        const categoria_materia = new CategoriaMateria(item);
        bd_categorias_materias.push(categoria_materia);
        categoria_materia.save()
            .then(item => {
                //console.log(item);
            });
    });
    return bd_categorias_materias;
}

async function carga_sedes(req, res, universidades, categorias) {
    const bd_sedes = [];
    const sedes = [
        //Escuelas del IPN
        //Area Fisico Matematica
        //Yosafat (en niveles)
        {
            nombre: 'Escuela Superior de Computo',
            abreviatura: 'ESCOM',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '19.50465390562498,-99.14685180000004',
            universidad: universidades[0]._id
        },
        //Vicroni
        {
            nombre: 'Unidad Profesional Interdisciplinaria en Ingenieria y Tecnologias Avanzadas',
            abreviatura: 'UPIITA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '19.511371305627065,-99.1262256',
            universidad: universidades[0]._id
        },
        //MedinaVilla
        {
            nombre: 'Escuela Superior de Ingenieria y Arquitectura Unidad Ticoman',
            abreviatura: 'ESIA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '19.50728540562578,-99.131257',
            universidad: universidades[0]._id
        },
        //Yosafat
        {
            nombre: 'Escuela Superior de Fisico Matemáticas',
            abreviatura: 'ESFM',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '19.50260770562434,-99.13439719999997',
            universidad: universidades[0]._id
        },
        //Vicroni
        {
            nombre: 'Escuela Superior de Ingenieria y Arquitectura Unidad Zacatenco',
            abreviatura: 'ESIA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '19.504723405624986,-99.13701470000001',
            universidad: universidades[0]._id
        },
        //MedinaVilla
        {
            nombre: 'Escuela Superior de Ingenieria Mecanica y Electrica Unidad Azcapotzalco',
            abreviatura: 'ESIME',
            logo: '19.48931240562017,-99.17462509999996',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        //Yosafat (en niveles)
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Biotecnologia',
            abreviatura: 'UPIBI',
            logo: '19.51532860562829,-99.12724209999999',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        //Vicroni
        {
            nombre: 'Escuela Superior de Ingenieria Mecanica y Electrica Unidad Culhuacan',
            abreviatura: 'ESIME',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '19.328780805570155,-99.11196859999995',
            universidad: universidades[0]._id
        },
        //MedinaVilla
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Ingenieria Campus Zacatecas',
            abreviatura: 'UPIIZ',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '22.783952906670223,-102.61572990000002',
            universidad: universidades[0]._id
        },       
        //Yosafat
        {
            nombre: 'Escuela Superior de Ingenieria Mecánica y Electrica Unidad Ticoman',
            abreviatura: 'ESIME',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '19.509246905626387,-99.13370740000005',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Ingenieria y Ciencias Sociales y Administrativas',
            abreviatura: 'UPIICSA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '19.395988705591098,-99.09190190000004',
            universidad: universidades[0]._id
        },
         //MedinaVilla
        {
            nombre: 'Escuela Superior de Ingenieria Mecanica y Electrica Unidad Zacatenco',
            abreviatura: 'ESIME',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '-99.09190190000004,-99.1349563',
            universidad: universidades[0]._id
        },
        //Yosafat
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Ingenieria Campus Guanajuato',
            abreviatura: 'UPIIG',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '21.015105437953512,-101.50366896484158',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingenieria Quimica e Industrias Extractivas',
            abreviatura: 'ESIQIE',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '19.501654505624032,-99.14012119999995',
            universidad: universidades[0]._id
        },
        //MedinaVilla
        {
            nombre: 'Escuela Superior de Ingenieria Textil',
            abreviatura: 'ESIT',
            logo: '19.5002899056236,-99.13286689999995',
            categoria: categorias[0]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Ingenieria y Arquitectura Unidad Tecamachalco',
            abreviatura: 'ESIA',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '19.43020700560175,-99.23244269999998',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Unidad Profesional Interdisciplinaria de Ingenieria Campus Hidalgo',
            abreviatura: 'UPIIH',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '20.112568591265227,-98.84542429603198',
            universidad: universidades[0]._id
        },
        //Area Medico Biologicas
        //MedinaVilla*
        {
            nombre: 'Centro Interdisciplinario de Ciencias de la Salud Unidad Milpa Alta',
            abreviatura: 'CICS',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '19.079910805492823,-98.95910960000003',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Nacional de Medicina y Homeopatia',
            abreviatura: 'ENMyH',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '19.512490305627416,-99.13802309999994',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Centro Interdisciplinario de Ciencias de la Salud Unidad Santo Tomas',
            abreviatura: 'CICS',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '19.45484860560944,-99.16580420000003',
            universidad: universidades[0]._id
        },
        //MedinaVilla*
        {
            nombre: 'Escuela Superior de Enfermeria y Obstetricia',
            abreviatura: 'ESEO',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '19.45348800560902,-99.17051850000001',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Nacional de Ciencias Biologicas',
            abreviatura: 'ENCB',
            logo: '19.453235305608917,-99.17245559999998',
            categoria: categorias[1]._id,
            posicion: '',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Medicina',
            abreviatura: 'ESM',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '19.451037005608264,-99.16867300000001',
            universidad: universidades[0]._id
        },
        //�rea Sociales y Administrativas
        //MedinaVilla
        {
            nombre: 'Escuela Superior de Comercio y Administracion Unidad Santo Tomas',
            abreviatura: 'ESCA',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '19.453807305609107,-99.16799120000002',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Economia',
            abreviatura: 'ESE',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '19.454496305609315,-99.16841499999998',
            universidad: universidades[0]._id
        },
        {
            nombre: 'Escuela Superior de Comercio y Administracion Unidad Tepepan',
            abreviatura: 'ESCA',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '19.284405005556323,-99.14947069999994',
            universidad: universidades[0]._id
        },
        //MedinaVilla
        {
            nombre: 'Escuela Superior de Turismo',
            abreviatura: 'EST',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '19.51492520562818,-99.1407534',
            universidad: universidades[0]._id
        },
        //Escuelas de la UNAM
        //Facultades
        {
            nombre: 'Facultad de Arquitectura',
            abreviatura: 'Facultad de Arquitectura',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '19.325704605569193,-99.1822133',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Artes y Diseño',
            abreviatura: 'FAD',
            logo: '',
            categoria: categorias[3]._id,
            posicion: '19.251975905546253,-99.11826739999998',
            universidad: universidades[1]._id
        }, 
        //MedinaVilla
        {
            nombre: 'Facultad de Ciencias',
            abreviatura: 'Facultad de Ciencias',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '19.3240451055687,-99.18017870000006',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Ciencias Politicas y Sociales',
            abreviatura: 'FCPyS',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '19.318696905567023,-99.17812029999999',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Contaduria y Administracion',
            abreviatura: 'FCA',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '19.32418190556871,-99.184575',
            universidad: universidades[1]._id
        },
        //MedinaVilla
        {
            nombre: 'Facultad de Derecho',
            abreviatura: 'Facultad de Derecho',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '19.334463905571937,-99.1854621',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Economia',
            abreviatura: 'Facultad de Economia',
            logo: '',
            categoria: categorias[2]._id,
            posicion: '19.334670005572026,-99.18419439999997',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Estudios Superiores Acatlan',
            abreviatura: 'FES Acatlan',
            logo: '',
            categoria: categorias[4]._id,
            posicion: '19.4841199655026,-99.24662879021298',
            universidad: universidades[1]._id
        },
        //MedinaVilla
        {
            nombre: 'Facultad de Estudios Superiores Aragon',
            abreviatura: 'FES Aragon',
            logo: '',
            categoria: categorias[4]._id,
            posicion: '19.476165705616065,-99.04674049999994',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Estudios Superiores Cuautitlan',
            abreviatura: 'FES Cuautitlan',
            logo: '19.690713805683064,-99.18977459999996',
            categoria: categorias[4]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Estudios Superiores Iztacala',
            abreviatura: 'FES Iztacala',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '19.525946005631624,-99.18950099999995',
            universidad: universidades[1]._id
        },
         //MedinaVilla
        {
            nombre: 'Facultad de Estudios Superiores Zaragoza',
            abreviatura: 'FES Zaragoza',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '19.383606799498345,-99.0376316621045',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Filosofia y Letras',
            abreviatura: 'FFyL',
            logo: '',   
            categoria: categorias[3]._id,
            posicion: '19.334008205571795,-99.18683980000003',
            universidad: universidades[1]._id
        },
        //MedinaVilla
        {
            nombre: 'Facultad de Ingenieria',
            abreviatura: 'FI',
            logo: '',
            categoria: categorias[0]._id,
            posicion: '19.33158541415654,-99.18482835952454',
            universidad: universidades[1]._id
        },
        //MedinaVilla
        {
            nombre: 'Facultad de Medicina',
            abreviatura: 'FacMed',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '19.333215105571536,-99.18023119999998',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Medicina Veterinaria y Zootecnia',
            abreviatura: 'FMVZ',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '19.33007440557056,-99.17705690000003',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Musica',
            abreviatura: 'FaM',
            logo: '',
            categoria: categorias[3]._id,
            posicion: '19.353958705578,-99.15371919999995',
            universidad: universidades[1]._id
        },
        //MedinaVilla
        {
            nombre: 'Facultad de Odontologia',
            abreviatura: 'Facultad de Odontologia',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '19.334550605571984,-99.18145470000002',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Psicologia',
            abreviatura: 'Facultad de Psicologia',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '19.334857105572052,-99.18888800000002',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Facultad de Quimica',
            abreviatura: 'Facultad de Quimica',
            logo: '',
            categoria: categorias[4]._id,
            posicion: '19.331933805571147,-99.1812529',
            universidad: universidades[1]._id
        },
        //Escuelas
        //MedinaVilla
        {
            nombre: 'Escuela Nacional de Enfermería y Obstetricia',
            abreviatura: 'ENEO',
            logo: '',
            categoria: categorias[1]._id,
            posicion: '19.291783005558653,-99.15077499999995',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Escuela Nacional de Estudios Superiores Unidad León',
            abreviatura: 'ENES, Leon',
            logo: '',
            categoria: categorias[4]._id,
            posicion: '21.04274540610947,-101.67374610000002',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Escuela Nacional de Estudios Superiores, Unidad Morelia',
            abreviatura: 'ENES, Morelia',
            logo: '-101.67374610000002,-101.2226478288361',
            categoria: categorias[4]._id,
            posicion: '',
            universidad: universidades[1]._id
        },
        //MedinaVilla
        {
            nombre: 'Escuela Nacional de Lenguas, Lingüística y Traducción',
            abreviatura: 'ENALLT',
            logo: '',
            categoria: categorias[3]._id,
            posicion: '19.33164467179076,-99.18335983748149',
            universidad: universidades[1]._id
        },
        {
            nombre: 'Escuela Nacional de Trabajo Social',
            abreviatura: 'ENTS',
            logo: '',
            categoria: categorias[3]._id,
            posicion: '19.32378770556861,-99.1869256',
            universidad: universidades[1]._id
        }
    ];
    await sedes.map((item, index) => {
        const sede = new Sede(item);
        bd_sedes.push(sede);
        sede.save()
            .then(item => {
                //console.log(item);
        });
    });

    Universidad.find({}, function (err, obj) {
        obj.map(universidad =>{
            Sede.find({universidad: universidad._id}, function (err, obj1) {
                obj1.map(sede_i=>{
                    universidad.sedes.push(sede_i._id);
                });
                setTimeout(()=>{
                    universidad.save();
                    console.log('Registros asincronos[0]')
                }, 5000);
            });           
        });
    });

    return bd_sedes;
};

async function main(req, res) {
    //Se encarga de que las funciones se ejecuten en serie
    
    const universidades = await carga_universidades(req, res);
    const categorias =  await carga_categorias(req, res);
    const categoria_materias = await carga_categoria_materias(req, res);
    const sedes = await carga_sedes(req, res, universidades, categorias);
    setTimeout(function(){ require('./vicroni').work(categorias, categoria_materias, sedes); }, 6000);
    setTimeout(function(){ require('./medinavilla').work(categorias, categoria_materias, sedes); }, 6000);
    setTimeout(function(){ require('./yosafat').work(categorias, categoria_materias, sedes); }, 6000);
    console.log('Acabo el proceso sincrono');
}  

exports.registro = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    main(req, res);
    res.end(); 
};