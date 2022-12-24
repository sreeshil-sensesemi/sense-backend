import Joi from "joi";




export const registerValidator = (data) => {

    const registerSchema = Joi.object({
        sensepatientID: Joi.string().required().length(18).label("Sense Patient ID"),
        systolicBP: Joi.number().required().label("Systolic BP"),
        diastolicBP: Joi.string().required().label("Diastolic BP"),
        fastingbloodsugar: Joi.string().required().label("Fasting Blood Sugar"),
        postprandialBG: Joi.string().required().label("PostPrandial BG"),
        randombloodsugar: Joi.string().required().label("Random Blood Sugar"),
        bloodoxygen: Joi.number().integer().required().label("Blood Oxygen"),
        bodytemperature: Joi.number().integer().required().label("Body Temperature"),
        ECG: Joi.string().required().label("ECG"),
        height: Joi.string().required().length(10).label("Height"),
        weight: Joi.string().required().label("Weight"),

    });

    return registerSchema.validate(data);
}