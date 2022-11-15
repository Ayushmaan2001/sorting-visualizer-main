import * as fs from 'fs';

import { FileOutputStream, OutputStream, InputStream } from '../src';
import { FileInputStream } from '../src';

describe('FileInputStream', () => {

    it('supports single writes according to the separator', async () => {
        const filesInfos = [
            { name: 'numbers1.txt', separator: ' ' },
            { name: 'numbers2.txt', separator: ', ' },
            { name: 'numbers3.txt', separator: '|' },
        ];

        for (const { name, separator } of filesInfos) {
            const path: string = `${__dirname}/outputFiles/${name}`;
            const outputStream: OutputStream = new FileOutputStream(path, separator);
            const array: Array<string> = ['a', 'b', 'c'];

            await outputStream.write(array[0]);
            await outputStream.write(array[1]);
            await outputStream.write(array[2]);
            outputStream.end();

            const actualData: string = fs.readFileSync(path).toString();
            const expectedData = array.join(separator);
            expect(actualData).toEqual(expectedData);
        }
    });

    it('supports batch writes according to the separator', async () => {
        const filesInfos = [
            { name: 'numbers4.txt', separator: ' ' },
            { name: 'numbers5.txt', separator: ', ' },
            { name: 'numbers6.txt', separator: '|' },
        ];

        for (const { name, separator } of filesInfos) {
            const path: string = `${__dirname}/outputFiles/${name}`;
            const outputStream: OutputStream = new FileOutputStream(path, separator);
            const array: Array<string> = ['a', 'b', 'c'];

            await outputStream.batchWrite(array);
            outputStream.end();

            const actualData: string = fs.readFileSync(path).toString();
            const expectedData = array.join(separator);
            expect(actualData).toEqual(expectedData);
        }
    });

    it('getting an input stream', async () => {
        const path: string = `${__dirname}/outputFiles/numbers7.txt`;
        const outputStream: OutputStream = new FileOutputStream(path, ' ');

        await outputStream.batchWrite(['1', '2']);
        outputStream.end();

        const inputStream: InputStream = outputStream.getInputStream();
        expect(inputStream).toBeInstanceOf(FileInputStream);
    });
});