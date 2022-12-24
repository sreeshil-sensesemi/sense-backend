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