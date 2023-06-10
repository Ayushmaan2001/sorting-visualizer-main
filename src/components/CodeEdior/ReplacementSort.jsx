import React from 'react'
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor';

let Cpp = `
/*  Prerequisites:
    create two directories
    input and output 
    verify names are exactly the same
*/
#include <iostream>
#include <algorithm>
#include <chrono>
#include <random>
#include <fstream>
#include <vector>
#include <queue>
// #include <climits>
using namespace std;


void generateInput(int length) { 
    ofstream input_file("./input/input.txt", ios::out);
    if(input_file.fail()) {
        cerr << "Unable to open generate input file\n";
        exit(1);
    }
    mt19937 rng(chrono::steady_clock::now().time_since_epoch().count());
    for(int i = 0; i < length; i++) {
        int x = uniform_int_distribution<int>(1, 100)(rng);
        input_file << x;
        if(i + 1 < length) {
            input_file << endl;
        }
    }
    input_file.close();
}

int generateRuns(int runSize) {
    int runs = 0;
    ifstream input_file("./input/input.txt", ios::in);
    if(input_file.fail()) {
        cerr << "Unable to generate runs(input file error)\n";
        exit(1);
    }
    vector<int> extra;
    int x;
    priority_queue<int, vector<int>, greater<int>> pq;
    while(!input_file.eof() or !extra.empty()){
        string path = "./output/run" + to_string(runs++) + ".txt";
        ofstream ofile(path, ios::out);
        bool first = true;
        while(!extra.empty()) {
            pq.push(extra.back());
            extra.pop_back();
        }
        while(!input_file.eof() and pq.size() < runSize) {
            input_file >> x;
            pq.push(x);
        }
        while(!pq.empty() and pq.size() + extra.size() <= runSize) {
            int val = pq.top();
            pq.pop();
            if(first){
                ofile << val;
                first = false;
            }
            else{
                ofile << endl << val;
            }


            if(!input_file.eof()){
                int next_int;
                input_file >> next_int;
                if(next_int >= val) {
                    pq.push(next_int);
                }
                else {
                    extra.push_back(next_int);
                }
            }
        }
        ofile.close();
    }
    input_file.close();
    return runs;
}



void kWayMerge(int runs) {
    ifstream run_file[runs];
    for(int i = 0; i < runs; i++) {
        string file_path = "./output/run" + to_string(i) + ".txt";
        run_file[i].open(file_path, ios::in);
        if(run_file[i].fail()) {
            cerr << "Unable to open runFile" << i << endl;
            exit(1);
        }
    }
    ofstream ofile("./output/output.txt", ios::out);
    if(ofile.fail()) {
        cerr << "Unable to open output file\n";
        exit(1);
    }
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq;
    for(int i = 0; i < runs; i++) {
        int x;
        run_file[i] >> x;
        pq.push({x, i});
    }   
    while(!pq.empty()) {
        int value = pq.top().first;
        int file_id = pq.top().second;
        pq.pop();
        ofile << value << endl;
        if(!run_file[file_id].eof()){
            int x;
            run_file[file_id] >> x;
            pq.push({x, file_id});
        }
    }
    for(int i = 0; i < runs; i++) {
        run_file[i].close();
    } 
    ofile.close();
}

int main() {
    int length = 1000;
    generateInput(length);
    int runSize = 100;
    int runs = generateRuns(runSize);
    kWayMerge(runs);
    return 0;
}`,
Java=``,
Python=``,
Javascript=``,
C=`#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

#define MEMORY_SIZE 10

typedef struct {
    int value;
    int fileNum;
} Record;

int comparator(const void* a, const void* b) {
    const Record* recordA = (const Record*)a;
    const Record* recordB = (const Record*)b;

    if (recordA->value < recordB->value)
        return -1;
    else if (recordA->value > recordB->value)
        return 1;
    else
        return 0;
}


void merge(Record* outputBuffer, int bufferSize, FILE** files, int numFiles) {
    int i, j;
    Record minRecord;
    int minIndex;
    
    for (i = 0; i < bufferSize; i++) {
        minRecord.value = INT_MAX;
        minIndex = -1;

        for (j = 0; j < numFiles; j++) {
            if (files[j] != NULL && files[j] != EOF) {
                Record record;
                fread(&record, sizeof(Record), 1, files[j]);

                if (record.value < minRecord.value) {
                    minRecord = record;
                    minIndex = j;
                }
            }
        }

        if (minIndex != -1) {
            outputBuffer[i] = minRecord;
            fseek(files[minIndex], sizeof(Record), SEEK_CUR);
        }
    }
}

void replacementSelectionSort(FILE* input, FILE* output) {
    Record memory[MEMORY_SIZE];
    Record outputBuffer[MEMORY_SIZE];
    FILE** files = (FILE**)malloc(MEMORY_SIZE * sizeof(FILE*));
    int numFiles = 0;
    int i, j;

    for (i = 0; i < MEMORY_SIZE; i++)
        files[i] = NULL;

    while (!feof(input)) {
        for (i = 0; i < MEMORY_SIZE && !feof(input); i++) {
            Record record;
            fread(&record, sizeof(Record), 1, input);
            memory[i] = record;
        }

        if (i < MEMORY_SIZE)
            i--;

        qsort(memory, i, sizeof(Record), comparator);

        FILE* tempFile = tmpfile();
        files[numFiles++] = tempFile;

        for (j = 0; j < i; j++)
            fwrite(&memory[j], sizeof(Record), 1, tempFile);

        rewind(tempFile);
    }

    merge(outputBuffer, MEMORY_SIZE, files, numFiles);

    while (numFiles > 0) {
        fwrite(outputBuffer, sizeof(Record), MEMORY_SIZE, output);
        merge(outputBuffer, MEMORY_SIZE, files, numFiles);
    }

    for (i = 0; i < numFiles; i++)
        fclose(files[i]);

    free(files);
}
`,
C_opt = `#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

#define MEMORY_SIZE 10

typedef struct {
    int value;
    int fileNum;
} Record;

int comparator(const void* a, const void* b) {
    const Record* recordA = (const Record*)a;
    const Record* recordB = (const Record*)b;

    if (recordA->value < recordB->value)
        return -1;
    else if (recordA->value > recordB->value)
        return 1;
    else
        return 0;
}

void merge(Record* outputBuffer, int bufferSize, FILE** files, int numFiles) {
    int i, j;
    Record minRecord;
    int minIndex;
    
    for (i = 0; i < bufferSize; i++) {
        minRecord.value = INT_MAX;
        minIndex = -1;

        for (j = 0; j < numFiles; j++) {
            if (files[j] != NULL && files[j] != EOF) {
                Record record;
                fread(&record, sizeof(Record), 1, files[j]);

                if (record.value < minRecord.value) {
                    minRecord = record;
                    minIndex = j;
                }
            }
        }

        if (minIndex != -1) {
            outputBuffer[i] = minRecord;
            fseek(files[minIndex], sizeof(Record), SEEK_CUR);
        }
    }
}

void replacementSelectionSort(FILE* input, FILE* output) {
    Record memory[MEMORY_SIZE];
    Record outputBuffer[MEMORY_SIZE];
    FILE** files = (FILE**)malloc(MEMORY_SIZE * sizeof(FILE*));
    int numFiles = 0;
    int i, j;

    for (i = 0; i < MEMORY_SIZE; i++)
        files[i] = NULL;

    while (!feof(input)) {
        int recordsRead = fread(memory, sizeof(Record), MEMORY_SIZE, input);
        qsort(memory, recordsRead, sizeof(Record), comparator);

        FILE* tempFile = tmpfile();
        files[numFiles++] = tempFile;

        fwrite(memory, sizeof(Record), recordsRead, tempFile);
        rewind(tempFile);
    }

    merge(outputBuffer, MEMORY_SIZE, files, numFiles);

    while (numFiles > 0) {
        fwrite(outputBuffer, sizeof(Record), MEMORY_SIZE, output);
        merge(outputBuffer, MEMORY_SIZE, files, numFiles);
    }

    for (i = 0; i < numFiles; i++)
        fclose(files[i]);

    free(files);
}
`
function ReplacementSort() {
  return (
    <React.Fragment>
        <Row className='bg'>
          <div className='desc'>
      <Col span={60} style={{ color: 'white' }}><h1 style={{ color: 'orange' }}>Description</h1>
        <h3 style={{ color: 'white' }}>A better approach is to use an algorithm called replacement selection that, on average, creates runs of 2M records in length. Replacement selection is actually a slight variation on the Heapsort algorithm. The fact that Heapsort is slower than Quicksort is irrelevant in this context because I/O time will dominate the total running time of any reasonable external sorting algorithm. Building longer initial runs will reduce the total I/O time required.
</h3>
        <h3 style={{ color: 'white' }}>Replacement selection views RAM as consisting of an array of size M in addition to an input buffer and an output buffer. (Additional I/O buffers might be desirable if the operating system supports double buffering, because replacement selection does sequential processing on both its input and its output.) Imagine that the input and output files are streams of records. Replacement selection takes the next record in sequential order from the input stream when needed, and outputs runs one record at a time to the output stream. Buffering is used so that disk I/O is performed one block at a time. A block of records is initially read and held in the input buffer. Replacement selection removes records from the input buffer one at a time until the buffer is empty. At this point the next block of records is read in. Output to a buffer is similar: Once the buffer fills up it is written to disk as a unit.
</h3>
        <h3 style={{ color: 'white' }}>Replacement selection works as follows. Assume that the main processing is done in an array of size M records.

1. Fill the array from disk. Set LAST = M-1.

2. Build a min-heap. (Recall that a min-heap is defined such that the record at each node has a key value less than the key values of its children.)

3. Repeat until the array is empty:

    a. Send the record with the minimum key value (the root) to the output buffer.

    b. Let R be the next record in the input buffer. If R ‘s key value is greater than the key value just output …

        i. Then place R at the root.

        ii. Else replace the root with the record in array position LAST, and place R at position LAST. Set LAST = LAST - 1.

    c. Sift down the root to reorder the heap.
</h3>
        <h3 style={{ color: 'white' }}>When the test at step 3(b) is successful, a new record is added to the heap, eventually to be output as part of the run. As long as records coming from the input file have key values greater than the last key value output to the run, they can be safely added to the heap. Records with smaller key values cannot be output as part of the current run because they would not be in sorted order. Such values must be stored somewhere for future processing as part of another run. However, because the heap will shrink by one element in this case, there is now a free space where the last element of the heap used to be! Thus, replacement selection will slowly shrink the heap and at the same time use the discarded heap space to store records for the next run. Once the first run is complete (i.e., the heap becomes empty), the array will be filled with records ready to be processed for the second run.

It should be clear that the minimum length of a run will be M records if the size of the heap is M, because at least those records originally in the heap will be part of the run. Under good conditions (e.g., if the input is sorted), then an arbitrarily long run is possible. In fact, the entire file could be processed as one run. If conditions are bad (e.g., if the input is reverse sorted), then runs of only size M result.</h3>
      </Col>
      </div>
          <div className="mobile-table">
      <Col span={8}>
        <h1 style={{ color: 'white' }}>Asymptotic Complexity</h1>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Average Time Complexity</th>
              <th>Θ(nlogn)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Best Case Time Complexity</td>
              <td>Ω(nlogn)</td>
            </tr>
            <tr>
              <td>Worst Case Time Complexity</td>
              <td>O(nlogn)</td>
            </tr>
            <tr>
              <td>Space Complexity</td>
              <td>O(run_size)</td>
            </tr>
          </tbody>
        </table>
      </Col>
      </div>
    </Row>
          <CodeEditor Cpp={Cpp} Java={Java} Python={Python} Javascript={Javascript} C={C} C_opt={C_opt} />
    </React.Fragment>
  )
}

export default ReplacementSort