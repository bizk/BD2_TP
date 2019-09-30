//To execute this run the following command: mongo < Practica01.js
connection = new Mongo();
db = connection.getDB("mongo_practica_123246709");


var duenos = [
    {
        username: "paotoss",
        nacionalidad: "Italiano",
        fdn: new Date(04,01,1983,0,0),
        fdr: new Date(15,03,2014,0,0),
        recomendados: [{
                titulo:"Rayuela",
                ISNB:8437624746,
                idioma:"español",
                autor:"Julio Cortasar",
                pags: 720,
                rating: NumberDecimal("4.25"),
            },{
                titulo:"1984",
                ISNB:9780451524935,
                idioma:"ingles",
                autor:"George Orwell",
                pags: 326,
                rating: NumberDecimal("4.17"),
            },{
                titulo:"Escrito en el agua",
                ISNB:9563602749,
                idioma:"español",
                autor:"Paula Hawkins",
                pags: 560,
                rating: NumberDecimal("3.55"),
        }],
    },
    {
        username: "quijadajo",
        nacionalidad: "Argentino",
        fdn: new Date(07,11,1981,0,0),
        fdr: new Date(02,04,2011,0,0),
        recomendados: [    {
            titulo:"I, Robot",
            ISNB: 0553803700,
            idioma:"ingles",
            autor:"Isaac Asimov",
            pags: 224,
            rating: NumberDecimal("4.19"),
        }],
    },
    {
        username: "paotjoeygsoss",
        nacionalidad: "Venezolano",
        fdn: new Date(25,06,1987,0,0),
        fdr: new Date(19,09,2011,0,0),
        recomendados: [    {
            titulo:"Emsayo sobre la ceguera",
            ISNB:9789707311152,
            idioma:"español",
            autor:"Jose saramago",
            pags: 329,
            rating: NumberDecimal("4.11"),
        }, {
            titulo:"Gone girl",
            ISNB:978673116381,
            idioma:"ingles",
            autor:"Gillian Flynn",
            pags: 415,
            rating: NumberDecimal("4.06"),
        }, {
            titulo:"Rayuela",
            ISNB:8437624746,
            idioma:"español",
            autor:"Julio Cortasar",
            pags: 720,
            rating: NumberDecimal("4.25"),
        }],
    },
    {
        username: "alegaliano",
        nacionalidad: "Argentino",
        fdn: new Date(27,10,1995,0,0),
        fdr: new Date(14,02,2015,0,0),
        recomendados: [ {
            titulo:"1984",
            ISNB:9780451524935,
            idioma:"ingles",
            autor:"George Orwell",
            pags: 326,
            rating: NumberDecimal("4.17"),
        },   {
            titulo:"El camino del artista",
            ISNB:9788403052970,
            idioma:"español",
            autor:"Julia cameron",
            pags: 316,
            rating: NumberDecimal("3.9"),
        }],
    },
    {
        username: "darioc",
        nacionalidad: "Argentino",
        fdn: new Date(15,10,1984,0,0),
        fdr: new Date(07,05,2013,0,0),
        recomendados: [{
            titulo:"Sapiens: A brief history of humankind",
            ISNB:9791026902201,
            idioma:"ingles",
            autor:"Yuval NOah Harari",
            pags: 443,
            rating: NumberDecimal("4.45"),
        }, 
        {
            titulo:"1984",
            ISNB:9780451524935,
            idioma:"ingles",
            autor:"George Orwell",
            pags: 326,
            rating: NumberDecimal("4.17"),  
        }],
    },
];

db.libros.insert(libros);
db.libros.ensureIndex({ISNB:1});

//A)
print("#### A ####");
db.autores.insert(duenos);

//B)
print("#### B ####");
db.autores.find().sort({fdr:-1}).forEach(printjson);

//C)
print("#### C ####");
db.autores.find({nacionalidad: "Argentino"}).count();

//D)
print("#### D ####");
db.autores.find({recomendados: {$elemMatch: {titulo:"1984"}}});

//E)
print("#### E ####");
db.autores.find({username:"paotjoeygsoss"});
db.autores.update({username:"paotjoeygsoss"}, {$set:{fdn: new Date(1987,05,02,0,0)}});
db.autores.find({username:"paotjoeygsoss"});

//G)
print("#### G ####");
db.autores.find({recomendados: {$elemMatch: {rating: {$lt: 4}, pags: {$gt: 500}}}});

print("#### H ####");
db.autores.find({recomendados: {$elemMatch: {titulo: {$regex: "^E"}}}});
