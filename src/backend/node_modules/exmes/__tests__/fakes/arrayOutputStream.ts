import { OutputStream } from '../../src/outputStream';
import { ArrayInputStream } from './arrayInputStream';

export class ArrayOutputStream implements OutputStream {

    private values: Array<string> = [];

    write(value: string): Promise<void> {
        return new Promise((resolve: Function) => {
            this.values.push(value);
            resolve();
        });
    }

    batchWrite(newValues: Array<string>): Promise<void> {
        return new Promise((resolve: Function) => {
            this.values.push.apply(this.values, newValues);
            resolve();
        });
    }

    end(): void {}

    getInputStream(): ArrayInputStream {
        return new ArrayInputStream(this.values);
    }
}