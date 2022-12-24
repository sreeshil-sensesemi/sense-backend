import * as patientRepo from '../../database/sql/sequelize/repositories/patient/patient.repo.js'




// //get patient by mobile number
// export const getByMobileNumber = async (mobileNumber) => {
    
//     const data = await 
// }

// get patient by patient ID
export const getByPatientID = async (sensePatientID) => {

    const patient = await patientRepo.getByPatientID(sensePatientID);
    return patient;
}

//create patient
export const  create = async (patientData) => {
    const patient = await patientRepo.create(patientData);
    return patient;
}