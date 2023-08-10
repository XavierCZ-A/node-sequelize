import express from "express";
import { sequelize } from "./db/databases.js";
import investmentRoutes from "./routes/investment.routes.js";
// import { opportunitiesData, investorsData } from "./models/data.js";
// import { opportunities } from "./models/opportunities.js";
// import { investors } from "./models/investors.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(investmentRoutes);


app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to the database');
        await sequelize.sync();
        // await investors.bulkCreate(investorsData);
        // await opportunities.bulkCreate(opportunitiesData);
        console.log(`Lintening on port http://localhost:${PORT}/`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})

