import { Router } from "express";
import { getCustomers, getProducts, getTransactions } from "../controller/client.controller";

const router = Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);
router.get("/transactions", getTransactions);

export default router;
