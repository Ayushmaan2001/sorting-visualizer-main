
import { Splitter, InputStream } from '../src';
import { ArrayOutputStream } from './fakes/arrayOutputStream';
import { ArrayInputStream } from './fakes/arrayInputStream';
import readAll from './utils/readAll';

describe('Splitter', () => {

    let splitter: Splitter;

    beforeEach(() => {
        splitter = new Splitter({
            maxGroupSize: 3,
            groupOutputStreamCreator: () => new ArrayOutputStream(),
            comparator: (x: string, y: string) => Number(x) - Number(y)
        });
    });

    it('splits an input stream in sorted groups and returns an input streams for each group', async () => {
        const inputStream: InputStream = new ArrayInputStream(['8', '7', '6', '10', '9', '3', '1', '5', '4', '12', '11']);

        const sortedGroupsInputStreams: Array<InputStream> = await splitter.splitAndOutputSortedGroups(inputStream);
        expect(sortedGroupsInputStreams).toHaveLength(4);

        const [
            sortedGroupStream1, 
            sortedGroupStream2, 
            sortedGroupStream3, 
            sortedGroupStream4
        ] = sortedGroupsInputStreams;
        
        const group1: Array<string> = await readAll(sortedGroupStream1);
        expect(group1).toEqual(['6', '7', '8']);

        const group2: Array<string> = await readAll(sortedGroupStream2);
        expect(group2).toEqual(['3', '9', '10']);

        const group3: Array<string> = await readAll(sortedGroupStream3);
        expect(group3).toEqual(['1', '4', '5']);

        const group4: Array<string> = await readAll(sortedGroupStream4);
        expect(group4).toEqual(['11', '12']);
    });

    it('returns a single group when group size is bigger than stream size', async () => {
        const inputStream: InputStream = new ArrayInputStream(['8', '7']);

        const sortedGroupsInputStreams: Array<InputStream> = await splitter.splitAndOutputSortedGroups(inputStream);
        expect(sortedGroupsInputStreams).toHaveLength(1);

        const [
            sortedGroupStream1, 
        ] = sortedGroupsInputStreams;
        
        const group1: Array<string> = await readAll(sortedGroupStream1);
        expect(group1).toEqual(['7', '8']);
    });
});