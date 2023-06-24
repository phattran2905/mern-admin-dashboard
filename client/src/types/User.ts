export interface UserResponse {
	_id: string;
	name: string;
	email: string;
	password: string;
	city: string;
	state: String;
	country: String;
	occupation: string;
	phoneNumber: string;
	transactions: Array<any>;
	role: string;
}
