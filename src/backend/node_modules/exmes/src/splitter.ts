import { InputStream } from './inputStream';
import { OutputStream } from './outputStream';

export interface SplitterOptions {
    maxGroupSize: number,
    groupOutputStreamCreator: (index: number) => OutputStream,
    comparator: (x: string, y: string) => number
}

export class Splitter {

    constructor(readonly options: SplitterOptions) {}

    async splitAndOutputSortedGroups(inputStream: InputStream): Promise<Array<InputStream>> {
        const inputStreams: Array<InputStream> = [];
        
        while (true) {
            const group: Array<string> = await this.getNextGroup(inputStream);

            if (group.length === 0) {
                break;
            }

            const groupInputStream: InputStream = await this.outputSortedGroup(group, inputStreams.length);
            inputStreams.push(groupInputStream);
        }

        return inputStreams;
    }

    private async getNextGroup(inputStream: InputStream): Promise<Array<string>> {
        const group: Array<string> = [];
        const { maxGroupSize } = this.options;

        while (group.length < maxGroupSize) {
            const value: string = await inputStream.read();

            if (value === null) {
                break;
            } 

            group.push(value);
        }

        return group;
    }

    private async outputSortedGroup(group: Array<string>, index: number): Promise<InputStream> {
        const { comparator, groupOutputStreamCreator } = this.options;

        group.sort(comparator);

        const outputStream: OutputStream = groupOutputStreamCreator(index);
        await outputStream.batchWrite(group);
        outputStream.end(); 

        return outputStream.getInputStream();
    }
}
