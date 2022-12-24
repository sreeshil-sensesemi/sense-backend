import * as patientService from '../../services/patient/patient.service.js'



export const generatePatientID = async (hospitalID, doctorID) => {
    var patientID = Math.floor(Math.random() * 9000000000) + 1000000000;
    let patientIDStr = patientID + "";
    let sensePatientID = hospitalID + doctorID + patientIDStr;

    // check if generated ID is not exist in db
    const isIDExist = await patientService.getByPatientID(sensePatientID)

    if (isIDExist || patientIDStr.length != 10) {
        generatePatientID(hospitalID, doctorID);
    }

    return sensePatientID;
}