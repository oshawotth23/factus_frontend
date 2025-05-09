import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
	identification_document_id: { type: Number, require: true, default: 2 },
	identification: { type: String, require: true },
	dv: Number,
	names: String,
	address: String,
	email: String,
	phone: String,
	legal_organization_id: { type: Number, require: true },
	tribute_id: { type: Number, require: true },
	municipality_id: { type: Number, require: true },
});

export default mongoose.model("Cliente", clienteSchema);
