# exmes

You can use this module to sort large files that cannot be fitted in memory by using external merge sort (http://www.techiedelight.com/external-merge-sort).

In short the way the algorithm works is that the large input file is split into several groups which are sorted in RAM and saved to disk. Then all these sorted files are merged using a heap into the output file.

## Installation

`npm install --save exmes`

## How to use it

```javascript
const { 
    Splitter, 
    Merger, 
    FileInputStream, 
    FileOutputStream 
} = require('exmes');

const comparator = (x, y) => Number(x) - Number(y); // x and y are always strings
const separator = ' '; // the string used to separate each item

const inputStream = new FileInputStream('numbers.txt', separator); 

const splitter = new Splitter({
    maxGroupSize: 1000, // maximum number of items in a group
    groupOutputStreamCreator: index => new FileOutputStream(`${dir.path}/group-${index}`, separator), // how to create a file for each sorted group
    comparator
});

const sortedGroupsInputStreams = await splitter.splitAndOutputSortedGroups(inputStream);

const outputStream = new FileOutputStream('sorted-numbers.txt', separator);
const merger = new Merger(comparator);
await merger.merge(sortedGroupsInputStreams, outputStream);
```

In the `example` folder you will an application which sorts a sample file containing numbers.

### Running the example

Run: `cd ./example && npm install && npm start`

## Test

To run the tests execute: `npm install && npm test`.