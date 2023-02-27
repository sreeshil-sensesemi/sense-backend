import { DataTypes } from "sequelize";
import { sequelize } from "../../database.config.js";


export const TestReport = sequelize.define("testreport", {
    SensePatientID: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    ReportName: {
        type: DataTypes.STRING,
    },
    FileUrl: {
        type: DataTypes.STRING,
    },
    FileKeyName: {
        type: DataTypes.STRING,
    }
    
})