import { Writable } from 'stream';
import { createWriteStream } from 'fs';

import { InputStream } from './inputStream';
import { FileInputStream } from './inputStream';

export interface OutputStream {

    write(value: string): Promise<void>;

    batchWrite(values: Array<string>): Promise<void>;

    end();

    getInputStream(): InputStream;
}

export class FileOutputStream implements OutputStream {

    private writable: Writable;
    private firstWrite: boolean = true;

    constructor(readonly path: string, readonly separator: string) {
        this.writable = createWriteStream(path);
    }

    write(value: string): Promise<void> {
        return new Promise((resolve: Function) => {
            const prefix: string = this.firstWrite ? '' : this.separator;
            this.writable.write(prefix + value, resolve);
            this.firstWrite = false;
        });
    }

    batchWrite(values: Array<string>): Promise<void> {
        return new Promise((resolve: Function) => {
            const data: string = values.join(this.separator);
            this.writable.write(data, resolve);
            this.firstWrite = false;
        });
    }

    end(): void {
        this.writable.end();
    }

    getInputStream(): FileInputStream {
        return new FileInputStream(this.path, this.separator);
    }
}