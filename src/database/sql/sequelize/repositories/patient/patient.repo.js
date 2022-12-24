import { Patient } from "../../models/patient/patient.model.js";


// export const getByMobileNumber = async (mobileNumber) => {
//     try {
//         const patient = await Patient.findOne({ where: { PersonId: personId } });
//         return await PatientMapper.toDetailsDto(patient);
//     } catch (error) {
//         console.log(error);
//     }
// }



// get patient by patient ID
export const getByPatientID = async (sensePatientID) => {
    try {
      
        const patient = await Patient.findOne({ where: { SensePatientID: sensePatientID} });
        return patient;
        //return await PatientMapper.toDetailsDto(patient);
    } catch (error) {
        console.log(error);
    }
}



export const create = async (patientData) => {
    try {

        const patient = await Patient.create(patientData);
        return patient;
        
    } catch (error) {
        console.log(error);
    }
}