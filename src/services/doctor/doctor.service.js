import * as doctorRepo from '../../database/sql/sequelize/repositories/doctor/doctor.repo.js'







// get doctor by doctor ID and enterprise ID
export const getByDoctorID = async (doctorID, senseHospitalID) => {

    const doctor = await doctorRepo.getByDoctorID(doctorID, senseHospitalID);
    return doctor;
}

//create doctor
export const create = async (doctorData) => {

    const doctor = await doctorRepo.create(doctorData);
    return doctor;
}

//update doctor
export const updateByDoctorID = async (doctorID, data) => {

    const doctor = await doctorRepo.updateByDoctorID(doctorID, data);
    return doctor;
}

//get all doctors by enterprise id
export const getAllDoctorsByEnterpriseID = async (enterpriseID) => {
    
    const doctors = await doctorRepo.getAllDoctorsByEnterpriseID(enterpriseID);
    return doctors;
}


//search doctor
export const searchDoctor = async (query) => {
    const doctor = await doctorRepo.searchDoctor(query);
    return doctor;
}

// delete doctor by doctor id
export const deleteByDoctorID = async (doctorID) => {

    const res = await doctorRepo.deleteByDoctorID(doctorID);
    return res;
}