const pull = require('pull-stream');
const split = require('pull-split');
const file = require('pull-file');

type EndResult = boolean | Error;

export interface InputStream {

    read(): Promise<string | null>;
}

export class FileInputStream implements InputStream {

    private get: Function;
    private cachedEndResult: EndResult;

    constructor(
        readonly path: string, 
        readonly separator: string, 
        readonly bufferSize: number = 100
    ) {
        this.get = pull(
            file(path, { bufferSize }),
            split(separator)
        );
    }

    private fulfillWithResult(endResult: EndResult, resolve: Function, reject: Function): void {
        if (endResult === true) {
            return resolve(null);
        } 

        return reject(endResult);
    }

    read(): Promise<string> {
        return new Promise((resolve: Function, reject: Function) => {
            if (this.cachedEndResult) {
                return this.fulfillWithResult(this.cachedEndResult, resolve, reject);
            }

            this.get(null, (endResult: EndResult, data: string) => {
                if (endResult) {
                    this.cachedEndResult = endResult;
                    return this.fulfillWithResult(endResult, resolve, reject);
                }
                
                return resolve(data);
            });
        });
    }
}