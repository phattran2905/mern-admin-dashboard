import { Schema, model } from "mongoose";

export interface IOverallStat {
	totalCustomers: number;
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
	salesByCategory: {
		type: Map<string, string>;
		of: number;
	};
}

const OverallStatSchema = new Schema<IOverallStat>(
	{
		totalCustomers: Number,
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
		salesByCategory: {
			type: Map,
			of: Number,
		},
	},
	{ timestamps: true }
);

const OverallStatModel = model<IOverallStat>("OverallStat", OverallStatSchema);
export default OverallStatModel;
