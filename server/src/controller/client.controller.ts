import { NextFunction, Request, Response } from "express";
import ProductModel from "../models/Product.model";
import ProductStatModel, { IProductStat } from "../models/ProductStat.model";
import TransactionModel, { ITransaction } from "../models/Transaction.model";
import { HydratedDocument } from "mongoose";
import UserModel, { IUser } from "../models/User.model";
import PaginationQuery from "../types/PaginationQuery";

export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const products: HydratedDocument<IProductStat>[] = await ProductModel.find();

		const productsWithStats = await Promise.all(
			products.map(async (product: HydratedDocument<IProductStat>) => {
				const productStat: HydratedDocument<IProductStat> | null = await ProductStatModel.findOne({
					productId: product._id,
				});

				return {
					...product._doc,
					productStat,
				};
			})
		);

		return res.status(200).json(productsWithStats);
	} catch (error: any) {
		return res.status(400).json({ message: error.message });
	}
};

export const getCustomers = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const customers: HydratedDocument<IUser>[] = await UserModel.find({ role: "user" }).select(
			"-password"
		);

		return res.status(200).json(customers);
	} catch (error: any) {
		return res.status(400).json({ message: error.message });
	}
};

export const getTransactions = async (req: Request, res: Response, next: NextFunction) => {
	try {
		// sort should look like this (JSON): {"field": "userId", "sort": "desc"}
		const { page = 1, pageSize = 20, sort = null, search = "" } = req.query;

		// should look like this {userId: 1}
		const generateSort = () => {
			const sortParsed = JSON.parse(sort as string);
			const sortFormatted = {
				[sortParsed.field]: sortParsed.sort === "asc" ? 1 : -1,
			};

			return sortFormatted;
		};

		const sortFormatted = Boolean(sort) ? generateSort() : {};

		const transactions: HydratedDocument<ITransaction>[] = await TransactionModel.find({
			$or: [
				{ cost: { $regex: new RegExp(search as string, "i") } },
				{ userId: { $regex: new RegExp(search as string, "i") } },
			],
		})
			.sort(JSON.stringify(sortFormatted))
			.skip(Number(page) * Number(pageSize))
			.limit(Number(pageSize));

		const total = await TransactionModel.countDocuments({
			$or: [
				{ cost: { $regex: new RegExp(search as string, "i") } },
				{ userId: { $regex: new RegExp(search as string, "i") } },
			],
		});

		return res.status(200).json({ total, transactions });
	} catch (error: any) {
		return res.status(400).json({ message: error.message });
	}
};
