export interface SalesResponse {
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
