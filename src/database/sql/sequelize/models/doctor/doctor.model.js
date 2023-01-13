import { DataTypes } from "sequelize";
import { sequelize } from "../../database.config.js";



export const Doctor = sequelize.define("doctor", {
    DoctorID: {
        type: DataTypes.STRING,
        allowNull: true,
        //unique: true
    },
    SenseDoctorID: {
        type: DataTypes.STRING,
        allowNull: false,
        //unique: true
    },
    HospitalID: {
        type: DataTypes.STRING,
        allowNull: true,
        //unique: true
    },
    SenseHospitalID: {
        type: DataTypes.STRING,
        allowNull: false,
       // unique: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    RegistrationNo: {
        type: DataTypes.STRING,
        allowNull: false,
        //unique: true
    },
    Specialization: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // StateMedicalCouncil: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    PractisingSince: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Gender: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    MobileNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        //unique: true
    },
    City: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})


