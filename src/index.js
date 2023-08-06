import express from "express";
import { sequelize } from "./db/databases.js";
import investmentRoutes from "./routes/investment.routes.js";
// import { opportunitiesData, investorsData } from "./models/config.js";
// import { opportunities } from "./models/opportunities.js";
// import { investors } from "./models/investors.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(investmentRoutes);


app.listen(PORT, async () => {
    try {
        await sequelize.sync({ force: false }); 
        // await opportunities.bulkCreate(opportunitiesData);
        // await investors.bulkCreate(investorsData);
        console.log(`Lintening on port http://localhost:${PORT}/`);
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})