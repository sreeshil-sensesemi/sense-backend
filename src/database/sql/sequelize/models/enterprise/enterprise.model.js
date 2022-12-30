import { DataTypes } from "sequelize"
import { sequelize } from "../../database.config.js";


export const Enterprise = sequelize.define("enterprise", {
    HospitalID: {
        type: DataTypes.STRING,
       // unique: true,
        allowNull: true,
    },
    SenseHospitalID: {
        type: DataTypes.STRING,
        allowNull: false,
       // unique: true
    },
    HospitalName: {
        type: DataTypes.STRING,
        allowNull: false,   
    },
    MobileNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        //unique: true
    },
    Email: {
        type: DataTypes.STRING,
        //unique: true,
        allowNull: true,  
         
    },
    HospitalType: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    GovernmentUndertaking: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    State: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    City: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    Address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Pin: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Website: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Logo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
})
