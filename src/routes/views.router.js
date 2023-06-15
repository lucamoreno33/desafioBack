import express from "express";
import ProductManager from "../ProductManager.js";
const almacenamiento = new ProductManager('./data/productos.json');
const productos = almacenamiento.getProducts()
const router = express.Router()



router.get("/realTimeProducts", (req, res) => {
    res.render("realTimeProducts", {productos});
})

export default router