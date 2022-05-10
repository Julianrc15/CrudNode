import mongoose from 'mongoose';

//clase para definir el esquema de datos de mi Modelo
const Schema = mongoose.Schema

//esquema de datos 
const Habitacion = new Schema({
    nombre:{
        type: String,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    numeroPersonas:{
        type:Number,
        required: true
    },
    foto:{
        type: String,
        required: true
    }
})

//crear modelo de datos

export const modeloHabitacion=mongoose.model('habitaciones', Habitacion);