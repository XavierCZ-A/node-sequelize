import { Router } from "express";
import { getOpportunities, postInvestment } from "../controllers/investment.controller.js";

const router = Router();

router.post("/", postInvestment);

router.get("/", getOpportunities)




export default router;