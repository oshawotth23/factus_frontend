import Router from "express";
import {
	postProductos,
	getProductos,
	deleteProducto,
} from "../controllers/Productos.js";

const router = Router();

router.post("/", postProductos);
router.get("/", getProductos);
router.delete("/:id", deleteProducto);

export default router;
