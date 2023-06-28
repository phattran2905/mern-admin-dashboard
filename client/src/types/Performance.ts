import { Transaction } from "./Transaction";
import { UserResponse } from "./User";

export interface PerformanceResponse {
	user: UserResponse;
	sales: Transaction[];
}
