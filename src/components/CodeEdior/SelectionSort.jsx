import React from 'react'
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor';

let Cpp = `
void swap(int *xp, int *yp)
{
    int temp = *xp;
    *xp = *yp;
    *yp = temp;
}
 
void selectionSort(int arr[], int n)
{
    int i, j, min_idx;
    for (i = 0; i < n-1; i++)
    {
        min_idx = i;
        for (j = i+1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
        if(min_idx!=i)
            swap(&arr[min_idx], &arr[i]);
    }
}
`,
Java = `
void sort(int arr[])
    {
        int n = arr.length;
        for (int i = 0; i < n-1; i++)
        {
            int min_idx = i;
            for (int j = i+1; j < n; j++)
                if (arr[j] < arr[min_idx])
                    min_idx = j;
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
`,
Python = `
for i in range(len(A)):
    min_idx = i
    for j in range(i+1, len(A)):
        if A[min_idx] > A[j]:
            min_idx = j    
    A[i], A[min_idx] = A[min_idx], A[i]
`,
Javascript = `
function swap(arr,xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
 
function selectionSort(arr,  n)
{
    var i, j, min_idx;
    for (i = 0; i < n-1; i++)
    {
        min_idx = i;
        for (j = i + 1; j < n; j++)
        if (arr[j] < arr[min_idx])
            min_idx = j;
        swap(arr,min_idx, i);
    }
}
`
export default function SelectionSort({text}) {
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
        <h2 style={{ color: 'white' }}>Selection Sort is an iterative and in-place sorting algorithm that divides the data structure in two sublists: the ordered one, and the unordered one. The algorithm loops for all the elements of the data structure and for every cycle picks the smallest element of the unordered sublist and adds it to the sorted sublist, progressively filling it.</h2>
        <h2 style={{ color: 'white' }}>It's a really simple and intuitive algorithm that does not require additional memory, but it's not really efficient on big data structures due to its quadratic time complexity.
        </h2>
        <h2 style={{ color: 'white' }}>This algorithm has been upgraded and enhanced in several variants such as Heap Sort.</h2>
      </Col>
      </div>
      <div className="mobile-table">
      <Col span={8}>
        <h1 style={{ color: 'white' }}>Complexity</h1>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Average Complexity</th>
              <th>O(n<sup>2</sup>)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Best Case</td>
              <td>O(n<sup>2</sup>)</td>
            </tr>
            <tr>
              <td>Worst Case</td>
              <td>O(n<sup>2</sup>)</td>
            </tr>
            <tr>
              <td>Space Complexity</td>
              <td>O(1)</td>
            </tr>
          </tbody>
        </table>
      </Col>
      </div>
    </Row>
      <CodeEditor Cpp={Cpp} Python={Python} Java={Java} Javascript={Javascript} d2={false} d3={false} d4={false} />
    </React.Fragment>
  )
}
