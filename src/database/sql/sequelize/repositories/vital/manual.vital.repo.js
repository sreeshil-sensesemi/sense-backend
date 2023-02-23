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
export const getManualVitalsById = async (context, patientid) => {
    try {


        switch (context) {

            case 'BP':

                const bpVitals = await ManualVital.findAll({ where: { SensePatientID: patientid }, attributes: ['SystolicBP', 'DiastolicBP', 'createdAt'] })
                return bpVitals;

            case 'HeartRate':

                const ecgVitals = await ManualVital.findAll({ where: { SensePatientID: patientid }, attributes: ['HeartRate', 'createdAt'] });
                return ecgVitals;

            case 'BG':

                const bgVitals = await ManualVital.findAll({ where: { SensePatientID: patientid }, attributes: ['FastingBloodSugar', 'PostPrandialBG', 'RandomBloodSugar', 'createdAt'] });
                return bgVitals;

            case 'SPO2':

                const bloodOxygenVitals = await ManualVital.findAll({ where: { SensePatientID: patientid }, attributes: ['BloodOxygen', 'createdAt'] });
                return bloodOxygenVitals;

            case 'TEMP':

                const tempVitals = await ManualVital.findAll({ where: { SensePatientID: patientid }, attributes: ['BodyTemperature', 'createdAt'] });
                return tempVitals;

            default:
                return []

        }

    } catch (error) {
        console.log(error);
        return []
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
        await ManualVital.destroy({ where: { SensePatientID: sensepatientID } });

    } catch (error) {

    }
}