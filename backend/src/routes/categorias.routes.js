import { Router } from "express";
import { methodHTTP as categoriaController} from "../controllers/categorias.controllers.js";


const router = Router();
// Rutas para empleados
router.get("/", (categoriaController.getCategorias));
router.post("/", (categoriaController.postCategorias));
router.get("/:id", (categoriaController.getCategory));
router.delete("/:id", (categoriaController.deleteCategory));
router.put("/:id", (categoriaController.updateCategory));

// Rutas para empleados

export default router;