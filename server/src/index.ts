import { config } from "dotenv";
import mongoose from "mongoose";
import app from "./app";

config();

const PORT = process.env.PORT || 3001;
mongoose
	.connect(process.env.MONGODB_DB_URL || "mongodb://localhost:27017")
	.then(() => {
		app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
	})
	.catch((error) => console.log(`${error} did not connect.`));
