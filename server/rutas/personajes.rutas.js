import { Router } from "express";
import { crearPj, get, getbyuser, modificar} from "../controladores/pj.controlador.js";
const router = Router()

router.post("/crear_personaje", crearPj)
router.get("/get", get)
router.put("/modificar/:id" , modificar)
/*router.delete("/eliminar", delete) */
router.post("/personajes_encontrados", getbyuser)

export default router