import { Router } from "express";
import { postInvestment } from "../controllers/investment.controller.js";

const router = Router();

router.post("/", postInvestment);

router.get("/")




export default router;