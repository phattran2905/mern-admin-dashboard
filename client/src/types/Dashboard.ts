import { Transaction } from "./Transaction";

export interface DashboardResponse {
	totalCustomers: number;
	yearlySalesTotal: number;
	yearlyTotalSoldUnits: number;
	monthlyData: [
		{
			month: string;
			totalSales: number;
			totalUnits: number;
		}
	];
	salesByCategory: {
		shoes: number;
		clothing: number;
		accessories: number;
		misc: number;
	};
	thisMonthStats: {
		month: string;
		totalSales: number;
		totalUnits: number;
	};
	todayStats: {
		date: string;
		totalSales: number;
		totalUnits: number;
	};
	transactions: Transaction[];
}
