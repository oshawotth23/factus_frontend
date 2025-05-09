import mongoose from "mongoose";

const productosSchema = new mongoose.Schema({
  code_reference: { type: String, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  unit_measure_id: { type: Number, required: true },
  standard_code_id: { type: Number, required: true }
});

export default mongoose.model("Producto", productosSchema);
