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
}