import { Router } from "express";
import { getAdmins } from "../controller/management.controller";

const router = Router();

router.get("/admins", getAdmins);

export default router;
