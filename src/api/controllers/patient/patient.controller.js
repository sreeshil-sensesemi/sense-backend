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
            return handleFailure(request, response, 'Input validation erorr', 200, error)
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
            Height: request.body.height,
            Weight: request.body.weight,
            Smoking: request.body.smoking,
            Alcohol: request.body.alcohol,
            Diabetes: request.body.diabetes,
            ChronicKidneyDisease: request.body.chronickidneydisease,
            Epilepsy: request.body.epilepsy,
            Cardiac: request.body.cardiac,
            Cancer: request.body.cancer,
        }

        const patient = await patientService.create(patientData);
        response.status(200).json({registered: true, message: "patient is registered successfully"})


    } catch (error) {
        console.log(error);
        response.status(500).json({registered: false, message: "server error"});
    }
}



// search patient
export const searchPatient = async (request, response) => {
    try {
       
        const searchQuery = request.query.mobile;

        const patient = await patientService.searchPatient(searchQuery);

        if (!patient) response.status(200).json({error: true, message: "patient not found"})
        
        response.status(200).json({error: false, data: patient})

    } catch (error) {
        console.log(error);
        response.status(500).json({error: true, message: "server error"});
    }
}