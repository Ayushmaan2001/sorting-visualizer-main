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
import java.util.*;

public class Main {
  
    int getMax(int arr[], int n)
    {
        int mx = arr[0];
        for (int i = 1; i < n; i++) {
           
           if (arr[i] > mx) {
              mx = arr[i];
           }
                
        }
            
        return mx;
    }
  
    void countingSort(int arr[], int len, int exp) {
     
     int outputArr[] = new int[len];
     
     // max digit size is 9 so size of 10 array will be enough
     int count[] = new int[10];
     // counting the occurence of each number
     for(int i = 0; i < len; i++) {
       count[(arr[i] / exp) % 10]++;
     }
     
     for(int i = 1; i < 10; i++) {
       count[i] += count[i - 1];
     }
     
     // updating the output array
     for (int i = len - 1; i >= 0; i--) {
            outputArr[count[(arr[i] / exp) % 10] - 1] = arr[i];
            count[(arr[i] / exp) % 10]--;
     }
     
     // updating the final array
     for(int i = 0; i < len; i++) {
       arr[i] = outputArr[i];
     }
    }
  
    void radixSortTechnique(int arr[]) {
      int len = arr.length;
      
      int mx = getMax(arr, len);
      
      for (int exp = 1; mx / exp > 0; exp *= 10) {
        countingSort(arr, len, exp);
      }
    }
  
    void printArr(int arr[]) {
      for(int i = 0; i < arr.length; i++) {
        System.out.print(arr[i] + " ");
      }
      System.out.println();
    }
  
    public static void main(String[] args) {
      // Given array
      int arr[] = {1, 5, 3, 7, 200, 23, 12, 233, 101};
      int len = arr.length;
      // Creating the object of class to access its member function
      Main object = new Main();
      
      System.out.println("Array before sorting - ");
      // function to print the original Array
      object.printArr(arr);
      // function which will sort the given array using radix sort
      object.radixSortTechnique(arr);
      System.out.println("Array after sorting - ");
      
      // function to print the new array
      object.printArr(arr);
  }
}
`,
Javascript = `
let arr = [1000, 1, 100, 3, 2, 34, 54, 89, 75, 37];


let len = arr.length;

// function to get the maximum element from the array
function getMax(arr) {
  let maxx = arr[0];
  
  arr.forEach(function(num) {
    if(maxx < num) {
      maxx = num;
    }
  });
  return maxx;
}
// function to print array
function print(str) {
  
  console.log(str);
  arr.forEach(function(num) {
    console.log(num);
  });
}


// counting sort
function countingSort(exp) {
  
  
  // count array will contain the frequency of each element
  let count = new Array(10);
  
  for(let i = 0; i < 10; i++) count[i] = 0;
  
  // output array will contain the resultant array
  let output = new Array(len);
  
  // calculating the frequency
  arr.forEach(function(num) {
    
    let temp = Math.floor(num / exp) % 10;
    
    if(!count[temp]) {
      count[temp] = 1;
    } else {
      count[temp] += 1;
    }

  });

  // making the count array more suitable for output array
  for(let i = 1; i < 10; i++) 
    count[i] += count[i - 1];
  
  
  // formation of output array
  for(let i = len - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10] -= 1;
  }
  
  
  // finally copying the data from output array to original array
  for(let i = 0; i < len; i++) {
    arr[i] = output[i];
  }
}

// main radix function
function radixSort() {

  // trying to get the maximum element because we need the number maximum number of digits
  let m = getMax(arr);
  
  // sorting the array from rightmost bit to lowest bit
  for(let exp = 1; Math.floor(m / exp) > 0; exp *= 10) {
    countingSort(exp);
  }
}
// this function call will print the original array
print("Before");

// calling radixSort function 
radixSort();

// after sorting this function call will print the final array
print("After");
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
