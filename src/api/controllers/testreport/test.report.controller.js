import * as testReportService from '../../../services/testreport/test.report.service.js'
import { uploadFileObject } from '../../../modules/storage/aws.s3.storage.service.js';
import crypto from 'crypto';




//create test report
export const create = async (request, response) => {
    try {

        if (!request.file) return response.status(200).json({ message: 'No file' });

        const randomFileName = (bytes = 16) => crypto.randomBytes(bytes).toString('hex');
        const key = randomFileName()
       // console.log(key);
        const keyString = key + request.file.originalname;
       // console.log(keyString); 
        let buffer = request.file.buffer
       
        let uploads = await uploadFileObject(buffer, keyString);
        console.log(uploads);
        //logo = uploads.Location;
        //key = uploads.key;



        response.status(200).send("ok")

    } catch (error) {
        console.log(error);
    }
}


//get test report
export const getTestReport = async (request, response) => {
    try {

    } catch (error) {
        console.log(error);
    }
}