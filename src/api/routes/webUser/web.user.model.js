import { DataTypes } from "sequelize";
//import { sequelize } from "../database.config.js";
import { sequelize } from "../../../database/sql/sequelize/database.config.js";

export const WebUser = sequelize.define("webuser", {
    UserID: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    UserName: {
        type: DataTypes.INTEGER,
    },
    Password: {
        type: DataTypes.INTEGER,
    },
    Role: {
        type: DataTypes.INTEGER,
    },
    
    
})