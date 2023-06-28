import { Request, Response, NextFunction } from "express";
import UserModel from "../models/User.model";
import mongoose from "mongoose";
import TransactionModel from "../models/Transaction.model";

export const getAdmins = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const admins = await UserModel.find({ role: "admin" }).select("-password");
		return res.status(200).json(admins);
	} catch (error: any) {
		return res.status(404).json({ message: error.message });
	}
};

export const getUserPerformance = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;

		const userWithStats = await UserModel.aggregate([
			{ $match: { _id: new mongoose.Types.ObjectId(id) } },
			{
				$lookup: {
					from: "affiliatestats",
					localField: "_id",
					foreignField: "userId",
					as: "affiliateStats",
				},
			},
			{ $unwind: "$affiliateStats" },
		]);

		const saleTransactions = await Promise.all(
			userWithStats[0].affiliateStats.affiliateSales.map((id: string) => {
				return TransactionModel.findById(id);
			})
		);

		const filterSaleTransactions = saleTransactions.filter((transaction) => transaction !== null);

		return res.status(200).json({ user: userWithStats[0], sales: filterSaleTransactions });
	} catch (error: any) {
		return res.status(404).json({ message: error.message });
	}
};
