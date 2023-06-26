import { Request, Response, NextFunction } from "express";
import OverallStatModel, { IOverallStat } from "../models/OverallStat.model";
import { HydratedDocument } from "mongoose";

export const getSales = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const overallStats: HydratedDocument<IOverallStat>[] = await OverallStatModel.find();

		return res.status(200).json(overallStats[0]);
	} catch (error: any) {
		return res.status(404).json({ message: error.message });
	}
};
