import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('inversiones', 'postgres', 'mysecretpassword', {
    host: 'localhost',
    dialect: 'postgres'
  });




