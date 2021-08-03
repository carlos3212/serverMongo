const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;



let encuestasSchema = new Schema({
    cedulae: {
        type: Number,
        required: [true, 'La cedula es requerida'],
    },
    cedulas: {
        type: Number,
        required: [true, 'La cedula es requerida'],
    },
    provincia: {
        type: String,
        required: [true, 'La provincia es requerida'],
        
    },
    ciudad: {
        type: String,
        required: [true, 'La ciudad es requerida'],
    },
    parroquia: {
        type: String,
        required: [true, 'La parroquia es requerida'],
    },
    fecha: {
        type: String,
        required: [true, 'La fecha es requerida'],
    },
    pregunta1: {
        type: Number,
        required: [true, 'La p1 es requerida'],
    },
    pregunta2: {
        type: Number,
        required: [false, 'La p2 es requerida'],
    },
    pregunta3: {
        type: Number,
        required: [false, 'La p3 es requerida'],
    },
    pregunta4: {
        type: Number,
        required: [false, 'La p4 es requerida'],
    },
    pregunta5: {
        type: Number,
        required: [false, 'La p5 es requerida'],
    },
    pregunta6: {
        type: Number,
        required: [false, 'La p6 es requerida'],
    },
    pregunta7: {
        type: Number,
        required: [false, 'La p7 es requerida'],
    },
    pregunta8: {
        type: Number,
        required: [false, 'La p8 es requerida'],
    },
    pregunta9: {
        type: Number,
        required: [false, 'La p9 es requerida'],
    },
    pregunta10: {
        type: Number,
        required: [false, 'La p10 es requerida'],
    },
    pregunta11: {
        type: String,
        required: [false, 'La p11 es requerida'],
    },
    pregunta12: {
        type: String,
        required: [false, 'La p12 es requerida'],
    },
    pregunta13: {
        type: String,
        required: [false, 'La p13 es requerida'],
    },
    latitud: {
        type: Number,
        required: [false, ' requerida'],
    },
    longitud: {
        type: Number,
        required: [false, ' requerida'],
    }

    
});
module.exports = mongoose.model('Encuestas', encuestasSchema)