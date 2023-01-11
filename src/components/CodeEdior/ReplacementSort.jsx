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
Javascript=``
function ReplacementSort() {
  return (
    <React.Fragment><Row style={{
      display: 'flex',
      marginTop: '30px',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignContent: 'space-between',
      justifyContent: 'space-around',
      alignItems: 'center'
    }}>
          <div className='desc'>
      <Col span={14} style={{ color: 'white' }}><h1 style={{ color: 'orange' }}>Description</h1>
        <h2 style={{ color: 'white' }}>Radix Sort is a sorting algorithm that doesn't use comparisons. Its complexity depends, in addition to the number of elements, by the values b and d, representing the radix of the numbers and the maximum number of digits of the elements respectively</h2>
        <h2 style={{ color: 'white' }}>Radix Sort works by splitting the elements into buckets, according to their radix, starting from the least significant digit (LSD) or from the most significant digit (MSD) of the number. If the number has more than one significant digit, this process is repeated to account all the digits of the number.</h2>
        <h2 style={{ color: 'white' }}>It's a particular sorting algorithm really different from the others as it is not based on comparisons, but on the digits of the number instead, so it's only applicable on whole numbers or strings.</h2>
        <h2 style={{ color: 'white' }}>It can be faster than other logarithmic sorting algorithms on big data structures as it can even perform in linear time in special cases, but it's not widely used due to its limitations.</h2>
      </Col>
      </div>
          <div className="mobile-table">
      <Col span={8}>
        <h1 style={{ color: 'white' }}>Complexity</h1>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Average Complexity</th>
              <th>O(d×(n+b))</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Best Case</td>
              <td>O(d×(n+b))</td>
            </tr>
            <tr>
              <td>Worst Case</td>
              <td>O(d×(n+b))</td>
            </tr>
            <tr>
              <td>Space Complexity</td>
              <td>O(n+2^d)</td>
            </tr>
          </tbody>
        </table>
      </Col>
      </div>
    </Row>
          <CodeEditor Cpp={Cpp} Java={Java} Python={Python} Javascript={Javascript} d2={false} d3={false} d4={false} />
    </React.Fragment>
  )
}

export default ReplacementSort