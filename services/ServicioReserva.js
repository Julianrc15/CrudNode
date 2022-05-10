import {modeloReserva} from '../models/reservaModelo.js'

export class ServicioReserva{

    constructor(){}

        // async buscarTodos(){

        //     try{
        //        let habitaciones= await modeloHabitacion.find()
        //        return habitaciones
        //     }catch(error){
        //         console.log("upss"+error)
        //     }

        // }

        async buscarPorId(id){
            try {
                let reserva = await modeloReserva.findById(id)
                return reserva
            } catch (error) {
                console.log("upss"+error)
            }
        }

        async registrar(datosPeticion){
            try {
                
                let registrarReserva=new modeloReserva(datosPeticion)
                return( await registrarReserva.save())

            } catch (error) {
                
            }
        }

        async editar(id,datosPeticion){
            try {
                return (await modeloReserva.findByIdAndUpdate(id,datosPeticion))
            } catch (error) {
                console.log("upss"+error)                
            }
        }

        async eliminar(id){
            try {
                return(await modeloReserva.findByIdAndDelete(id))
            } catch (error) {
                console.log("upss"+error)
            }
        }


}