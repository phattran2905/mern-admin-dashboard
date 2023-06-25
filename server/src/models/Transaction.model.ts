import { Schema, Types, model } from "mongoose";

export interface ITransaction {
	userId: string;
	cost: string;
	products: {
		type: Types.ObjectId[];
		of: number;
	};
}

const TransactionSchema = new Schema<ITransaction>(
	{
		userId: String,
		cost: String,
		products: {
			type: [Types.ObjectId],
			of: Number,
		},
	},
	{ timestamps: true }
);

const TransactionModel = model<ITransaction>("Transaction", TransactionSchema);

export default TransactionModel;
