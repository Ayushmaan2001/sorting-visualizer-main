import { FileInputStream, InputStream } from '../src';
import readAll from './utils/readAll';

describe('FileInputStream', () => {

    it('throws an error on reads for non-existing files', async () => {
      const inputStream: InputStream = new FileInputStream(`${__dirname}/inputFiles/non-existing.txt`, ' ');
      const expectedCode: string = 'ENOENT';
      let actualCode: string;

      try {
          await inputStream.read();
      } catch(error) {
          actualCode = error.code;
      }
      expect(actualCode).toBe(expectedCode);
    });

    it('returns data according to the separator till it encounters null', async () => {
        const filesInfos = [
          { name: 'numbers1.txt', separator: ' ' },
          { name: 'numbers2.txt', separator: ', ' },
          { name: 'numbers3.txt', separator: '|' },
        ];

        for (const { name, separator } of filesInfos) {
            const inputStream: InputStream = new FileInputStream(`${__dirname}/inputFiles/${name}`, separator);
            const actualResult: Array<string> = await readAll(inputStream);
            const expectedResult: Array<string> = ['1', '2', '3'];

            expect(actualResult).toEqual(expectedResult);
        }
    });

    it('returns null on reads made after stream has been exhausted', async () => {
        const inputStream: InputStream = new FileInputStream(`${__dirname}/inputFiles/numbers1.txt`, ' ');
        
        await readAll(inputStream);

        expect(await inputStream.read()).toBe(null);
    });
});