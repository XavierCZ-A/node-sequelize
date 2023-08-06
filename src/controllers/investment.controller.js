import { investors } from "../models/investors.js";
// import { investment } from "../models/investments.js";
import { opportunities } from "../models/opportunities.js";


export const postInvestment = async (req, res) => {
    const {investorId, opportunityId, amount} = req.body;
    try {
        const investor = await investors.findByPk(investorId);
        const opportunity = await opportunities.findByPk(opportunityId);

        if (amount > investor.balance) {
            res.status(400).json({message: "El monto de inversion es mayor al saldo del inversionista"})
        }

        if (amount > opportunity.investmentAmount) {
            res.status(400).json({message: "El monto de inversion es mayor a la oportunidad"})
        }

        res.json({investor, opportunity, amount});

    } catch (error) {
        res.status(500).json({message: "Error "});
     }
}


