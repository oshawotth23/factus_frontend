import Router from "express";
import {
	deleteCliente,
	getCliente,
	postCliente,
} from "../controllers/Clientes.js";

const router = Router();

router.post("/", postCliente);
router.get("/", getCliente);
router.delete("/:id", deleteCliente);

export default router;
