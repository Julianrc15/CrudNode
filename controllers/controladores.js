export function buscarTodos(request,response){

    try{

        response.status(200).json({
            mensaje:"Exito en la bsuqueda",
            data:[{nombre:"Juan",edad:32},{nombre:"Maria",edad:50}],
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

export function buscarPorId(request,response){

    try{

        response.status(200).json({
            mensaje:"Exito en la bsuqueda por id",
            data:[{nombre:"Juan",edad:32}],
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

export function insertar(request,response){

    try{

        response.status(200).json({
            mensaje:"Exito registrando datos",
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

export function editar(request,response){

    try{

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

export function eliminar(request,response){

    try{

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