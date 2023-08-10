import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('investments', 'postgres', 'mysecretpassword', {
    host: 'localhost',
    dialect: 'postgres'
  });




