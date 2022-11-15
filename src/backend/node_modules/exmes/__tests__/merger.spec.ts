import { InputStream, Merger, OutputStream } from "../src";
import { ArrayInputStream } from './fakes/arrayInputStream';
import { ArrayOutputStream } from './fakes/arrayOutputStream';
import readAll from './utils/readAll';

describe('Merger', () => {

    it('merges several sorted input streams into a sorted output stream', async () => {
        const inputStreams: Array<InputStream> = [
            new ArrayInputStream(['5', '6', '10']),
            new ArrayInputStream(['1', '5', '9']),
            new ArrayInputStream(['2', '4']),
        ];
        const outputStream: OutputStream = new ArrayOutputStream();
        const merger: Merger = new Merger((x: string, y: string) => Number(x) - Number(y));

        await merger.merge(inputStreams, outputStream);

        const resultInputStream: InputStream = outputStream.getInputStream();
        const expectedResultArray: Array<string> = ['1', '2', '4', '5', '5', '6', '9', '10'];
        const actualResultArray: Array<string> = await readAll(resultInputStream);

        expect(actualResultArray).toEqual(expectedResultArray);
    });
})