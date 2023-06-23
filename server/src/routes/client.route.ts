import { Router } from "express";
import { getProducts } from "../controller/client.controller";

const router = Router();

router.get("/products", getProducts);

export default router;
