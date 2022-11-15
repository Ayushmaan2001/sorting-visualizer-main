const express = require('express');
const path = require('path');
const tmp = require('tmp-promise');
const bodyParser = require("body-parser");
const fs = require('fs')
const { readFileSync, promises: fsPromises } = require('fs');
const app = express();
const cors = require('cors');
app.use(bodyParser.json());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;
const {
    Splitter,
    Merger,
    FileInputStream,
    FileOutputStream
} = require('exmes');
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,       
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
app.use(express.static(path.resolve(__dirname, '../../build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../build'));
});

async function run() {
    const dir = await tmp.dir({ unsafeCleanup: true }); // used to store the sorted groups 
    console.log('Using temporary directory:', dir.path);

    try {
        const comparator = (x, y) => Number(x) - Number(y); // x and y are always strings
        const separator = ' '; // the string used to separate each item

        const inputStream = new FileInputStream('text/input.txt', separator);

        const splitter = new Splitter({
            maxGroupSize: 10, // maximum number of items in a group
            groupOutputStreamCreator: index => new FileOutputStream(`${dir.path}/group-${index}`, separator), // how to create a file for each sorted group
            comparator
        });

        const sortedGroupsInputStreams = await splitter.splitAndOutputSortedGroups(inputStream);

        const outputStream = new FileOutputStream('text/output.txt', separator);
        const merger = new Merger(comparator);
        await merger.merge(sortedGroupsInputStreams, outputStream);
    } catch (err) {
        console.error('Error occured while sorting', err);
    } finally {
        dir.cleanup();
        console.log('Temporary directory deleted');
    }
}

function WriteFiles(array){
    fs.truncate('text/input.txt',0,() => {});
    var file = fs.createWriteStream('text/input.txt');
    for (let i = 0; i < array.length; i++) {
        file.write(array[i] + ' ')
    }
    file.end();
}
let temp = [];
function syncReadFile(filename) {
    fs.truncate(filename, 0, () => { });
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

app.post('/k_way_external_merge_sort',(req,res) => {
    let compute_array = req.body.JSONObject;
    WriteFiles(compute_array);
    run();
    res.send('finally')
})

app.get('/k_way_external_sort_output',(req,res) => {
    let output_array = syncReadFile('text/output.txt');
    res.send(output_array);
})

app.listen(PORT,() => {
    console.log('running');
})