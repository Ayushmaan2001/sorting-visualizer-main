import React from 'react'
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor'

let Cpp = `
#include <iostream>

// Insertion sort function
void insertionSort(int *arr, int n)
{
    // Loop through the array
    for (int i = 1; i < n; i++)
    {
        // Store the current element
        int current = arr[i];
 
        // Initialize the position where the element should be inserted
        int j = i - 1;
 
        // Shift the elements to the right until the correct position is found
        while (j >= 0 && arr[j] > current)
        {
            arr[j + 1] = arr[j];
            j--;
        }
 
        // Insert the element into the correct position
        arr[j + 1] = current;
    }
}

int main()
{
    int arr[] = {5, 3, 6, 2, 10};
    int n = sizeof(arr) / sizeof(arr[0]);
 
    // Sort the array
    insertionSort(arr, n);
 
    // Print the sorted array
    for (int i = 0; i < n; i++)
        std::cout << arr[i] << " ";
 
    return 0;
}

`,
Java = `
import java.util.*;

public class Main {
  
    void insertionSortTechnique(int arr[]) {
      int len = arr.length;
      
      for(int i = 1; i < len; i++) {
        
        for(int j = i - 1; j >= 0; j--) {
          
          if(arr[j] > arr[j + 1]) {
             
             int temp = arr[j];
             arr[j] = arr[j + 1];
             arr[j + 1] = temp;
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
      
      // Creating the object of class to access its member function
      Main object = new Main();
      
      System.out.println("Array before sorting - ");
      // function to print the original Array
      object.printArr(arr);
      // function which will sort the given array using insertion sort
      object.insertionSortTechnique(arr);
      System.out.println("Array after sorting - ");
      
      // function to print the new array
      object.printArr(arr);
  }
}
`,
Python = `
def insertion_sort(arr):
    # Loop through the array
    for i in range(1, len(arr)):
        # Store the current element
        current = arr[i]
 
        # Initialize the position where the element should be inserted
        j = i - 1
 
        # Shift the elements to the right until the correct position is found
        while j >= 0 and arr[j] > current:
            arr[j + 1] = arr[j]
            j -= 1
 
        # Insert the element into the correct position
        arr[j + 1] = current

# Test the function
print(insertion_sort([5, 3, 6, 2, 10])) # [2, 3, 5, 6, 10]

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


// insertion sort
function insertionSort() {
  
  for(let i = 1; i < len; i++) {
    
    let j = i;
    // if ith number should be present at less index then this loop will
    // place it at its correct position
    while(j >= 1 && arr[j] < arr[j - 1]) {
      
      let temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
    
  }
}

// this function call will print the original array
print("Before");

// calling insertionSort function 
insertionSort();

// after sorting this function call will print the final array
print("After"); 
`,
C=`void insertionSort(int arr[], int n) {
  int i, j, key;
  for (i = 1; i < n; i++) {
      key = arr[i];
      j = i - 1;
      while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j = j - 1;
      }
      arr[j + 1] = key;
  }
}
`,
C_opt= `void insertionSort(int arr[], int n) {
  int i, j, key;
  for (i = 1; i < n; i++) {
      key = arr[i];
      j = i - 1;
      while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j = j - 1;
      }
      arr[j + 1] = key;
  }
}
`,
Cpp_opt = ``,
Java_opt=``,
Python_opt=``,
Javascript_opt=``
export default function InsertionSort({text}) {
  return (
    <React.Fragment>
      <Row className='bg'>
      <div className='desc'>
      <Col span={60} style={{ color: 'white' }}><h1 style={{ color: 'orange' }}>Description</h1>
        <h3 style={{ color: 'white' }}>Insertion sort is a simple sorting algorithm that builds the final sorted array one item at a time. It's less performant than advanced sorting algorithms, but it can still have some advantages: it's really easy to implement and it's efficient on small data structures almost sorted.</h3>
        <h3 style={{ color: 'white' }}>The algorithm divides the data structure in two sublists: a sorted one, and one still to sort. Initially, the sorted sublist is made up of just one element and it gets progressively filled. For every iteration, the algorithm picks an element on the unsorted sublist and inserts it at the right place in the sorted sublist.</h3>
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
              <td>Ω(n)</td>
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
      <CodeEditor Cpp={Cpp} Java={Java} Python={Python} Javascript={Javascript} C={C} C_opt={C_opt} />
    </React.Fragment>
  )
}
