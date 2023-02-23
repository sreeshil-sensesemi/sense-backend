import { DataTypes } from "sequelize";
import { sequelize } from "../database.config.js";


export const ManualVital = sequelize.define("manualvital", {
    SensePatientID: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    SystolicBP: {
        type: DataTypes.STRING,
    },
    DiastolicBP: {
        type: DataTypes.STRING,
    },
    FastingBloodSugar: {
        type: DataTypes.STRING,
    },
    PostPrandialBG: {
        type: DataTypes.STRING,
    },
    RandomBloodSugar: {
        type: DataTypes.STRING,
    },
    BloodOxygen: {
        type: DataTypes.STRING,
    },
    BodyTemperature: {
        type: DataTypes.FLOAT,
    },
    HeartRate: {
        type: DataTypes.STRING,
    },
    Height: {
        type: DataTypes.STRING,
    },
    Weight: {
        type: DataTypes.STRING,
    },
})