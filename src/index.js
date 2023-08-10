import express from "express";
import { sequelize } from "./db/databases.js";
import investmentRoutes from "./routes/investment.routes.js";


const app = express();
const PORT = 3000

app.use(express.json());
app.use(investmentRoutes);


app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to the database');
        await sequelize.sync();
        console.log(`Lintening on port http://localhost:${PORT}/`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})

