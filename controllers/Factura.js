import Facturas from "../models/Factura.js";

const postFactura = async (req, res) => {
	try {
		const { ...data } = req.body;
		const factura = await Facturas.create(data);
		res.json({ factura });
	} catch (error) {
		res.json({ error: error.message });
		console.log(error);
	}
};

const getFactura = async (req, res) => {
	try {
		const factura = await Facturas.find();
		res.json({ factura });
	} catch (error) {
		res.json({ error: error.message });
		console.log(error);
	}
};

export { postFactura, getFactura };
