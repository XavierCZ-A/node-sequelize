import { DataTypes } from "sequelize";
import { sequelize } from "../db/databases.js";


export const investors = sequelize.define("investors", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.TEXT,
    balance: DataTypes.INTEGER,

},{timestamps: false});
