import {ServicioReserva} from "../services/ServicioReserva.js"
// import{ServicioHabitacion} from "../services/ServicioHabitacion"

export class ControladorReserva{


    constructor(){}

    // async buscarTodos(request,response){
    //     let servicio =new ServicioReserva()//instanciar clase
    

    //         response.status(200).json({
    //             mensaje:"Exito en la bsuqueda",
    //             data:await servicio.buscarTodos(),
    //             estado:true
    //         })
    
    
    //         response.status(400).json({
    //             mensaje:"upss",
    //             data:[],
    //             estado:false
    //         })
    
    
    // }

    async buscarPorId(request,response){
        
        let id=request.params.id //CAPTURO EL ID QUE LLEGA POR LA URL
        console.log("El id solicitado es: "+id)

        let servicio =new ServicioReserva()
        
        

            response.status(200).json({
                mensaje:"Exito en la busqueda por id: "+id,
                data:await servicio.buscarPorId(id),
                estado:true
            })
    
        
    
            response.status(400).json({
                mensaje:"upss",
                data:[],
                estado:false
            })
    
        
    }

    async insertar(request,response){
        
        let idHabitacion=request.params.idHabitacion
        
        let datosPeticion=request.body
        console.log(datosPeticion)

        


        let servicio =new ServicioReserva()
        
            await servicio.registrar(datosPeticion)
            response.status(200).json({
                mensaje:"Exito registrando datos",
                data:datosPeticion,
                estado:true
            })
    
        
    
            response.status(400).json({
                mensaje:"upss",
                data:[],
                estado:false
            })
    
        
    }

    async editar(request,response){
        let id=request.params.id
        let datosPeticion=request.body.datosPeticion
        let servicio =new ServicioReserva()
        
            await servicio.editar(id,datosPeticion)
            response.status(200).json({
                mensaje:"Exito editando datos",
                data:null,
                estado:true
            })
    
        
            response.status(400).json({
                mensaje:"upss",
                data:[],
                estado:false
            })
    
        
    }

    async eliminar(request,response){
        let id=request.params.id
        let servicio=new ServicioReserva()
        
            await servicio.eliminar(id)
            response.status(200).json({
                mensaje:"Exito eliminando datos",
                data:null,
                estado:true
            })
    
            
            response.status(400).json({
                mensaje:"upss",
                data:[],
                estado:false
            })
    
        
    }

}