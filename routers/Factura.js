import Router from "express";
import { postFactura, getFactura } from "../controllers/Factura.js";

const router = Router();

router.post("/", postFactura);
router.get("/", getFactura);

export default router;
