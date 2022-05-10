import {modeloHabitacion} from '../models/habitacionModelo.js'

export class ServicioHabitacion{

    constructor(){}

        async buscarTodos(){

            
               let habitaciones= await modeloHabitacion.find()
               return habitaciones
            
                console.log("upss "+error)
            
        }

        async buscarPorId(id){
            
                let habitacion = await modeloHabitacion.findById(id)
                return habitacion
            
                console.log("upss "+error)
            
        }

        async registrar(datosPeticion){
            
                
                let habitacionaRegistrar=new modeloHabitacion(datosPeticion)
               return( await habitacionaRegistrar.save())

            
        }

        async editar(id,datoPeticion){
            
                return (await modeloHabitacion.findByIdAndUpdate(id,datosPeticion))
            
                console.log("upss "+error)                
            
        }

        async eliminar(id){
            
                return(await modeloHabitacion.findByIdAndDelete(id))
            
                console.log("upss "+error)
            
        }


}