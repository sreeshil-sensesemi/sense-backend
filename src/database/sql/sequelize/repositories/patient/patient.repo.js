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


// get all patients by enterprise id
export const getAllPatientsByEnterpriseID = async (enterpriseID) => {
    try {

        const patients = await Patient.findAll({ where : { SenseHospitalID: enterpriseID }});
        return patients;
        
    } catch (error) {
        console.log(error);
        return "not found error"
    }
}


//search patient
export const searchPatient = async (searchQuery) => {
    try {
        const patient = await Patient.findOne({ where: { MobileNumber: searchQuery}});
        return patient;
    } catch (error) {
        console.log(error);
    }
}

//get patient by mobile number
export const getByMobileNumber = async (mobilenumber) => {
    try {
        const patient = await Patient.findOne({ where: { MobileNumber: mobilenumber }});
        return patient;
        
    } catch (error) {
        console.log(error);
        return 
    }
}