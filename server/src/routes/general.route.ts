import { Router } from "express";
import { getUser } from "../controller/general.controller";

const router = Router();
router.get("/user/:id", getUser);

export default router;
