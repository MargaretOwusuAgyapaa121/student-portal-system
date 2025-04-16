import { DataTypes } from "sequelize";
import sequelize from "../dbConnection.js";

const User = sequelize.define("User",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
});

export default User;
