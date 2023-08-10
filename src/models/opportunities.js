import { DataTypes } from "sequelize";
import { investment } from "./investments.js";
import { sequelize } from "../db/databases.js";

export const opportunities = sequelize.define("opportunities", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.TEXT,
    investment_amount: DataTypes.INTEGER,
    
},{timestamps: false});

opportunities.hasMany(investment,{
    foreignKey: 'opportunity_id',
    sourceKey: 'id',
})


investment.belongsTo(opportunities,{
    foreignKey: 'opportunity_id',
    targetKey: 'id',
})

