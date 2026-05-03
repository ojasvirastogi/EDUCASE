import express from "express"
import mySqlPool from "./config/db.js";
import schoolRoutes from "../src/routes/schoolRoutes.js"
const app=express();

(async () => {
    try {
        await mySqlPool.query("SELECT 1");
        console.log("MySQL DB CONNECTED");
    } catch (error) {
        console.error("DB Connection Failed", error);
    }
})();
app.use(express.json())
app.use("/api/v1/school",schoolRoutes)




export default app;