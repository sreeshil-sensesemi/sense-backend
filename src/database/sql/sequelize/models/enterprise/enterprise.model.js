import { DataTypes } from "sequelize"
import { sequelize } from "../../database.config.js";


export const Enterprise = sequelize.define("enterprise", {
    // HospitalID: {
    //     type: DataTypes.STRING,
    //    // unique: true,
    //     allowNull: true,
    // },
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
        allowNull: true,

    },
    GovernmentUndertaking: {
        type: DataTypes.STRING,
        allowNull: true,

    },
    State: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    City: {
        type: DataTypes.STRING,
        allowNull: true,

    },
    Address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Pin: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Website: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Logo: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    LogoKey: {
        type: DataTypes.STRING,
    }
})
