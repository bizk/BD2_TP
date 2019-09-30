
//Here we create the connection with the database running on MongoDB
connection = new Mongo();
db = connection.getDB("test_11");


//fdc: stands for fecha de compra
var inversiones_test = [
    {
        "tipo": "Accion",
        "fdc": new Date(2013,4,16,0,0),
        "cantidad": 57,
        "inversionOriginal": NumberDecimal("2364.50") 
    },
    {
        "tipo": "Bono",
        "fdc": new Date(2019,4,20,0,0),
        "cantidad": 3534,
        "inversionOriginal": NumberDecimal("12423.14") 
    },
    {
        "tipo": "Letra de tesoreria",
        "fdc": new Date(2009,1,15,0,0),
        "cantidad": 2542,
        "inversionOriginal": NumberDecimal("512424.23") 
    },
    {
        "tipo": "Accion",
        "fdc": new Date(2014,5,1,0,0),
        "cantidad": 17,
        "inversionOriginal": NumberDecimal("23.14") 
    },
    {
        "tipo": "Bono",
        "fdc": new Date(2012,6,3,0,0),
        "cantidad": 46,
        "inversionOriginal": NumberDecimal("499.00") 
    },
    {
        "tipo": "Accion",
        "fdc": new Date(2010,6,16,0,0),
        "cantidad": 11,
        "inversionOriginal": NumberDecimal("230.76") 
    },
    {
        "tipo": "Letra de tesoreria",
        "fdc": new Date(2014,3,17,0,0),
        "cantidad": 49,
        "inversionOriginal": NumberDecimal("1423.12") 
    },
]
 db.inversiones.insert(inversiones_test);
db.getCollectionNames();
db.inversiones.find();
db.inversiones.find().forEach(printjson);
db.inversiones.find({inversionOriginal: NumberDecimal("41234.424")})
db.inversiones.find({"tipo": "Bono"}).forEach(printjson);
db.inversiones.find({"tipo": "Accion", "cantidad": {$lt:50}}).forEach(printjson);

var asesores = [
        {
            "Nombre": "Jhon cruz",
            "Factores de mercado": ["inseguridad","muchas ventas","bajas abruptas"],
            "Recomendacion": "vender bonos", 
            "Actibo": "Bonos"
        },
        {
            "Nombre": "Martin juan ramires",
            "Factores de mercado": ["inseguridad","posibles subas"],
            "Recomendacion": "Comprar moderadamene", 
            "Activo": "letras",
            "Accion": [
                {
                    "tipo": "Accion",
                    "fdc": new Date(2010,6,16,0,0),
                    "cantidad": 11,
                    "inversionOriginal": NumberDecimal("230.76") 
                }
            ]
        },
        {
            "Nombre": "Walter White",
            "Factores de mercado": ["97% de pureza en las predicciones"],
            "Recomendacion": "Comprar acciones", 
            "Activo": "Acciones"
        }
    ]
db.asesores.insert(asesores)
db.asesores.find().forEach(printjson)