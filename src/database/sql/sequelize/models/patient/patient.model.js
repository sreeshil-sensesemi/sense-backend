import { DataTypes } from "sequelize"
import { sequelize } from "../../database.config.js"


export const Patient = sequelize.define("patient", {
    SensePatientID: {
        type: DataTypes.STRING,
        allowNull: false,
        //unique: true
    },
    SenseDoctorID: {
        type: DataTypes.STRING,
        allowNull: false,
        //unique: true
    },
    SenseHospitalID: {
        type: DataTypes.STRING,
        allowNull: false,
        //unique: true
    },
    FirstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    LastName: {
        type: DataTypes.STRING,
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
    State: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    SBP: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DBP: {
        type: DataTypes.STRING,
        allowNull: false,
    
    },
    Height: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Weight: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})


















// export const patient = (sequelize, DataTypes) => {
    
//     const Patient = sequelize.define("patient", {
//         PatientID: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             //unique: true
//         },
//         DoctorID: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             //unique: true
//         },
//         HospitalID: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             //unique: true
//         },
//         FirstName: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         LastName: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         Age: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//         },
//         Gender: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         MobileNumber: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             //unique: true
//         },
//         City: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         State: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         SBP: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         DBP: {
//             type: DataTypes.STRING,
//             allowNull: false,
        
//         },
//         Height: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//         Weight: {
//             type: DataTypes.STRING,
//             allowNull: false,
//         },
//     })

//     return Patient;
// }