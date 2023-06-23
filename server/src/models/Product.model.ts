import { Document, Schema, model } from "mongoose";

export interface IProductSchema extends Document {
	name: string;
	price: number;
	description: string;
	category: string;
	rating: number;
	supply: number;
	_doc: any;
}

const ProductSchema = new Schema<IProductSchema>(
	{
		name: String,
		price: Number,
		description: String,
		category: String,
		rating: Number,
		supply: Number,
	},
	{ timestamps: true }
);

const ProductModel = model<IProductSchema>("Product", ProductSchema);
export default ProductModel;
