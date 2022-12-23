import { registerValidator, verifyOtpValidator, loginValidator } from '../../validators/enterprise/enterprise.validator.js';
import { handleFailure, handleSuccess, handleError} from '../../../common/response.handler.js'
import { sendOtp, verifyOtp } from '../../helpers/otp.config.js';
import { generateEnterpriseID } from '../../helpers/enterprise.helper.js';
import * as enterpriseService from '../../../services/enterprise/enterprise.service.js';



// login with mobile number
export const loginWithMobile = async (request, response) => {
    try {
        
        const validator = loginValidator(request.body);
        
        //return if error occured
        if (validator.error) {
            const error = {
                otpsent: false,
                message: validator.error.details[0].message.replace(/"/g, "")
            }
            handleFailure(request, response, 'Input validation erorr', 400, error)
        }

        const { mobilenumber: MobileNumber } = request.body;

        //twilio otp  send
        const sendOtpRes = await sendOtp(MobileNumber);

        response.status(200).json({ otpsent: true, error: false, message: "OTP sent successfully, enter The OTP to continue" })


    } catch (error) {
        console.log(error);
        return response.status(500).json({ verified: false, error: true, message: "server error" })
    }
}

// otp verify
export const otpVerify = async (request, response) => {
    try {
        const validator = verifyOtpValidator(request.body);

        //return if error occured
        if (validator.error) {
            const error = {
                verify: false,
                message: validator.error.details[0].message.replace(/"/g, "")
            }
            handleFailure(request, response, 'Input validation erorr', 400, error)
        }
        
        const { otp, mobilenumber } = request.body;


        // twilio otp verify
        //const verifyOtpRes = await verifyOtp(otp, mobilenumber)

        //return if not verified
        //if (!verifyOtpRes) return response.status(200).json({ verified: false, error: true, message: "OTP verification failed" })

        //otp verify success
       // if (verifyOtpRes.status == 'approved' && verifyOtpRes.valid == true) {

           // const enterpriseData = await getByMobileNumber(mobilenumber);
           const enterpriseData = await enterpriseService.getByMobileNumber(mobilenumber);



            //after verification send hospital data if hospital is registered
            if (enterpriseData) return response.status(200).json({ verified: true, isExist: true, error: false, hospitalData: hospitalData, message: "OTP verification success, Logged In" })


            response.status(200).json({ verified: true, isExist: false, error: false, message: "OTP verification success , Not registerd : re-direct to register page" })

       // } else {
            // return if otp verify failed (wrong otp)
           // return response.status(200).json({ verified: false, error: true, message: "OTP verification failed " })
       // }



    } catch (error) {
        console.log(error);
        return response.status(500).json({ verified: false, error: true, message: "server error" })
    }
}


// enterprise register
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

        const {
            hospitalname: HospitalName,
            mobilenumber: MobileNumber,
            hospitaltype: HospitalType,
            governmentundertaking: GovernmentUndertaking,
            state: State,
            city: City,
            address: Address,
            pin: Pin,
            otp: OTP

        } = request.body;

        const Email = request.body.email ? request.body.email : null;
        const Website = request.body.website ? request.body.website : null;

        // generate enterprise ID
        const ID = await generateEnterpriseID();
        
        const registerData = {
            SenseHospitalID: ID,
            HospitalName,
            MobileNumber,
            Email,
            HospitalType,
            GovernmentUndertaking,
            State,
            City,
            Address,
            Pin,
            Website
        }

        const enterprise = await enterpriseService.create(registerData);
        response.send(enterprise)
        //return response.status(200).json({ registered: true, error: false, message: "Registered Successfully" });

    } catch (error) {
        console.log(error);
        response.status(500).json({ registered: false, error: true, message: "server error" })
    }
}



















// enterprise register
// export const create = async (req, res) => {
//     try {
        
//         console.log("ready success");

//         const error = {
//             message: 'this is error message'
//         }

//         const data = {
//             id: 11111,
//             name: 'abcd',
//             mobile: 12345
//         }

//         //handleFailure(req, res, 'auth error login failed', 400, error);
//         handleSuccess(req, res, 'account created successfully', 201, data);
//     } catch (error) {
//         console.log(error);
//     }
// }