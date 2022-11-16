import React from 'react';
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor';

let Cpp = `
void heapify(int arr[], int N, int i)
{
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;
    if (l < N && arr[l] > arr[largest])
        largest = l;
    if (r < N && arr[r] > arr[largest])
        largest = r;
    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, N, largest);
    }
}
void heapSort(int arr[], int N)
{
 
    for (int i = N / 2 - 1; i >= 0; i--)
        heapify(arr, N, i);
    for (int i = N - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
}
`,
    Java = `
void heapify(int arr[], int N, int i)
{
        int largest = i; // Initialize largest as root
        int l = 2 * i + 1; // left = 2*i + 1
        int r = 2 * i + 2; // right = 2*i + 2
        if (l < N && arr[l] > arr[largest])
            largest = l;
        if (r < N && arr[r] > arr[largest])
            largest = r;
        if (largest != i) {
            int swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
            heapify(arr, N, largest);
        }
}

public void sort(int arr[])
    {
        int N = arr.length;
        for (int i = N / 2 - 1; i >= 0; i--)
            heapify(arr, N, i);
        for (int i = N - 1; i > 0; i--) {
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            heapify(arr, i, 0);
        }
    }
`,
    Python = `
def heapify(arr, N, i):
    largest = i  # Initialize largest as root
    l = 2 * i + 1     # left = 2*i + 1
    r = 2 * i + 2     # right = 2*i + 2
    if l < N and arr[largest] < arr[l]:
        largest = l
    if r < N and arr[largest] < arr[r]:
        largest = r
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]  # swap
        heapify(arr, N, largest)

def heapSort(arr):
    N = len(arr)
    for i in range(N//2 - 1, -1, -1):
        heapify(arr, N, i)
    for i in range(N-1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]  # swap
        heapify(arr, i, 0)
`,
    Javascript = `
function heapify(arr, N, i)
{
        var largest = i; // Initialize largest as root
        var l = 2 * i + 1; // left = 2*i + 1
        var r = 2 * i + 2; // right = 2*i + 2
        if (l < N && arr[l] > arr[largest])
            largest = l;
        if (r < N && arr[r] > arr[largest])
            largest = r;
        if (largest != i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;
            heapify(arr, N, largest);
}

function sort( arr)
    {
        var N = arr.length;
        for (var i = Math.floor(N / 2) - 1; i >= 0; i--)
            heapify(arr, N, i);
        for (var i = N - 1; i > 0; i--) {
            var temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            heapify(arr, i, 0);
        }
    }
`
const HeapSort = () => {
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
            <Col span={14} style={{ color: 'white' }}><h1 style={{ color: 'white' }}>Description</h1>
                <h2 style={{ color: 'white' }}>Heap Sort is an in-place iterative sorting algorithm based on auxiliary data structures called heap. It's less efficient than algorithm with the same time complexity and it's not suitable for data structures with few elements</h2>
                <h2 style={{ color: 'white' }}>The heap is a data structure representable as a binary tree, where each node has a value bigger or equal to its children. Consequently, the root will hold the maximum value.</h2>
                <h2 style={{ color: 'white' }}>The data structure gets ordered to form the heap initially, and then it gets progressively reordered with an algorithm similar to Selection Sort, starting from the bigger elements.</h2>
            </Col>
            <Col span={8}>
                <h1 style={{ color: 'white' }}>Complexity</h1>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Average Complexity</th>
                            <th>O(nxlogn)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Best Case</td>
                            <td>O(nxlogn)</td>
                        </tr>
                        <tr>
                            <td>Worst Case</td>
                            <td>O(nxlogn)</td>
                        </tr>
                        <tr>
                            <td>Space Complexity</td>
                            <td>O(1)</td>
                        </tr>
                    </tbody>
                </table>
            </Col>
        </Row>
            <CodeEditor Cpp={Cpp} Java={Java} Python={Python} Javascript={Javascript} d2={false} d3={false} d4={false} />
        </React.Fragment>
    );
}

export default HeapSort;
