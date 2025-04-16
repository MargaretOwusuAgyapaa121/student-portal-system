import User from "./userModels.js";
import Assignment from "./assignmentModels.js";

import sequelize from "../dbConnection.js";

User.hasMany(Assignment, {foreignKey:"studentId"});
Assignment.belongsTo(User, {foreignKey:"studentId"});

const db = {
    User,
    Assignment,
    sequelize
};


export default db;