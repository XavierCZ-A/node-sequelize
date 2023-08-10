import { investors } from "../models/investors.js";
import { investment } from "../models/investments.js";
import { opportunities } from "../models/opportunities.js";
import { sequelize } from "../db/databases.js";
// import { Op } from "sequelize";


export const postInvestment = async (req, res) => {
    const {investorId, opportunityId, amount} = req.body;
    try {
        const investor = await investors.findByPk(investorId);
        const opportunity = await opportunities.findByPk(opportunityId);

        if (amount > investor.balance) {
            return res.status(400).json({message: "El monto de inversion es mayor al saldo del inversionista"})
        }

        if (amount > opportunity.investment_amount) {
            return res.status(400).json({message: "El monto de inversion es mayor al monto de la oportunidad"})
        }

        const transaction = await sequelize.transaction();
        
        const newInvestment = await investment.create({
            investor_name: investor.name,
            amount: amount,
            opportunity_name: opportunity.name,
            opportunity_id: opportunityId,
            date_invested: new Date(),
        }, {transaction});

        await transaction.commit();

        res.json(newInvestment);

    } catch (error) {
        res.status(500).json({message: "Error del servidor"});
     }
}

export const getOpportunities = async (req, res) => {
    try {
        const result = await opportunities.findAll({
            attributes: ["name", "investment_amount"],
            include: [{
              model: investment,
              attributes: ["investor_name", "amount", "opportunity_name"],
            
            }]
          });
        res.json(result);
    } catch (error) {
        res.status(500).json({message: "Error del servidor"});
    }
 };
