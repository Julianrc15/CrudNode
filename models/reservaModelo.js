import mongoose from 'mongoose';

const Schema = mongoose.Schema

const Reserva = new Schema({
    fechaIn:{
        type: Date,
        required: true
    },
    fechaOut:{
        type:Date,
        required: true
    },
    costoReserva:{
        type: Number,
        required: true
    },
    idCliente:{
        type: String,
        required: true
    },
    numeroPersonas:{
        type: Number,
        required: true
    },
    idHabitacion:{
        type:String,
        required:true
    }
})

export const modeloReserva=mongoose.model('reservas', Reserva)