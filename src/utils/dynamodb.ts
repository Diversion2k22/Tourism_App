import { DynamoDB } from 'aws-sdk';

import CONFIG from '@/config';

const ddb = new DynamoDB(CONFIG.AWS.PARAMS);

export const PartiQL = async (query: string, values: any) => {
    let params = {
        Statement: query,
        Parameters: values,
    };
    // execute the query
    const { Items = [] } = await ddb.executeStatement(params).promise();
    // Unmarshall the response i.e. convert from DynamoDB response to JSON
    const data = Items.map(DynamoDB.Converter.unmarshall as any);
    return data;
};

export abstract class Tables {}
