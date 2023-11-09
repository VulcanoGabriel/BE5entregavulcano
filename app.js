import express from "express"
import products from "./src/router/router.products.js"
import carts from "./src/router/router.cart.js"

//importo viewrouter para renderisar en pantalla 

import viewsRouter from "./src/routes/view.router.js"

//importo server de socket.io lo que usaremos para iniciar el mismo

import { Server } from "socket.io"

//Importamos handlebars para dar dinamismo al proyecto junto a express

import handlebars from "express-handlebars"

//importamos un parametro , que nos ayuda a encontrar las rutas 

import __dirname from "./utils.js"

const app = express()

//iniciamos handlebars

app.engine(`handlebars`, handlebars.engine())

//setiamos la ubicacion de las vistas de handlebars

app.set(`views`, __dirname + `/views`)

//al ya tener iniciado el motor de handlebars le decimos cual en especifico vamos a usar

app.set(`view engine`, `handlebars`)


// json nos deja usar el formato con compatibilidad

//urlencoded aumenta la compatibilidad en transferencia de datos

//setiamos contenido estatico la carpeta publica 

app.use(express.static(__dirname + `/public`))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

// rutas

app.use("/", viewsRouter)

app.use("/api/products", products)

app.use("/api/carts", carts)

//abro servidor dentro de una contante para pasarlo a el serversocket

const httpServer = app.listen(8080, () => { console.log("<<<<<<<<<<<<<<<<<<<<<<<<<servidor corriendo....................") })

//creo un nuevo servidor socket

const serverSocket = new Server(httpServer)

//en establesco cuando tenga una coneccion el servidor respondera

serverSocket.on(`connection`, socket => { console.log(`conectado`) })

//exporto el servidor para su uso (Product Manager)

export { serverSocket }