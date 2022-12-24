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

