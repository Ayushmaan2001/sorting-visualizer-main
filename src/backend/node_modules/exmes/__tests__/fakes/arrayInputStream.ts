import { InputStream } from '../../src/inputStream';

export class ArrayInputStream implements InputStream {

    constructor(private readonly values: Array<string>) {}

    read(): Promise<string> {
        return new Promise((resolve: Function) => {
            if (this.values.length > 0) {
                return resolve(this.values.shift());
            }

            return resolve(null);
        });
    }
}