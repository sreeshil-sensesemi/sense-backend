import { hexExtraction } from "../../helpers/hex.data.extraction.js";   






 
export const create = async (request, response) => {
    try {

        let context = request.body.context;
        let headerData = request.body.data.slice(0, 54);
        console.log(headerData);

        const extractedData = hexExtraction(headerData, context);
        console.log(extractedData);

        response.status(200).json({extractedData: extractedData, hexData: request.body.data});
        
    } catch (error) {
        console.log(error);
        response.status(500).json({message: 'server error'})
    }
}








// export const createBpRecord = async (request, response) => {
//     try {
//         let context = 'BP'
//         let bpHeaderData = request.body.data.slice(0, 54);

//         const extractedData = hexExtraction(bpHeaderData, context)

        
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const createBgRecord = async (request, response) => {
//     try {
//         let context = 'BG'
//         let bgHeaderData = request.body.data.slice(0, 54);

//         const extractedData = hexExtraction(bgHeaderData, context)
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const createSpo2Record = async (request, response) => {
//     try {
//         let context = 'SPO2'
//         let spo2HeaderData = request.body.data.slice(0, 54);

//         const extractedData = hexExtraction(spo2HeaderData, context)

//     } catch (error) {
//         console.log(error);
//     }
// }

// export const createEcgRecord = async (request, response) => {
//     try {
//         let context = 'ECG'
//         let ecgHeaderData = request.body.data.slice(0, 54);

//         const extractedData = hexExtraction(ecgHeaderData, context)
        
//     } catch (error) {
//         console.log(error);
//     }
// }

// export const createBodyTempRecord = async (request, response) => {
//     try {
//         let context = 'Body-Temp'
//         let bodyTempHeaderData = request.body.data.slice(0, 54);

//         const extractedData = hexExtraction(bodyTempHeaderData, context)
        
//     } catch (error) {
//         console.log(error);
//     }
// }