import mongoose from 'mongoose';


export async function conectar (){
    try {
        
        await mongoose.connect(process.env.DATABASE);
        console.log('Conectado a la base de datos')
        
    } catch (error) {
        console.log('Fallo en conexión'+error)
    }
}