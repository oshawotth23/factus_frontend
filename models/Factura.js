import mongoose from "mongoose";

const facturaSchema = mongoose.Schema({
  reference_code: { type: String, required: true },
  observation: String,
  payment_form: { type: Number, default: 1 }, 
  payment_due_date: Date, 
  payment_method_code: Number, 
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Cliente", required: true },
  items: [
		{
			product: { type: mongoose.Schema.Types.ObjectId, ref: "Producto", required: true },
			quantity: { type: Number, required: true },
			// discount_rate: Number,
			tax_rate: String,
			is_excluded: Number,
			tribute_id: Number,
			/* withholding_taxes: [
				{
					code: String,
					withholding_tax_rate: Number,
				},
			], */
		},
	],
  billing_period: {
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
  },
});

export default mongoose.model("Factura", facturaSchema);
