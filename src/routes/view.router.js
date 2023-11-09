import productManager from "../classManager/productManager.js"
import { Router } from "express"

const router = Router()



router.get("/", async (req, res) => {

    const pM1 = new productManager("./src/db/lista.json");

    let respuesta = await pM1.getProducts()

    res.render(`home`, { respuesta })
})

router.get("/realtimeproducts", async (req, res) => {

    const pM1 = new productManager("./src/db/lista.json");

    let respuesta = await pM1.getProducts()

    res.render(`realTimeProducts`, { respuesta })
})


export default router