import { Router } from "express";
import { getDashboardStats, getUser } from "../controller/general.controller";

const router = Router();
router.get("/user/:id", getUser);
router.get("/dashboard", getDashboardStats);

export default router;
