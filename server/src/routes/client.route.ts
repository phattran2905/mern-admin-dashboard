import { Router } from "express";
import { getCustomers, getProducts } from "../controller/client.controller";

const router = Router();

router.get("/products", getProducts);
router.get("/customers", getCustomers);

export default router;
