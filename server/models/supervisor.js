const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;



let supervisorSchema = new Schema({
    cedulas: {
        type: Number,
        required: [true, 'La cedula es requerida'],
    },
    cedulae: {
        type: Number,
        required: [true, 'La cedula es requerida'],
    },
    puntualidad: {
        type: Number,
        required: [true, 'La puntualidad es requerida'],
        
    },
    responsabilidad: {
        type: Number,
        required: [true, 'La responsabilidad es requerida'],
    },
    comentario: {
        type: String,
        required: false, 
    },
    fecha: {
        type: String,
        required: [true, 'La fecha es requerida'],
    }
    
    
});
module.exports = mongoose.model('Supervisor', supervisorSchema)