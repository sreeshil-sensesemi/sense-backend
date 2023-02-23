import { DataTypes } from "sequelize";
import { sequelize } from "../database.config.js";


export const ManualVital = sequelize.define("manualvital", {
    SensePatientID: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    SystolicBP: {
        type: DataTypes.INTEGER,
    },
    DiastolicBP: {
        type: DataTypes.INTEGER,
    },
    FastingBloodSugar: {
        type: DataTypes.INTEGER,
    },
    PostPrandialBG: {
        type: DataTypes.INTEGER,
    },
    RandomBloodSugar: {
        type: DataTypes.INTEGER,
    },
    BloodOxygen: {
        type: DataTypes.INTEGER,
    },
    BodyTemperature: {
        type: DataTypes.FLOAT,
    },
    HeartRate: {
        type: DataTypes.INTEGER,
    },
    Height: {
        type: DataTypes.INTEGER,
    },
    Weight: {
        type: DataTypes.INTEGER,
    },
})