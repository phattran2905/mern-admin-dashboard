import { NextFunction, Request, Response } from "express";
import ProductModel from "../models/Product.model";
import ProductStatModel, { IProductStat } from "../models/ProductStat.model";
import { HydratedDocument } from "mongoose";

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
