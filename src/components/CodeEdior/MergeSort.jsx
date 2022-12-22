import React from 'react'
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor';

let Cpp = `
void merge(int array[], int const left, int const mid,
           int const right)
{
    auto const subArrayOne = mid - left + 1;
    auto const subArrayTwo = right - mid;
    auto *leftArray = new int[subArrayOne],
         *rightArray = new int[subArrayTwo];
    for (auto i = 0; i < subArrayOne; i++)
        leftArray[i] = array[left + i];
    for (auto j = 0; j < subArrayTwo; j++)
        rightArray[j] = array[mid + 1 + j];
    auto indexOfSubArrayOne
        = 0, // Initial index of first sub-array
        indexOfSubArrayTwo
        = 0; // Initial index of second sub-array
    int indexOfMergedArray
        = left; // Initial index of merged array
    while (indexOfSubArrayOne < subArrayOne
           && indexOfSubArrayTwo < subArrayTwo) {
        if (leftArray[indexOfSubArrayOne]
            <= rightArray[indexOfSubArrayTwo]) {
            array[indexOfMergedArray]
                = leftArray[indexOfSubArrayOne];
            indexOfSubArrayOne++;
        }
        else {
            array[indexOfMergedArray]
                = rightArray[indexOfSubArrayTwo];
            indexOfSubArrayTwo++;
        }
        indexOfMergedArray++;
    }
    while (indexOfSubArrayOne < subArrayOne) {
        array[indexOfMergedArray]
            = leftArray[indexOfSubArrayOne];
        indexOfSubArrayOne++;
        indexOfMergedArray++;
    }
    while (indexOfSubArrayTwo < subArrayTwo) {
        array[indexOfMergedArray]
            = rightArray[indexOfSubArrayTwo];
        indexOfSubArrayTwo++;
        indexOfMergedArray++;
    }
    delete[] leftArray;
    delete[] rightArray;
}
void mergeSort(int array[], int const begin, int const end)
{
    if (begin >= end)
        return; 
    auto mid = begin + (end - begin) / 2;
    mergeSort(array, begin, mid);
    mergeSort(array, mid + 1, end);
    merge(array, begin, mid, end);
}
`,
Java = `
import java.util.*;

public class Main {

    
    void merge(int l, int m, int r, int arr[]) {
      
      int newArr[] = new int[r - l + 1];
      int k = 0, i = l, j = m + 1;
      // k will be the index of the new array where it will be the at that position 
      // where new element will reside
      while(i <= m && j <= r) {
        
        if(arr[i] <= arr[j]) {
          newArr[k++] = arr[i++];
        } else {
          newArr[k++] = arr[j++];
        }
      
      }
      
      // if there will be some elements left in the first half
      while(i <= m) {
        newArr[k++] = arr[i++];
      }
      
      // if there will be some elements left in the right half
      while(j <= r) {
        newArr[k++] = arr[j++];
      }
      
      // updating the original array
      k = 0;
      for(i = l; i <= r; i++) {
        arr[i] = newArr[k++];
      }
    }
  
    void mergeSortTechnique(int l, int r, int arr[]) {
      if(l >= r) return; 
      int mid = (l + r) / 2;
      
      // these two function will sperately sort their parts
      mergeSortTechnique(l, mid, arr);
      mergeSortTechnique(mid + 1, r, arr);
      
      // this function will merge the two parts of the sorted array 
      merge(l, mid, r, arr);
    
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
      // function which will sort the given array using merge sort
      object.mergeSortTechnique(0, len - 1, arr);
      System.out.println("Array after sorting - ");
      
      // function to print the new array
      object.printArr(arr);
  }
}
`,
Python = `
def mergeSort(arr):
    if len(arr) > 1:
        mid = len(arr)//2
        L = arr[:mid]
        R = arr[mid:]
        mergeSort(L)
        mergeSort(R)
        i = j = k = 0
        while i < len(L) and j < len(R):
            if L[i] <= R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
 
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
`,
Javascript = `
let arr = [1000, 1, 100, 3, 2, 34, 54, 89, 75, 37];


let len = arr.length;

// function to print array
function print(str) {
  
  console.log(str);
  arr.forEach(function(num) {
    console.log(num);
  });
}

// function to merge two sorted array
function merge(l, mid, r) {
  
  let output = new Array(r - l + 1);
  let k = 0, i = l, j = mid + 1;
  
  while(i <= mid && j <= r) {
    if(arr[i] < arr[j]) {
      output[k++] = arr[i++];
    } else {
      output[k++] = arr[j++];
    }
  }
  
  // if some elements left in the first array
  while(i <= mid) output[k++] = arr[i++];

  // if some elements left in the second array  
  while(j <= r) output[k++] = arr[j++];
  
  k = 0;
  
  // updating the original array from l to r inclusive
  for(i = l; i <= r; i++) arr[i] = output[k++];
}


// mergeSort function which will partition the array into two halves recursively
// and sort them using merge fucntion
function mergeSort(l, r) {
  if(l < r) {
    let mid = Math.floor((l + r) / 2);
    
    // calling the mergeSort function recursively on both the halves
    mergeSort(l, mid);
    mergeSort(mid + 1, r);

    // after sorting the halves then merging both sorted parts
    merge(l, mid, r);
  }
}

// this function call will print the original array
print("Before");

// calling mergeSort function 
mergeSort(0, len - 1);

// after sorting this function call will print the final array
print("After");
`
export default function MergeSort({text}) {
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
        <h2 style={{ color: 'white' }}>Merge Sort is a sorting algorithm based on the Divide et Impera technique, like Quick Sort. It can be implemented iteratively or recursively, using the Top-Down and Bottom-Up algorithms respectively. We represented the first one.</h2>
        <h2 style={{ color: 'white' }}>The algorithm divides the data structure recursively until the subsequences contain only one element. At this point, the subsequences get merged and ordered sequentially. To do so, the algorithm progressively builds the sorted sublist by adding each time the minimum element of the next two unsorted subsequences until there is only one sublist remaining. This will be the sorted data structure.
        </h2>
      </Col>
      </div>
          <div className="mobile-table">
      <Col span={8}>
        <h1 style={{ color: 'white' }}>Complexity</h1>
        <table className="styled-table">
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
              <td>O(n)</td>
            </tr>
          </tbody>
        </table>
      </Col>
      </div>
    </Row>
      <CodeEditor Cpp={Cpp} Python={Python} Javascript={Javascript} Java={Java} d2={false} d3={false} d4={false} />
    </React.Fragment>
  )
}
