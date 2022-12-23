import Twilio  from 'twilio';

const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const SERVICE_SID = process.env.TWILIO_SERVICE_SID;
const client = new Twilio(ACCOUNT_SID, AUTH_TOKEN);



export const sendOtp = (mobileNumber) => {

    const res = client.verify
        .services(SERVICE_SID)
        .verifications.create({
            to: `+91${mobileNumber}`,
            channel: "sms"
        })
    return res;
}


export const verifyOtp = (otp, mobileNumber) => {

    const res = client.verify
    .services(SERVICE_SID)
    .verificationChecks.create({
        to: `+91${mobileNumber}`, 
        code: otp
    })

    return res;
}