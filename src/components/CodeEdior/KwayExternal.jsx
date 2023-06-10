import React from 'react'
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor';

let Cpp = `
#include <iostream>
#include <fstream>
#include <vector>
#include <algorithm>

// Function to merge k sorted files into one
void mergeFiles(const std::vector<std::string>& fileNames, const std::string& outputFile)
{
    std::vector<std::ifstream> streams; // Vector to store the input streams
 
    // Open the input streams
    for (const auto& fileName : fileNames)
        streams.emplace_back(fileName);
 
    std::ofstream outputStream(outputFile); // Output stream to the output file
 
    std::vector<int> minValues(streams.size()); // Vector to store the current minimum value of each stream
    std::vector<bool> isFinished(streams.size()); // Vector to store whether each stream has reached the end
 
    // Loop until all streams have reached the end
    while (std::any_of(isFinished.begin(), isFinished.end(), [](bool b){ return !b; }))
    {
        // Find the minimum value among the current minimum values of the streams
        int minIndex = -1;
        int minValue = std::numeric_limits<int>::max();
        for (size_t i = 0; i < streams.size(); i++)
        {
            if (!isFinished[i] && minValues[i] < minValue)
            {
                minValue = minValues[i];
                minIndex = i;
            }
        }
 
        outputStream << minValue << " "; // Add the minimum value to the output file
 
        // Read the next value from the stream with the minimum value
        if (!(streams[minIndex] >> minValues[minIndex]))
            isFinished[minIndex] = true; // Set the finished flag if the stream has reached the end
    }
 
    // Close the streams
    for (auto& stream : streams)
        stream.close();
}

int main()
{
    std::ifstream inputStream("input.txt"); // Input stream from the input file
 
    const int chunkSize = 3; // Size of each chunk
 
    std::vector<std::string> fileNames; // Vector to store the names of the temporary files
 
    int chunkIndex = 0; // Index of the current chunk
    std::vector<int> chunk; // Current chunk
 
    int value; // Current value being read from the input file
 
    // Read the input file and split it into chunks
    while (inputStream >> value)
    {
        chunk.push_back(value);
 
        if (chunk.size() == chunkSize)
        {
            // Sort and write the current chunk to a file
            std::sort(chunk.begin(), chunk.end());
 
            std::string fileName = "temp" + std::to_string(chunkIndex) + ".txt";
            fileNames.push_back(fileName);
 
            std::ofstream outputStream(fileName);
            for (int i : chunk)
                outputStream << i << " ";
 
            chunk.clear(); // Clear the chunk for the next batch of values
            chunkIndex++;
        }
    }
 
    // If there are any remaining values in the chunk, write them to a file
    if (!chunk.empty())
    {
        std::sort(chunk.begin(), chunk.end());
 
        std::string fileName = "temp" + std::to_string(chunkIndex) + ".txt";
        fileNames.push_back(fileName);
 
        std::ofstream outputStream(fileName);
        for (int i : chunk)
            outputStream << i << " ";
    }
 
    // Merge the sorted chunks into one file
    mergeFiles(fileNames, "output.txt");
 
    return 0;
}
`,
Python=`
def merge_files(file_names, output_file):
    streams = [] # List to store the input streams
 
    # Open the input streams
    for file_name in file_names:
        streams.append(open(file_name, 'r'))
 
    output_stream = open(output_file, 'w') # Output stream to the output file
 
    min_values = [None] * len(streams) # List to store the current minimum value of each stream
    is_finished = [False] * len(streams) # List to store whether each stream has reached the end
 
    # Loop until all streams have reached the end
    while any(not finished for finished in is_finished):
        # Find the minimum value among the current minimum values of the streams
        min_index = -1
        min_value = float('inf')
        for i, stream in enumerate(streams):
            if not is_finished[i] and min_values[i] < min_value:
                min_value = min_values[i]
                min_index = i
 
        output_stream.write(str(min_value) + ' ') # Add the minimum value to the output file
 
        # Read the next value from the stream with the minimum value
        line = streams[min_index].readline()
        if line:
            min_values[min_index] = int(line.strip())
        else:
            is_finished[min_index] = True # Set the finished flag if the stream has reached the end
 
    # Close the streams
    for stream in streams:
        stream.close()

def main():
    chunk_size = 3 # Size of each chunk
 
    file_names = [] # List to store the names of the temporary files
 
    chunk_index = 0 # Index of the current chunk
    chunk = [] # Current chunk
 
    # Read the input file and split it into chunks
    with open('input.txt', 'r') as input_stream:
        for line in input_stream:
            value = int(line.strip())
            chunk.append(value)
 
            if len(chunk) == chunk_size:
                # Sort and write the current chunk to a file
                chunk.sort()
 
                file_name = 'temp' + str(chunk_index) + '.txt'
                file_names.append(file_name)
 
                with open(file_name, 'w') as output_stream:
                    for i in chunk:
                        output_stream.write(str(i) + ' ')
 
                chunk.clear() # Clear the chunk for the next batch of values
                chunk_index += 1
 
    # If there are any remaining values in the chunk, write them to a file
    if chunk:
        # Sort and write the current chunk to a file
        chunk.sort()

        file_name = 'temp' + str(chunk_index) + '.txt'
        file_names.append(file_name)
 
        with open(file_name, 'w') as output_stream:
            for i in chunk:
                output_stream.write(str(i) + ' ')
 
    # Merge the sorted chunks into one file
    merge_files(file_names, 'output.txt')

if __name__ == '__main__':
    main()
`,
C=`#include <stdio.h>
#include <stdlib.h>

void merge(int arr[], int left[], int leftSize, int right[], int rightSize) {
    int i = 0, j = 0, k = 0;

    while (i < leftSize && j < rightSize) {
        if (left[i] <= right[j])
            arr[k++] = left[i++];
        else
            arr[k++] = right[j++];
    }

    while (i < leftSize)
        arr[k++] = left[i++];

    while (j < rightSize)
        arr[k++] = right[j++];
}

void mergeSort(int arr[], int n, int k) {
    if (n <= 1)
        return;

    int chunkSize = (n + k - 1) / k; // Size of each chunk

    // Perform sorting on each chunk individually
    for (int i = 0; i < n; i += chunkSize)
        mergeSort(arr + i, chunkSize, k);

    // Merge the sorted chunks
    for (int size = chunkSize; size < n; size *= k) {
        for (int i = 0; i < n - size; i += k * size) {
            int leftIndex = i;
            int rightIndex = i + size;
            int endIndex = i + k * size;

            if (endIndex > n)
                endIndex = n;

            int* left = arr + leftIndex;
            int leftSize = size;

            int* right = arr + rightIndex;
            int rightSize = endIndex - rightIndex;

            merge(arr + leftIndex, left, leftSize, right, rightSize);
        }
    }
}
`,
C_opt = `#include <stdio.h>
#include <stdlib.h>

void merge(int arr[], int left[], int leftSize, int right[], int rightSize) {
    int i = 0, j = 0, k = 0;

    while (i < leftSize && j < rightSize) {
        if (left[i] <= right[j])
            arr[k++] = left[i++];
        else
            arr[k++] = right[j++];
    }

    while (i < leftSize)
        arr[k++] = left[i++];

    while (j < rightSize)
        arr[k++] = right[j++];
}

void mergeSort(int arr[], int temp[], int low, int high, int k) {
    if (low < high) {
        int mid = (low + high) / 2;
        mergeSort(arr, temp, low, mid, k);
        mergeSort(arr, temp, mid + 1, high, k);

        int i, j;
        for (i = low; i <= high; i++)
            temp[i] = arr[i];

        i = low;
        int chunkSize = (high - low + 1) / k;

        for (int chunk = 0; chunk < k; chunk++) {
            int chunkStart = i;
            int chunkEnd = (chunk == k - 1) ? high : (chunkStart + chunkSize - 1);

            int* chunkArr = temp + chunkStart;
            int chunkSize = chunkEnd - chunkStart + 1;

            merge(arr + chunkStart, chunkArr, chunkSize, arr + chunkStart + chunkSize, chunkSize);

            i += chunkSize;
        }
    }
}

void externalKWayMergeSort(int arr[], int n, int k) {
    int* temp = (int*)malloc(n * sizeof(int));
    mergeSort(arr, temp, 0, n - 1, k);
    free(temp);
}
`
export default function KwayExternal({runs}) {
	return (
		<React.Fragment>
			<Row className='bg'>
				<div className='desc'>
				<Col span={60} style={{ color: 'white' }}><h1 style={{ color: 'orange' }}>Description</h1>
					<h3 style={{ color: 'white' }}>External sorting is a term for a class of sorting algorithms that can handle massive amounts of data. External sorting is required when the data being sorted does not fit into the main memory of a computing device (usually RAM) and instead, must reside in the slower external memory (usually a hard drive). </h3>
					<h3 style={{ color: 'white' }}>External sorting typically uses a hybrid sort-merge strategy. In the sorting phase, chunks of data small enough to fit in the main memory are read, sorted, and written out to a temporary file. In the merge phase, the sorted sub-files are combined into a single larger file.</h3>
					<h3 style={{ color: 'white' }}>The external merge sort algorithm, which sorts chunks that each fit in RAM, then merges the sorted chunks together. We first divide the file into runs such that the size of a run is small enough to fit into the main memory. Then sort each run in the main memory using the merge sort sorting algorithm. Finally merge the resulting runs together into successively bigger runs, until the file is sorted.
						Here N is the size of the array.
					</h3></Col>
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
			<CodeEditor Cpp={Cpp} Python={Python} C={C} C_opt={C_opt} />
		</React.Fragment>
	)
}
