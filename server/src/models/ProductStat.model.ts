import { Document, Schema, model } from "mongoose";

export interface IProductStat extends Document {
	productId: string;
	yearlySalesTotal: number;
	yearlyTotalSoldUnits: number;
	year: number;
	monthlyData: [
		{
			month: string;
			totalSales: number;
			totalUnits: number;
		}
	];
	dailyData: [
		{
			date: string;
			totalSales: number;
			totalUnits: number;
		}
	];
	_doc: any;
}

const ProductStatSchema = new Schema<IProductStat>(
	{
		productId: String,
		yearlySalesTotal: Number,
		yearlyTotalSoldUnits: Number,
		year: Number,
		monthlyData: [
			{
				month: String,
				totalSales: Number,
				totalUnits: Number,
			},
		],
		dailyData: [
			{
				date: String,
				totalSales: Number,
				totalUnits: Number,
			},
		],
	},
	{ timestamps: true }
);

const ProductStatModel = model<IProductStat>("ProductStat", ProductStatSchema);

export default ProductStatModel;
