import { config } from "dotenv";
import mongoose from "mongoose";
import app from "./app";
import UserModel from "./models/User.model";
import ProductModel from "./models/Product.model";
import ProductStatModel from "./models/ProductStat.model";
import TransactionModel from "./models/Transaction.model";
import OverallStatModel from "./models/OverallStat.model";
import { dataUser, dataProduct, dataProductStat, dataTransaction, dataOverallStat } from "./data";

config();

const PORT = process.env.PORT || 3001;
mongoose
	.connect(process.env.MONGODB_DB_URL || "mongodb://localhost:27017")
	.then(() => {
		app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

		// OverallStatModel.insertMany(dataOverallStat);
		// ProductModel.insertMany(dataProduct);
		// ProductStatModel.insertMany(dataProductStat);
		// TransactionModel.insertMany(dataTransaction);
		// UserModel.insertMany(dataUser);
	})
	.catch((error) => console.log(`${error} did not connect.`));
