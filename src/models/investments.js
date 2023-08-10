import { sequelize } from "../db/databases.js";
import { DataTypes } from "sequelize";

export const investment = sequelize.define("investment",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    investor_name: DataTypes.TEXT,
    amount: DataTypes.INTEGER,
    opportunity_name: DataTypes.TEXT,
    date_invested: DataTypes.DATEONLY
},{timestamps: false})