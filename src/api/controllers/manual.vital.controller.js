import * as manualVitalService from '../../services/manual.vital.service.js';







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
        response.send(manualData);
        
    } catch (error) {
        console.log(error);
    }
}


//get manual vitals by patient id
export const getManualVitalsByPatientId = async (request, response) => {
    try {
        const sensepatientID = request.params.sensepatientid;
        
        const manualVitals = await manualVitalService.getManualVitalsById(sensepatientID);
        response.send(manualVitals);
        
    } catch (error) {
        console.log(error);
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