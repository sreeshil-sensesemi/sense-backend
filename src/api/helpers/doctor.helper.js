import * as doctorService from '../../services/doctor/doctor.service.js'


export const generateDoctorID = async (senseHospitalID) => {

    var doctorID = Math.floor(Math.random()*(999-100+1)+100);
    let doctorIDStr = doctorID + ""
    
    // check if generated ID is unique
    const isIDExist = await doctorService.getByDoctorID(doctorID, senseHospitalID)

    if (isIDExist || doctorIDStr.length != 3) {
        generateDoctorID(senseHospitalID);
    }

    return doctorIDStr;
}