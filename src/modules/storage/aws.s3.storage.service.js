// import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
// import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

import AWS from 'aws-sdk'

//logo
const storageBucketRegion = process.env.STORAGE_BUCKET_REGION
const storageBucketName = process.env.STORAGE_BUCKET_NAME
const storageBucketAccessKey = process.env.STORAGE_BUCKET_ACCESS_KEY
const storageBucketSecretAccessKey = process.env.STORAGE_BUCKET_SECRET_ACCESS_KEY


//report/file
const testReportStorageBucketRegion = process.env.TEST_REPORT_STORAGE_BUCKET_REGION
const testReportStorageBucketName = process.env.TEST_REPORT_STORAGE_BUCKET_NAME
const testReportStorageBucketAccessKey = process.env.TEST_REPORT_STORAGE_BUCKET_ACCESS_KEY
const testReportStorageBucketSecretAccessKey = process.env.TEST_REPORT_STORAGE_BUCKET_SECRET_ACCESS_KEY


// const s3 = new S3Client({
//     credentials: {
//         accessKeyId: storageBucketAccessKey,
//         secretAccessKey: storageBucketSecretAccessKey,
//     },
//     region: storageBucketRegion
// });

//logo bucket config
const s3 = new AWS.S3({
    credentials: {
        accessKeyId: storageBucketAccessKey,
        secretAccessKey: storageBucketSecretAccessKey,
    },
    region: storageBucketRegion
});


//test report bucket config
const reportFilesS3 = new AWS.S3({
    credentials: {
        accessKeyId: testReportStorageBucketAccessKey,
        secretAccessKey: testReportStorageBucketSecretAccessKey,
    },
    region: testReportStorageBucketRegion
});


//logo upload 
export const uploadObject = async (buffer, key) => {
    try {


        const uploadedImage = await s3.upload({
            Bucket: storageBucketName,
            Key: key,
            Body: buffer,
        }).promise()

        return uploadedImage;

    } catch (error) {
        console.log(error);
    }
}


//test report/files upload

export const uploadFileObject = async (buffer, key) => {
    try {


        const uploadedFile = await reportFilesS3.upload({
            Bucket: testReportStorageBucketName,
            Key: key,
            Body: buffer,
        }).promise()

        return uploadedFile;

    } catch (error) {
        console.log(error);
    }
}







// export const storageConfig = async (buffer, key) => {
//     try {
//         //const randomImageName = 

//         const params = {
//             Bucket: storageBucketName,
//             Key: key,
//             Body: buffer,
//             // ContentType: file.mimetype,
//         }

//         const command = new PutObjectCommand(params);

//         const store = await s3.send(command);
//         console.log(store);

//     } catch (error) {
//         console.log(error);
//     }
// }


// export const getObject = async (key) => {
//     try {
//         const getObjectParams = {
//             Bucket: storageBucketName,
//             Key: key,
//         }

//         const command = new GetObjectCommand(getObjectParams);
//         const url = await getSignedUrl(s3, command);
//         return url;

//     } catch (error) {
//         console.log(error);
//     }
// }