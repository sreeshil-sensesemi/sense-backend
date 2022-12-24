import * as patientService from '../../../services/patient/patient.service.js'
import { registerValidator } from '../../validators/patient/patient.validator.js';
import { handleFailure } from '../../../common/response.handler.js';
import { generatePatientID } from '../../helpers/patient.helper.js';


//create patient
export const create = async (request, response) => {
    try {

        const validator = registerValidator(request.body);
        //return if error occured
        if (validator.error) {
            const error = {
                verify: false,
                message: validator.error.details[0].message.replace(/"/g, "")
            }
            handleFailure(request, response, 'Input validation erorr', 400, error)
        }

        //generate patient ID 
        const patientID = await generatePatientID(request.body.sensehospitalID, request.body.sensedoctorID)
        
        const patientData = {
            SensePatientID: patientID,
            SenseDoctorID: request.body.sensedoctorID,
            SenseHospitalID: request.body.sensehospitalID,
            FirstName: request.body.firstname,
            LastName: request.body.lastname,
            Age: request.body.age,
            Gender: request.body.gender,
            MobileNumber: request.body.mobile,
            City: request.body.city,
            State: request.body.state,
            SBP: request.body.SBP,
            DBP: request.body.DBP,
            Height: request.body.height,
            Weight: request.body.weight,
        }

        const patient = await patientService.create(patientData);
        response.send(patient);


    } catch (error) {
        console.log(error);
    }
}