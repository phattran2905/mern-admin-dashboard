export interface Transaction {
	_id: string;
	userId: string;
	cost: string;
	createdAt: string;
	products: string[];
}

export interface TransactionsResponse {
	total: number;
	transactions: Array<Transaction>;
}
