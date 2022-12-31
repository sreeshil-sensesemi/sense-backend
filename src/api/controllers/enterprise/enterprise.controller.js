import * as enterpriseService from '../../../services/enterprise/enterprise.service.js';
import { registerValidator, verifyOtpValidator, loginValidator } from '../../validators/enterprise/enterprise.validator.js';
import { handleFailure, handleSuccess, handleError } from '../../../common/response.handler.js'
import { sendOtp, verifyOtp } from '../../helpers/otp.config.js';
import { generateEnterpriseID } from '../../helpers/enterprise.helper.js';
import { getObject, storageConfig } from '../../../modules/storage/aws.s3.storage.service.js';
import crypto from 'crypto';
import sharp from 'sharp'



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
            handleFailure(request, response, 'Input validation erorr', 200, error)
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
        const verifyOtpRes = await verifyOtp(otp, mobilenumber)

        //return if not verified
        if (!verifyOtpRes) return response.status(200).json({ verified: false, error: true, message: "OTP verification failed" })

        //otp verify success
        if (verifyOtpRes.status == 'approved' && verifyOtpRes.valid == true) {


            const enterpriseData = await enterpriseService.getByMobileNumber(mobilenumber);

            if (enterpriseData) {

                if (enterpriseData.Logo) {
                    const getObjUrl = await getObject(enterpriseData.Logo);
                    enterpriseData.Logo = getObjUrl;
                }

                return response.status(200).json({ verified: true, isExist: true, error: false, data: enterpriseData, message: "OTP verification success, Logged In" })
            }


            response.status(200).json({ verified: true, isExist: false, error: false, message: "OTP verification success , Not registerd : re-direct to register page" })

        } else {
            // return if otp verify failed (wrong otp)
            return response.status(200).json({ verified: false, error: true, message: "OTP verification failed " })
        }



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
            handleFailure(request, response, 'Input validation erorr', 200, error)
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

        let keyString = '';

        if (request.file) {

            const randomImageName = (bytes = 16) => crypto.randomBytes(bytes).toString('hex');
            const key = randomImageName()
            keyString = key + request.file.originalname;

            const buffer = await sharp(request.file.buffer).resize({ height: 1024, width: 1024, fit: 'contain' }).jpeg({ quality: 100, chromaSubsampling: '4:4:4' }).withMetadata().toBuffer();

            await storageConfig(buffer, keyString);

        }


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
            Website,
            Logo: keyString
        }

        const enterprise = await enterpriseService.create(registerData);

        if (enterprise.Logo) {

            const getObjUrl = await getObject(enterprise.Logo);
            enterprise.Logo = getObjUrl;
        }

        response.status(200).json({ registered: true, error: false, message: "Registered Successfully", data: enterprise });

    } catch (error) {
        console.log(error);
        response.status(500).json({ registered: false, error: true, message: "server error" })
    }
}



// resend otp
export const resendOtp = async (request, response) => {
    try {
        const { mobilenumber } = request.body;
        //twilio otp  send
        const sendOtpRes = await sendOtp(mobilenumber);
        response.status(200).json({ otpsent: true, error: false, message: "OTP sent successfully, enter The OTP to continue" })

    } catch (error) {
        console.log(error);
        response.status(500).json({ otpsent: false, error: true, message: "server error" })
    }
}


// get by enterprise id
export const getByEnterpriseID = async (request, response) => {
    try {
        const enterpriseID = request.params.enterpriseID;

        const enterprise = await enterpriseService.getByEnterpriseID(enterpriseID)

        if (enterprise.Logo) {

            const getObjUrl = await getObject(enterprise.Logo);
            enterprise.Logo = getObjUrl;
        }
        response.status(200).json({ data: enterprise });


    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "server error" })
    }
}


// update by enterprise id
export const updateByEnterpriseID = async (request, response) => {
    try {

    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "server error" })
    }
}


// delete by enterprise id
export const deleteByEnterpriseID = async (request, response) => {
    try {
        const enterpriseID = request.params.enterpriseID;

        await enterpriseService.deleteByEnterpriseID(enterpriseID);

    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "server error" });
    }
}












