//To execute this run the following command: mongo < Practica01.js
connection = new Mongo();
db = connection.getDB("mongo_practica_3");


var libros = [
    {
        titulo:"Rayuela",
        ISNB:8437624746,
        idioma:"español",
        autor:"Julio Cortasar",
        pags: 720,
        rating: NumberDecimal("4.25"),
    },
    {
        titulo:"1984",
        ISNB:9780451524935,
        idioma:"ingles",
        autor:"George Orwell",
        pags: 326,
        rating: NumberDecimal("4.17"),
    },
    {
        titulo:"El camino del artista",
        ISNB:9788403052970,
        idioma:"español",
        autor:"Julia cameron",
        pags: 316,
        rating: NumberDecimal("3.9"),
    },
    {
        titulo:"I, Robot",
        ISNB: 0553803700,
        idioma:"ingles",
        autor:"Isaac Asimov",
        pags: 224,
        rating: NumberDecimal("4.19"),
    },
    {
        titulo:"Emsayo sobre la ceguera",
        ISNB:9789707311152,
        idioma:"español",
        autor:"Jose saramago",
        pags: 329,
        rating: NumberDecimal("4.11"),
    },
    {
        titulo:"Gone girl",
        ISNB:978673116381,
        idioma:"ingles",
        autor:"Gillian Flynn",
        pags: 415,
        rating: NumberDecimal("4.06"),
    },
    {
        titulo:"Sapiens: A brief history of humankind",
        ISNB:9791026902201,
        idioma:"ingles",
        autor:"Yuval NOah Harari",
        pags: 443,
        rating: NumberDecimal("4.45"),
    },
    {
        titulo:"Escrito en el agua",
        ISNB:9563602749,
        idioma:"español",
        autor:"Paula Hawkins",
        pags: 560,
        rating: NumberDecimal("3.55"),
    },
];

var duenos = [
    {
        username: "paotoss",
        nacionalidad: "Italiano",
        fdn: new Date(04,01,1983,0,0),
        fdr: new Date(15,03,2014,0,0),
        recomendados: [8437624746,9563602749,9780451524935],
    },
    {
        username: "quijadajo",
        nacionalidad: "Argentino",
        fdn: new Date(07,11,1981,0,0),
        fdr: new Date(02,04,2011,0,0),
        recomendados: [0553803700],
    },
    {
        username: "paotjoeygsoss",
        nacionalidad: "Venezolano",
        fdn: new Date(25,06,1987,0,0),
        fdr: new Date(19,09,2011,0,0),
        recomendados: [9789707311152,978673116381,8437624746],
    },
    {
        username: "alegaliano",
        nacionalidad: "Argentino",
        fdn: new Date(27,10,1995,0,0),
        fdr: new Date(14,02,2015,0,0),
        recomendados: [9780451524935,9788403052970],
    },
    {
        username: "darioc",
        nacionalidad: "Argentino",
        fdn: new Date(15,10,1984,0,0),
        fdr: new Date(07,05,2013,0,0),
       recomendados: [9791026902201],
    },
];

db.libros.insert(libros);
db.libros.ensureINdex({ISNB:1});

//db.libros.find();

db.autores.insert(duenos);
//db.autores.find();

db.autores.find({nacionalidad: "Argentino"}).count();
//db.autores.find({});

//var recomiendan1984 = [];
/*for (i = 0; i < autores.length; i++) {
    db.au
}*/