import { Doctor } from "../../models/doctor/doctor.model.js";






//create doctor
export const create = async (doctorData) => {
    try {
        
        const doctor = Doctor.create(doctorData);
        return doctor;
    } catch (error) {
        console.log(error);
    }
}

//login with mobile number
export const getByMobileNumber = async (mobilenumber) => {
    try {
        const doctor = await Doctor.findOne({ where: { MobileNumber: mobilenumber } , attributes:{ exclude: ['createdAt', 'updatedAt'] } });
        return doctor;
    } catch (error) {
        console.log(error);
        return
    }
}



// get doctor 
export const getDoctor = async (doctorID, senseHospitalID) => {
    try {
      
        const doctor = await Doctor.findOne({ where: { SenseDoctorID: doctorID, SenseHospitalID: senseHospitalID } });
        return doctor;
        //return await PatientMapper.toDetailsDto(patient);

    } catch (error) {
        console.log(error);
        return
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
        return 'deleted successfully'

    } catch (error) {
        console.log(error);
        return 'not deleted, error occured'
    }
}

//get doctors
export const getAllDoctorsByEnterpriseID = async (enterpriseID) => {
    try {

        //const doctors = await Doctor.findAll({ where: {SenseHospitalID : enterpriseID }, attributes:{exclude: ['createdAt', 'updatedAt']}})
        const doctors = await Doctor.findAll({ where: {SenseHospitalID : enterpriseID }})
        return doctors;
        
    } catch (error) {
        console.log(error);
        return 
    }
}


//search doctor
export const searchDoctor = async (query) => {
    try {

        const doctor = await Doctor.findAll({ where : { FirstName: query }})
        return doctor
        
    } catch (error) {
        console.log(error);
        return 'not found'
    }
}


