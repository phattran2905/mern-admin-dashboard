import { Request, Response, NextFunction } from "express";
import UserModel from "../models/User.model";

export const getAdmins = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const admins = await UserModel.find({ role: "admin" }).select("-password");
		return res.status(200).json(admins);
	} catch (error: any) {
		return res.status(404).json({ message: error.message });
	}
};
