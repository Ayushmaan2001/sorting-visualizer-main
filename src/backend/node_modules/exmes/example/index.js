const tmp = require('tmp-promise');

const { 
    Splitter, 
    Merger, 
    FileInputStream, 
    FileOutputStream 
} = require('exmes');

async function run() {
  const dir = await tmp.dir({ unsafeCleanup: true }); // used to store the sorted groups 
  console.log('Using temporary directory:', dir.path);

  try {
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
  } catch (err) {
    console.error('Error occured while sorting', err);
  } finally {
    dir.cleanup();
    console.log('Temporary directory deleted');
  }
}

run();






