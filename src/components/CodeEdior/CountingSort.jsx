import React from 'react'
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor';

let Cpp = `
#define RANGE 255
void countSort(char arr[])
{
    memset(count, 0, sizeof(count));
    for (i = 0; arr[i]; ++i)
        ++count[arr[i]];
    for (i = 1; i <= RANGE; ++i)
        count[i] += count[i - 1];
    for (i = 0; arr[i]; ++i) {
        output[count[arr[i]] - 1] = arr[i];
        --count[arr[i]];
    }
    for (i = sizeof(arr)-1; i>=0; --i) 
    { 
        output[count[arr[i]]-1] = arr[i]; 
        --count[arr[i]]; 
    } 
    for (i = 0; arr[i]; ++i)
        arr[i] = output[i];
}
`,
Python = `
def countSort(arr):
    output = [0 for i in range(len(arr))]
    count = [0 for i in range(256)]
    ans = ["" for _ in arr]
    for i in arr:
        count[ord(i)] += 1
    for i in range(256):
        count[i] += count[i-1]
    for i in range(len(arr)):
        output[count[ord(arr[i])]-1] = arr[i]
        count[ord(arr[i])] -= 1
    for i in range(len(arr)):
        ans[i] = output[i]
    return ans 
`,
Java = `
void sort(char arr[])
    {
        int n = arr.length;
        char output[] = new char[n];
        int count[] = new int[256];
        for (int i = 0; i < 256; ++i)
            count[i] = 0;
        for (int i = 0; i < n; ++i)
            ++count[arr[i]];
        for (int i = 1; i <= 255; ++i)
            count[i] += count[i - 1];
        for (int i = n - 1; i >= 0; i--) {
            output[count[arr[i]] - 1] = arr[i];
            --count[arr[i]];
        }
        for (int i = 0; i < n; ++i)
            arr[i] = output[i];
    }
`,
Javascript = `
function sort(arr)
{
    var n = arr.length;
    var output = Array.from({length: n}, (_, i) => 0);
    var count = Array.from({length: 256}, (_, i) => 0);
    for (var i = 0; i < n; ++i)
        ++count[arr[i].charCodeAt(0)];
    for (var i = 1; i <= 255; ++i)
        count[i] += count[i - 1];
    for (var i = n - 1; i >= 0; i--) {
        output[count[arr[i].charCodeAt(0)] - 1] = arr[i];
        --count[arr[i].charCodeAt(0)];
    }
    for (var i = 0; i < n; ++i)
        arr[i] = output[i];
     return arr;
}
`
export default function CountingSort() {
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
        <h2 style={{ color: 'white' }}>Counting sort is a sorting algorithm that sorts the elements of an array by counting the number of occurrences of each unique element in the array. The count is stored in an auxiliary array and the sorting is done by mapping the count as an index of the auxiliary array.</h2>
        <h2 style={{ color: 'white' }}>Here n is the size of elements and k is the range of the elements</h2></Col>
      <Col span={8}>
        <h1 style={{ color: 'white' }}>Complexity</h1>
        <table class="styled-table">
          <thead>
            <tr>
              <th>Average Complexity</th>
              <th>O(nxk)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Best Case</td>
              <td>O(nxk)</td>
            </tr>
            <tr>
              <td>Worst Case</td>
              <td>O(nxk)</td>
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
  )
}
