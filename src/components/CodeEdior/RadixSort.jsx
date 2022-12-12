import React from 'react'
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor';

let Cpp = `
int getMax(int arr[], int n)
{
    int mx = arr[0];
    for (int i = 1; i < n; i++)
        if (arr[i] > mx)
            mx = arr[i];
    return mx;
}
void countSort(int arr[], int n, int exp)
{
    int output[n]; // output array
    int i, count[10] = { 0 };
    for (i = 0; i < n; i++)
        count[(arr[i] / exp) % 10]++;
    for (i = 1; i < 10; i++)
        count[i] += count[i - 1];
    for (i = n - 1; i >= 0; i--) {
        output[count[(arr[i] / exp) % 10] - 1] = arr[i];
        count[(arr[i] / exp) % 10]--;
    }
    for (i = 0; i < n; i++)
        arr[i] = output[i];
}
void radixsort(int arr[], int n)
{
    int m = getMax(arr, n);
    for (int exp = 1; m / exp > 0; exp *= 10)
        countSort(arr, n, exp);
}
`,
Python = `
def countingSort(arr, exp1):
 
    n = len(arr)
    output = [0] * (n)
    count = [0] * (10)
    for i in range(0, n):
        index = arr[i] // exp1
        count[index % 10] += 1
    for i in range(1, 10):
        count[i] += count[i - 1]
    i = n - 1
    while i >= 0:
        index = arr[i] // exp1
        output[count[index % 10] - 1] = arr[i]
        count[index % 10] -= 1
        i -= 1
    i = 0
    for i in range(0, len(arr)):
        arr[i] = output[i]

def radixSort(arr):
    max1 = max(arr)
    exp = 1
    while max1 / exp >= 1:
        countingSort(arr, exp)
        exp *= 10
`,
Java = `
static int getMax(int arr[], int n)
    {
        int mx = arr[0];
        for (int i = 1; i < n; i++)
            if (arr[i] > mx)
                mx = arr[i];
        return mx;
    }
static void countSort(int arr[], int n, int exp)
    {
        int output[] = new int[n]; // output array
        int i;
        int count[] = new int[10];
        Arrays.fill(count, 0);
        for (i = 0; i < n; i++)
            count[(arr[i] / exp) % 10]++;
        for (i = 1; i < 10; i++)
            count[i] += count[i - 1];
        for (i = n - 1; i >= 0; i--) {
            output[count[(arr[i] / exp) % 10] - 1] = arr[i];
            count[(arr[i] / exp) % 10]--;
        }
        for (i = 0; i < n; i++)
            arr[i] = output[i];
    }
static void radixsort(int arr[], int n)
    {
        int m = getMax(arr, n);
        for (int exp = 1; m / exp > 0; exp *= 10)
            countSort(arr, n, exp);
    }
`,
Javascript = `
function getMax(arr,n)
{
    let mx = arr[0];
        for (let i = 1; i < n; i++)
            if (arr[i] > mx)
                mx = arr[i];
        return mx;
}
function countSort(arr,n,exp)
{
    let output = new Array(n); // output array
        let i;
        let count = new Array(10);
        for(let i=0;i<10;i++)
            count[i]=0;
        for (i = 0; i < n; i++)
            count[Math.floor(arr[i] / exp) % 10]++;
        for (i = 1; i < 10; i++)
            count[i] += count[i - 1];
        for (i = n - 1; i >= 0; i--) {
            output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
            count[Math.floor(arr[i] / exp) % 10]--;
        }
        for (i = 0; i < n; i++)
            arr[i] = output[i];
}
function radixsort(arr,n)
{
        let m = getMax(arr, n);
        for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10)
            countSort(arr, n, exp);
}
`

export default function RadixSort({text}) {
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
      <Col span={14} style={{ color: 'white' }}><h1 style={{ color: 'white' }}>Description</h1>
        <h2 style={{ color: 'white' }}>Radix Sort is a sorting algorithm that doesn't use comparisons. Its complexity depends, in addition to the number of elements, by the values b and d, representing the radix of the numbers and the maximum number of digits of the elements respectively</h2>
        <h2 style={{ color: 'white' }}>Radix Sort works by splitting the elements into buckets, according to their radix, starting from the least significant digit (LSD) or from the most significant digit (MSD) of the number. If the number has more than one significant digit, this process is repeated to account all the digits of the number.</h2>
        <h2 style={{ color: 'white' }}>It's a particular sorting algorithm really different from the others as it is not based on comparisons, but on the digits of the number instead, so it's only applicable on whole numbers or strings.</h2>
        <h2 style={{ color: 'white' }}>It can be faster than other logarithmic sorting algorithms on big data structures as it can even perform in linear time in special cases, but it's not widely used due to its limitations.</h2>
      </Col>
      </div>
          <div className="mobile-table">
      <Col span={8}>
        <h1 style={{ color: 'white' }}>Complexity</h1>
        <table class="styled-table">
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
