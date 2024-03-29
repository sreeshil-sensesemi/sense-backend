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
            HeartRate: request.body.heartrate,
            Height: request.body.height,
            Weight: request.body.weight,
            Date: request.body.date
        }
        const manualData = await manualVitalService.create(manualVitals);

        if (!manualData) return response.status(200).json({success: false, message: "not created error"})
       
        response.status(200).json({success: true, message: "manual entry created successfully"})
        
    } catch (error) {
        console.log(error);
        response.status(500).json({success: false, message: "server error"})
    }
}


//get manual vitals by patient id
export const getManualVitalsByPatientId = async (request, response) => {
    try {
      
       const context = request.query.context;
       const patientid = request.query.id;

        
        const manualVitals = await manualVitalService.getManualVitalsById(context, patientid);

        if (manualVitals.length == 0) return response.status(200).json({message: "data not found"})

        //response.status(200).json({data: manualVitals})
        response.status(200).send(manualVitals)
        
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
        const sensepatientID = request.params.id;

        await manualVitalService.deleteManualVitalByPatientId(sensepatientID);

    } catch (error) {
        
    }
}


//get all manual vital of patient
export const getAllVitals = async (request, response) => {
    try {
        const patientid = request.query.id;
        const date = request.query.date;
       

        const manualVitals = await manualVitalService.getAllVitals(patientid,date);

        if (!manualVitals) return response.status(200).json({error: true, message: "data not found"});

        response.status(200).json({ error: false, data: manualVitals })
       
    } catch (error) {
        console.log(error);
    }
}


