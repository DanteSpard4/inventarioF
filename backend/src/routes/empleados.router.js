import { methodHTTP as empleadosController} from "../controllers/empleados.controllers.js";
import { Router } from "express";

const router = Router();

router.get("/", (empleadosController.getEmpleados));
router.post("/", (empleadosController.postEmpleados));

export default router;