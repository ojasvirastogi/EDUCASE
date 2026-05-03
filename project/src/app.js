import express from "express";
import mySqlPool from "./config/db.js";
import schoolRoutes from "./routes/schoolRoutes.js";

const app = express();

const schoolsTable = `
  CREATE TABLE IF NOT EXISTS schools (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    latitude FLOAT NOT NULL,
    longitude FLOAT NOT NULL
  )
`;

(async () => {
  try {
    await mySqlPool.query("SELECT 1");
    await mySqlPool.query(schoolsTable);
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
