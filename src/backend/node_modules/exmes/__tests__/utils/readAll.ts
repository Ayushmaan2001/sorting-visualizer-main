import { InputStream } from '../../src';

export default async function (inputStream: InputStream): Promise<Array<string>> {
    let data;
    const result: Array<string> = [];

    while ((data = await inputStream.read()) !== null) {
        result.push(data);
    }

    return result;
}