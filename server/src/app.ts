import Express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import generalRoutes from "./routes/general.route";
import clientRoutes from "./routes/client.route";

const app = Express();
app.use(Express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.get("/", (req, res, next) => res.status(200).send("Hello"));
app.use("/client", clientRoutes);
app.use("/general", generalRoutes);

export default app;
