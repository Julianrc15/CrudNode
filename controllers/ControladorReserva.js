import { ServicioHabitacion } from "../services/ServicioHabitacion.js"
import {ServicioReserva} from "../services/ServicioReserva.js"
// import{ServicioHabitacion} from "../services/ServicioHabitacion"
import {calcularDia}from'../helpers/calcularDias.js'
export class ControladorReserva{


    constructor(){}

    async buscarTodos(request,response){
        let servicio =new ServicioReserva()//instanciar clase
    
        try{
            response.status(200).json({
                mensaje:"Exito en la bsuqueda",
                data:await servicio.buscarTodos(),
                estado:true
            })
        }catch(error){
    
            response.status(400).json({
                mensaje:"upss",
                data:[],
                estado:false
            })
    
        }
    }

    async buscarPorId(request,response){
        
        let servicio =new ServicioReserva()
        
        let id=request.params.id //CAPTURO EL ID QUE LLEGA POR LA URL
        console.log("El id solicitado es: "+id)

               
        try{ 

            response.status(200).json({
                mensaje:"Exito en la busqueda por id: "+id,
                data: await servicio.buscarPorId(id),
                estado:true
            })
    
        }catch(error){   
    
            response.status(400).json({
                mensaje:"upss",
                data:[],
                estado:false
            })
        }
        
    }

    async insertar(request,response){

        let servicio =new ServicioReserva()
        let servicioHabitacion = new ServicioHabitacion()

        
        let idHabitacion=request.body.idHabitacion
   
        let datosPeticion=request.body
                     
        try{ 
            let habitacion=await servicioHabitacion.buscarPorId(idHabitacion)
            let precioHabitacion= habitacion.precio
            

            let fechaIn=request.body.fechaIn
            let fechaOut=request.body.fechaOut

            let calcular= calcularDia(fechaIn,fechaOut)
            let costo = precioHabitacion*calcular
            datosPeticion.costoReserva=costo

            await servicio.registrar(datosPeticion)
            response.status(200).json({
                mensaje:"Exito registrando datos",
                data:datosPeticion,
                estado:true
            })
    
        
        }catch(error){
            response.status(400).json({
                mensaje:"upss",
                data:[error],
                estado:false
            })
        }
        
    }

    async editar(request,response){

        let servicio =new ServicioReserva()
        let id=request.params.id
        let datosPeticion=request.body
        
        
        try{
            await servicio.editar(id,datosPeticion)
            response.status(200).json({
                mensaje:"Exito editando datos",
                data:null,
                estado:true
            })
    
        
        }catch(error){
            response.status(400).json({
                mensaje:"upss",
                data:[],
                estado:false
            })
        }
        
    }

    async eliminar(request,response){
        let id=request.params.id
        let servicio=new ServicioReserva()
        
        try{
            await servicio.eliminar(id)
            response.status(200).json({
                mensaje:"Exito eliminando datos",
                data:null,
                estado:true
            })
    
        }catch(error){    
            response.status(400).json({
                mensaje:"upss",
                data:[],
                estado:false
            })
        }
        
    }

}