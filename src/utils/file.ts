import { exec } from 'child_process';
import * as fs from 'fs';
import os from 'os';
import util from 'util';
import axios from 'axios';
import { S3 } from 'aws-sdk';
import CONFIG from '@/config';
const execute = util.promisify(exec);

const s3 = new S3(CONFIG.AWS.PARAMS);

export const save = async (urls: string[], outputDir: string = './') => {
    const promises = urls.map(async (url) => {
        const filepath = outputDir + url.split('/').pop();
        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream',
        });
        return new Promise((resolve, reject) => {
            response.data
                .pipe(fs.createWriteStream(filepath))
                .on('error', reject)
                .once('close', () => resolve(filepath));
        });
    });
    await Promise.all(promises);
};

export const downloadFromS3 = async (key: string, outputDir: string = './') => {
    // download an object to a file from s3
    const response: any = await s3
        .getObject({
            Bucket: CONFIG.AWS.S3.BUCKET_NAME as string,
            Key: key,
        })
        .promise();
    await fs.promises.writeFile(outputDir, response.Body);
};

export const isPublic = async (url: string) => {
    try {
        const response = await axios.get(url);
        return response.status === 200;
    } catch (e) {
        return false;
    }
};

export const isPresentInS3 = async (url: string) => {
    try {
        const exists = await s3
            .headObject({
                Bucket: CONFIG.AWS.S3.BUCKET_NAME as string,
                Key: url.slice(url.indexOf('public')),
            })
            .promise()
            .then(
                () => true,
                (err) => {
                    if (err.code === 'NotFound') {
                        return false;
                    }
                    throw err;
                },
            );
        return exists;
    } catch (e) {
        return false;
    }
};

// create a directory
export const mkdir = async (dir: string) => {
    try {
        await fs.promises.mkdir(dir, { recursive: true });
    } catch (e) {
        console.log(e);
    }
};

export const objectToJSONFile = async (
    obj: { [key: string]: any },
    outputFile: string,
) => {
    const json = JSON.stringify(obj, null, 2);
    // console.log(json);
    // create the file and write to it
    // await execute(`echo "${json}" > ${outputFile}`);
    await fs.promises.writeFile(outputFile, json);
};
