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
    investmentAmount: DataTypes.INTEGER,
    
});

opportunities.hasMany(investment,{
    foreignKey: 'opportunityId',
    sourceKey: 'id',
})


investment.belongsTo(opportunities,{
    foreignKey: 'opportunityId',
    targetKey: 'id',
})

