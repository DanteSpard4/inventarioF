import { methodHTTP as productosController } from "../controllers/productos.controller.js";
import { Router } from "express";

const router = Router();

// Rutas para productos
router.get("/", (productosController.getProductos));
router.put("/:id", (productosController.putProductos));

export default router;