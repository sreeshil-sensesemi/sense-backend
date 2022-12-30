import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'


const storageBucketRegion = process.env.STORAGE_BUCKET_REGION
const storageBucketName = process.env.STORAGE_BUCKET_NAME
const storageBucketAccessKey = process.env.STORAGE_BUCKET_ACCESS_KEY
const storageBucketSecretAccessKey = process.env.STORAGE_BUCKET_SECRET_ACCESS_KEY


const s3 = new S3Client({
    credentials: {
        accessKeyId: storageBucketAccessKey,
        secretAccessKey: storageBucketSecretAccessKey,
    },
    region: storageBucketRegion
});


export const storageConfig = async (buffer,key) => {
    try {
        //const randomImageName = 
       
        const params = {
            Bucket: storageBucketName,
            Key: key,
            Body: buffer,
            // ContentType: file.mimetype,
        }
        
        const command = new PutObjectCommand(params);

        const store = await s3.send(command);
        console.log(store);

    } catch (error) {
        console.log(error);
    }
}


export const getObject = async (key) => {
    try {
        const getObjectParams = {
            Bucket: storageBucketName,
            Key: key,
        }

        const command = new GetObjectCommand(getObjectParams);
        const url = await getSignedUrl(s3, command);
        return url;
        
    } catch (error) {
        console.log(error);
    }
}