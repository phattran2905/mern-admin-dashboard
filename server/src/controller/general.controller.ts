import { NextFunction, Request, Response } from "express";
import UserModel from "../models/User.model";

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const user = await UserModel.findById(id);
		res.status(200).json(user);
	} catch (error: any) {
		return res.status(404).json({ message: error.message });
	}
};
