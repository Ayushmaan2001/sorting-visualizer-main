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
import java.util.*;

public class Main {
  
    void selectionSortTechnique(int arr[]) {
      
      int len = arr.length;
      
      for(int i = 0; i < len - 1; i++) {
        
        for(int j = i + 1; j < len; j++) {
          
          if(arr[j] < arr[i]) {
            int temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
          }
        }
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
      // function which will sort the given array using selection sort
      object.selectionSortTechnique(arr);
      System.out.println("Array after sorting - ");
      
      // function to print the new array
      object.printArr(arr);
  }
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
let arr = [1, 100, 3, 2, 34, 54, 89, 75, 37];


let len = arr.length;


// function to print array
function print(str) {
  
  console.log(str);
  arr.forEach(function(num) {
    console.log(num);
  });
}


// selection sort
function selectionSort() {
  
  for(let i = 0; i < len - 1; i++) {
    
    // this function will find that value which should be present at index i
    for(let j = i + 1; j < len; j++) {
       
       if(arr[j] < arr[i]) {
         let temp = arr[j];
         arr[j] = arr[i];
         arr[i] = temp;
       }
    }
    
  }
}

// this function call will print the original array
print("Before");

// calling selectionSort function 
selectionSort();

// after sorting this function call will print the final array
print("After");
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
