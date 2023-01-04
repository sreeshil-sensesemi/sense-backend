import * as manualVitalService from '../../../services/vital/manual.vital.service.js'





//create manual entry
export const create = async (request, response) => {
    try {
        //validation

        const manualVitals = {
            SensePatientID: request.body.sensepatientID,
            SystolicBP: request.body.bp.sys,
            DiastolicBP: request.body.bp.dia,
            FastingBloodSugar: request.body.bg.fbs,
            PostPrandialBG: request.body.bg.pp,
            RandomBloodSugar: request.body.bg.rbs,
            BloodOxygen: request.body.bloodoxygen,
            BodyTemperature: request.body.bodytemperature,
            ECG: request.body.ecg,
            Height: request.body.height,
            Weight: request.body.weight,
        }
        const manualData = await manualVitalService.create(manualVitals);
       
        response.status(200).json({success: true, message: "manual entry created successfully"})
        
    } catch (error) {
        console.log(error);
        response.status(500).json({success: false, message: "server error"})
    }
}


//get manual vitals by patient id
export const getManualVitalsByPatientId = async (request, response) => {
    try {
        const sensepatientID = request.params.sensepatientid;
        
        const manualVitals = await manualVitalService.getManualVitalsById(sensepatientID);

        response.status(200).json({data: manualVitals})
        
    } catch (error) {
        console.log(error);
        response.status(500).json({message: "server error"})
    }
}

// update manual vital by patient id
export const updateManualVitalByPatientId = async (request, response) => {
    try {
        
    } catch (error) {
        
    }
}


// delete manual vital by patient id
export const deleteManualVitalByPatientId = async (request, response) => {
    try {
        const sensepatientID = request.params.sensepatientid;

        await manualVitalService.deleteManualVitalByPatientId(sensepatientID);

    } catch (error) {
        
    }
}