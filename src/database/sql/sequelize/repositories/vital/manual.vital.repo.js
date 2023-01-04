import { ManualVital } from "../../models/manual.vital.model.js";



// create manual entry
export const create = async (manualVitals) => {
    try {
        const manualData = await ManualVital.create(manualVitals);
        return manualData;
    } catch (error) {
        console.log(error);
    }
}


// get manual vitals by patient id
export const getManualVitalsById = async (sensepatientID) => {
    try {
        const manualVitals = await ManualVital.findAll({ where: { SensePatientID: sensepatientID } });
        return manualVitals;
    } catch (error) {
        console.log(error);
    }
}

// upadte manual vitals by patient id
export const updateManualVitalByPatientId = async (sensepatientID, data) => {
    try {
        
    } catch (error) {
        
    }
}
// delete manual vitals by patient id
export const deleteManualVitalByPatientId = async (sensepatientID) => {
    try {
        await ManualVital.destroy({ where: { SensePatientID: sensepatientID }});
        
    } catch (error) {
        
    }
}