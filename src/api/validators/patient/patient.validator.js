import Joi from "joi";


export const registerValidator = (data) => {

    const registerSchema = Joi.object({
        sensedoctorID: Joi.string().required().length(3).label("Doctor ID"),
        sensehospitalID: Joi.string().required().length(5).label("Hospital ID"),
        name: Joi.string().required().label("Name"),
        age: Joi.string().required().label("Age"),
        mobile: Joi.string().required().length(10).label("Mobile Number"),
        city: Joi.string().required().label("City"),
        height: Joi.string().required().label("Height"),
        weight: Joi.string().required().label("Weight"),
        gender: Joi.string().required().label("Gender"),
        smoking: Joi.string().required().label("Smoking"),
        alcohol: Joi.string().required().label("Alcohol"),
        diabetes: Joi.string().required().label("Diabetes"),
        chronickidneydisease: Joi.string().required().label("Chronic Kidney Disease"),
        epilepsy: Joi.string().required().label("Epilepsy"),
        cardiac: Joi.string().required().label("Cardiac"),
        cancer: Joi.string().required().label("Cancer"),
    })

    return registerSchema.validate(data);
}


export const loginValidator = (data) => {

    const loginSchema = Joi.object({
        mobilenumber: Joi.string().required().length(10).label("Mobile Number")
    });

    return loginSchema.validate(data);
}


export const verifyOtpValidator = (data) => {

    const otpSchema = Joi.object({
        otp: Joi.string().required().length(4).label("OTP"),
        mobilenumber: Joi.string().required().length(10).label("Mobile Number"),
    });

    return otpSchema.validate(data);
}