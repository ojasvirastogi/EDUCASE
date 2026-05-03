import express from "express";
import mySqlPool from "./config/db.js";
import schoolRoutes from "./routes/schoolRoutes.js";

const app = express();

// check DB connection
(async () => {
  try {
    await mySqlPool.query("SELECT 1");
    console.log("MySQL DB CONNECTED ✅");
  } catch (error) {
    console.error("DB Connection Failed ❌", error);
  }
})();

app.use(express.json());

app.use("/api/v1/school", schoolRoutes);

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

export default app;