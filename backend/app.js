import express from "express";
import dotenv from "dotenv";
// import sequelize from "./backend/dbConnection.js";
 import db from "./backend/models/index.js";
dotenv.config();
const PORT=process.env.PORT || 2344;


const app = express();

const startserver = async ()=>{
    try{
        await db.sequelize.sync();
        app.listen(PORT, ()=>{
            console.log(`server is running on http://localhost:${PORT}`);
        })
    }
    catch (error){
        console.error(error)
    }
}

startserver();