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
        type: String,
        required: [true, 'La p1 es requerida'],
    },
    Pregunta2: {
        type: String,
        required: [false, 'La p2 es requerida'],
    }
    
});
module.exports = mongoose.model('Encuestas', encuestasSchema)