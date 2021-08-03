// -----------------------------
// Puerto
//-------------------------------

process.env.PORT = process.env.PORT || 3000;

// -----------------------------
// Entorno
//-------------------------------

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// -----------------------------
// Base de datos
//-------------------------------

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb+srv://cocoa:Programar.1234@cluster0.azijh.mongodb.net/tienda'
} else {
    urlDB = 'mongodb+srv://cocoa:Programar.1234@cluster0.azijh.mongodb.net/tienda'

}

process.env.URLDB = urlDB;

// -----------------------------
// Vencimiento tocken
//-------------------------------

process.env.CADUCIDAD_TOKEN ='48';
// -----------------------------
// SEED de autenticación
//-------------------------------
process.env.SEED_AUTENTICACION = process.env.SEED_AUTENTICACION ||  'este-es-el-seed-desarrollo';