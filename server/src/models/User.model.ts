import mongoose from "mongoose";

interface IUserSchema {
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

const UserSchema = new mongoose.Schema<IUserSchema>(
	{
		name: {
			type: String,
			required: true,
			min: 2,
			max: 100,
		},
		email: {
			type: String,
			required: true,
			max: 50,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			min: 5,
		},
		city: String,
		state: String,
		country: String,
		occupation: String,
		phoneNumber: String,
		transactions: Array,
		role: {
			type: String,
			enum: ["user", "admin", "superadmin"],
			default: "admin",
		},
	},
	{
		timestamps: true,
	}
);

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;
