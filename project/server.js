import express from "express"
import app from "../project/src/app.js"
import dotenv from "dotenv"
dotenv.config();
const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`server started at the port ${PORT} `)
})