import React from 'react';
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor'

let Cpp = `
#include <iostream>

// Bubble sort function
void bubbleSort(int *arr, int n)
{
    bool sorted = false; // Flag to track if the array is sorted
 
    // Keep looping until the array is sorted
    while (!sorted)
    {
        sorted = true; // Set the flag to true
 
        // Loop through the array and swap adjacent elements if they are out of order
        for (int i = 0; i < n - 1; i++)
        {
            if (arr[i] > arr[i + 1])
            {
                // Swap the elements
                std::swap(arr[i], arr[i + 1]);
 
                // Set the flag to false
                sorted = false;
            }
        }
    }
}

int main()
{
    int arr[] = {5, 3, 6, 2, 10};
    int n = sizeof(arr) / sizeof(arr[0]);
 
    // Sort the array
    bubbleSort(arr, n);
 
    // Print the sorted array
    for (int i = 0; i < n; i++)
        std::cout << arr[i] << " ";
 
    return 0;
}

`,
  Java = `
  import java.util.*;

  public class Main {
    
      void bubbleSortTechnique(int arr[]) {
        
        // length of the array
        int len = arr.length;
        
        for(int i = 0; i < len; i++) {
          for(int j = 1; j < len; j++) {
            
            // this will execute when two consecutive numbers are not in order 
            if(arr[j] < arr[j - 1]) {
              
              int temp = arr[j];
              arr[j] = arr[j - 1];
              arr[j - 1] = temp;
              
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
        // function which will sort the given array using bubble sort
        object.bubbleSortTechnique(arr);
        System.out.println("Array after sorting - ");
        
        // function to print the new array
        object.printArr(arr);
    }
  }
`,
  Python = `
  def bubble_sort(arr):
  # Keep looping until the array is sorted
  while True:
      # Set a flag to track if any elements were swapped
      swapped = False

      # Loop through the array and swap adjacent elements if they are out of order
      for i in range(len(arr) - 1):
          if arr[i] > arr[i + 1]:
              # Swap the elements
              arr[i], arr[i + 1] = arr[i + 1], arr[i]

              # Set the flag to True
              swapped = True

      # If no elements were swapped, the array is sorted
      if not swapped:
          break

# Test the function
print(bubble_sort([5, 3, 6, 2, 10])) # [2, 3, 5, 6, 10]

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
  
  
  // bubble sort
  function bubbleSort() {
    
    for(let i = 0; i < len - 1; i++) {
      for(let j = 1; j < len; j++) {
         
         if(arr[j] < arr[j - 1]) {
           let temp = arr[j];
           arr[j] = arr[j - 1];
           arr[j - 1] = temp;
         }
      }
      
    }
  }
  
  // this function call will print the original array
  print("Before");
  
  // calling bubbleSort function 
  bubbleSort();
  
  // after sorting this function call will print the final array
  print("After");
`

const StrandSort = () => {
    return (
        <React.Fragment>
      <Row className="bg"
      >
        <div className='desc'>
          <Col span={60}><h1 style={{ color: 'orange'}}>Description</h1>
            <h3 style={{ color: 'white' }}>Strand sort is a recursive sorting algorithm that sorts items of a list into increasing order. </h3>
            <h3 style={{ color: 'white' }}>This mechanism at first transfers the first element of to be sorted list into a sub-list. It then compares the last element in the sub-list to each subsequent element in the unsorted list. 
            </h3>
            <h3 style={{ color: 'white' }}>If there is an element in the original list that is greater than the last element in the sub-list, the element is transferred to the end of sub-list. This process continues until the last element in the sub-list is compared to the remaining elements in the original list. The sub-list is then added to a new list. Repeat this process and merge all sub-lists until all elements are sorted. </h3>
          </Col>
        </div>
        <div className="mobile-table">
          <div>
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
                  <td>O(n)</td>
                </tr>
                <tr>
                  <td>Worst Case</td>
                  <td>O(n<sup>2</sup>)</td>
                </tr>
                <tr>
                  <td>Space Complexity</td>
                  <td>O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Row>
      <CodeEditor Cpp={Cpp} Java={Java} Python={Python} Javascript={Javascript} d2={false} d3={false} d4={false} />
    </React.Fragment>
    );
}

export default StrandSort;
