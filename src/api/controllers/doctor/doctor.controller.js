import { registerValidator } from "../../validators/doctor/doctor.validator";
import { handleFailure } from "../../../common/response.handler";



//register doctor
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


        //generate doctor ID
        //const doctorID = 

    } catch (error) {
        console.log(error);
    }
}