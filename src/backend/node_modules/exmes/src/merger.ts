import { Heap } from 'ts-heap';

import { OutputStream } from './outputStream';
import { InputStream } from './inputStream';

interface HeapItem {
    value: string
    inputStreamIndex: number;
}

export class Merger {

    private heap: Heap<HeapItem>;

    constructor(readonly comparator: (x: string, y: string) => number) {
        this.heap = new Heap<HeapItem>(
            ({ value: x }: HeapItem, { value: y }: HeapItem) => comparator(x, y)
        );
    }

    async merge(inputStreams: Array<InputStream>, outputStream: OutputStream): Promise<void> {
        await this.addFirstValuesToHeap(inputStreams);
        
        while (!this.heap.isEmpty) {
            const { value, inputStreamIndex } = this.heap.pop();
            await outputStream.write(value);
            
            const inputStream: InputStream = inputStreams[inputStreamIndex];
            const nextValue: string = await inputStream.read();

            if (nextValue !== null) {
                this.heap.add({ value: nextValue, inputStreamIndex })
            }
        }

        outputStream.end();
    }

    private async addFirstValuesToHeap(inputStreams: Array<InputStream>): Promise<void> {
        for (let index = 0; index < inputStreams.length; index += 1) {
            const inputStream: InputStream = inputStreams[index];
            const value: string = await inputStream.read();

            this.heap.add({ value, inputStreamIndex: index })
        }
    }
}