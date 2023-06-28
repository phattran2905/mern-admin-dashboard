import { NextFunction, Request, Response } from "express";
import UserModel from "../models/User.model";
import TransactionModel from "../models/Transaction.model";
import OverallStatModel from "../models/OverallStat.model";

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.params;
		const user = await UserModel.findById(id);
		res.status(200).json(user);
	} catch (error: any) {
		return res.status(404).json({ message: error.message });
	}
};

export const getDashboardStats = async (req: Request, res: Response, next: NextFunction) => {
	try {
		// hardcoded values
		const currentMonth = "November";
		const currentYear = 2021;
		const currentDay = "2021-11-15";

		/* Recent Transactions */
		const transactions = await TransactionModel.find().limit(50).sort({ createdAt: -1 });

		/* Overall Stats */
		const overallStat = await OverallStatModel.find({ year: currentYear });
		const { totalCustomers, yearlyTotalSoldUnits, yearlySalesTotal, monthlyData, salesByCategory } =
			overallStat[0];

		const thisMonthStats = overallStat[0].monthlyData.find(({ month }) => {
			return month === currentMonth;
		});

		const todayStats = overallStat[0].dailyData.find(({ date }) => {
			return date === currentDay;
		});

		return res.status(200).json({
			totalCustomers,
			yearlyTotalSoldUnits,
			yearlySalesTotal,
			monthlyData,
			salesByCategory,
			thisMonthStats,
			todayStats,
			transactions,
		});
	} catch (error: any) {
		return res.status(404).json({ message: error.message });
	}
};
