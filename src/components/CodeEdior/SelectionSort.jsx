import React from 'react'
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor';

let Cpp = `
#include <iostream>

// Function to find the position of the smallest element
// in the range [start, end)
int findSmallest(int *arr, int start, int end)
{
    int smallest = arr[start]; // Store the first element as the smallest value so far
    int smallestIndex = start; // Store the index of the smallest value
 
    // Loop through the remaining elements
    for (int i = start + 1; i < end; i++)
    {
        // If an element is smaller than the current smallest value
        if (arr[i] < smallest)
        {
            // Set it as the new smallest value
            smallest = arr[i];
            smallestIndex = i;
        }
    }
 
    return smallestIndex; // Return the index of the smallest element
}

// Selection sort function
void selectionSort(int *arr, int n)
{
    // Loop through the array
    for (int i = 0; i < n; i++)
    {
        // Find the position of the smallest element in the range [i, n)
        int smallestIndex = findSmallest(arr, i, n);
 
        // Swap the element at the current position with the smallest element
        std::swap(arr[i], arr[smallestIndex]);
    }
}

int main()
{
    int arr[] = {5, 3, 6, 2, 10};
    int n = sizeof(arr) / sizeof(arr[0]);
 
    // Sort the array
    selectionSort(arr, n);
 
    // Print the sorted array
    for (int i = 0; i < n; i++)
        std::cout << arr[i] << " ";
 
    return 0;
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
def find_smallest(arr):
    # Store the position of the smallest element
    smallest = arr[0]
    smallest_index = 0
 
    # Loop through the array and find the smallest element
    for i in range(1, len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
 
    return smallest_index

def selection_sort(arr):
    # Create a new sorted array
    sorted_arr = []
 
    # Find the smallest element in the array and add it to the sorted array
    for i in range(len(arr)):
        smallest = find_smallest(arr)
        sorted_arr.append(arr.pop(smallest))
 
    return sorted_arr

# Test the function
print(selection_sort([5, 3, 6, 2, 10])) # [2, 3, 5, 6, 10]

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
    <React.Fragment>
      <Row className='bg'>
      <div className='desc'>
      <Col span={60} style={{ color: 'white' }}><h1 style={{ color: 'orange' }}>Description</h1>
        <h3 style={{ color: 'white' }}>Selection Sort is an iterative and in-place sorting algorithm that divides the data structure in two sublists: the ordered one, and the unordered one. The algorithm loops for all the elements of the data structure and for every cycle picks the smallest element of the unordered sublist and adds it to the sorted sublist, progressively filling it.</h3>
        <h3 style={{ color: 'white' }}>It's a really simple and intuitive algorithm that does not require additional memory, but it's not really efficient on big data structures due to its quadratic time complexity.
        </h3>
        <h3 style={{ color: 'white' }}>This algorithm has been upgraded and enhanced in several variants such as Heap Sort.</h3>
      </Col>
      </div>
      <div className="mobile-table">
      <Col span={8}>
        <h1 style={{ color: 'white' }}>Asymptotic Complexity</h1>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Average Time Complexity</th>
              <th>Θ(n<sup>2</sup>)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Best Case Time Complexity</td>
              <td>Ω(n<sup>2</sup>)</td>
            </tr>
            <tr>
              <td>Worst Case Time Complexity</td>
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
