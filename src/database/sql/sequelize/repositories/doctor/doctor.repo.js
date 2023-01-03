import { Doctor } from "../../models/doctor/doctor.model.js";






// get enterprise by enterprise ID
export const getByDoctorID = async (doctorID, senseHospitalID) => {
    try {
      
        const doctor = await Doctor.findOne({ where: { DoctorID: doctorID, SenseHospitalID: senseHospitalID } });
        return doctor;
        //return await PatientMapper.toDetailsDto(patient);
    } catch (error) {
        console.log(error);
    }
}


//create doctor
export const create = async (doctorData) => {
    try {
        
        const doctor = Doctor.create(doctorData);
        return doctor;
    } catch (error) {
        console.log(error);
    }
}


// update doctor by doctor id
export const updateByDoctorID = async (doctorID, data) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
}

// delete doctor by doctor id
export const deleteByDoctorID = async (doctorID, senseHospitalID) => {
    try {
        
        await Doctor.destroy({ where: { SenseDoctorID: doctorID, SenseHospitalID: senseHospitalID } });
        
    } catch (error) {
        console.log(error);
    }
}

//get doctors
export const getAllDoctorsByEnterpriseID = async (enterpriseID) => {
    try {

        const doctors = await Doctor.findAll({ where: {SenseHospitalID : enterpriseID }})
        return doctors;
        
    } catch (error) {
        console.log(error);
        return "not found"
    }
}