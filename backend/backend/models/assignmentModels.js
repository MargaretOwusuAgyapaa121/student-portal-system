import { DataTypes } from "sequelize";
import sequelize from "../dbConnection.js";

const Assignment = sequelize.define("Assignment",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    fillerUrl:{
        type:DataTypes.STRING,
        allowNull:false
    },
    submitedAt:{
        type:DataTypes.DATE,
        defaultValue:DataTypes.Now
    },
    studentId:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    
}, {
    timestamps: true
})

export default Assignment;