import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import routerCliente from "./routers/Clientes.js";
import routerFactura from "./routers/Factura.js";
import routerProducto from "./routers/Productos.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/factus/cliente", routerCliente);
app.use("/factus/factura", routerFactura);
app.use("/factus/producto", routerProducto);

dotenv.config();

app.listen(process.env.PORT, () => {
	console.log("Escuchando en el puerto", process.env.PORT);
	mongoose.connect(process.env.CNX_MONGO)
	.then(()=>console.log("conected"))
	.catch((error)=>console.log(error));
});