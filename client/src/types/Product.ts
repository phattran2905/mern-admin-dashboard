export interface ProductResponse {
	_id: string;
	name: string;
	price: number;
	description: string;
	category: string;
	rating: number;
	supply: number;
	productStat: {
		_id: string;
		productId: string;
		yearlySalesTotal: number;
		yearlyTotalSoldUnits: number;
		monthlyData?: string[];
		dailyData?: string[];
	};
}
