//Importando dotENV
import 'dotenv/config'

//DESPERTAR EL SERVIDOR

//1. Importar la clase Servidor
import {Servidor} from './Server/Servidor.js'

//2. Utilizo la clase Servidor (Creo un OBJETO)
let servidorViernes= new Servidor()

//3. Llamado al metodo despertarServidor
servidorViernes.despertarServidor()



