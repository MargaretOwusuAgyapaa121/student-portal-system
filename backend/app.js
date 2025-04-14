import express from "express";
import dotenv from "dotenv";
import sequelize from "./backend/models/dbConnection.js";
 
dotenv.config();
const PORT=process.env.PORT || 2344;

const app = express();

const startserver = async ()=>{
    try{
        await sequelize.authenticate()
        app.listen(PORT, ()=>{
            console.log(`server is running on http://localhost:${PORT}`);
        })
    }
    catch (error){
        console.error(error)
    }
}

startserver();