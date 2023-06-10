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
`,
C=`void bubbleSort(int arr[], int n) {
  int i, j;
  for (i = 0; i < n - 1; i++) {
      for (j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              // Swap arr[j] and arr[j+1]
              int temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }
}
`,
C_opt= `void bubbleSort(int arr[], int n) {
  int i, j;
  int swapped;
  for (i = 0; i < n - 1; i++) {
      swapped = 0;
      for (j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              // Swap arr[j] and arr[j+1]
              int temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
              swapped = 1;
          }
      }
      // If no two elements were swapped in the inner loop, the array is already sorted
      if (!swapped)
          break;
  }
}
`,
Cpp_opt = ``,
Java_opt=``,
Python_opt=``,
Javascript_opt=``


export default function BubbleSort() {
  return (
    <React.Fragment>
      <Row className="bg">
        <div className='desc'>
          <Col span={60}><h1 style={{ color: 'orange'}}>Description</h1>
            <h3 style={{ color: 'white' }}>Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles in sparkling water. The bubbles represents the elements of the data structure.</h3>
            <h3 style={{ color: 'white' }}>The bigger bubbles reach the top faster than smaller bubbles, and this algorithm works in the same way. It iterates through the data structure and for each cycle compares the current element with the next one, swapping them if they are in the wrong order.
            </h3>
            <h3 style={{ color: 'white' }}>It's a simple algorithm to implement, but not much efficient: on average, quadratic sorting algorithms with the same time complexity such as Selection Sort or Insertion Sort perform better.
              It has several variants to improve its performances, such as Shaker Sort, Odd Even Sort and Comb Sort.</h3>
          </Col>
        </div>
        <div className="mobile-table">
          <div>
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
          </div>
        </div>
      </Row>
      <CodeEditor Cpp={Cpp} Java={Java} Python={Python} Javascript={Javascript} C={C} C_opt={C_opt}/>
    </React.Fragment>
  )
}
