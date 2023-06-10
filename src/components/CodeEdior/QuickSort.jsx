import React from 'react'
import { Row,Col } from 'antd'
import './table.css'
import CodeEditor from './codeEditor'

let Cpp = `
#include <iostream>

// Function to partition the array and return the pivot index
int partition(int *arr, int start, int end)
{
    int pivot = arr[end]; // Choose the last element as the pivot
    int i = start - 1;   // Index of the smaller element
 
    // Loop through the array and swap elements if necessary
    for (int j = start; j < end; j++)
    {
        // If the current element is smaller than the pivot
        if (arr[j] < pivot)
        {
            i++; // Increment the index of the smaller element
            std::swap(arr[i], arr[j]); // Swap the elements
        }
    }
 
    std::swap(arr[i + 1], arr[end]); // Swap the pivot element into its correct position
    return i + 1; // Return the pivot index
}

// Recursive quicksort function
void quicksort(int *arr, int start, int end)
{
    if (start < end) // If the array has more than one element
    {
        int pivotIndex = partition(arr, start, end); // Partition the array and get the pivot index
 
        // Sort the elements before and after the pivot
        quicksort(arr, start, pivotIndex - 1);
        quicksort(arr, pivotIndex + 1, end);
    }
}

int main()
{
    int arr[] = {5, 3, 6, 2, 10};
    int n = sizeof(arr) / sizeof(arr[0]);
 
    // Sort the array
    quicksort(arr, 0, n - 1);
 
    // Print the sorted array
    for (int i = 0; i < n; i++)
        std::cout << arr[i] << " ";
 
    return 0;
}
`,
Java = `
import java.util.*;

public class Main {
  
    int partition(int l, int r, int arr[]) {
       int j = r;
        for(int i = l; i <= r; i++) {
          
        // if value greater than pivot is at lower position than pivot's
         if(i < j && arr[i] > arr[j]) {
         
          int temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
         }
         
         // if value smaller than pivot is at greater position than pivot's
         else if(i > j && arr[i] < arr[j]) {
         
         int temp = arr[j];
         arr[j] = arr[i];
         arr[i] = temp;
       }
     }
     return j;
    }
  // acc to function it is taking the pivot as the last number
    void quickSortTechnique(int l, int r, int arr[]) {
     if(l >= r) return;
     
     
     // this function will place the pivot value at its right position and
     // return its index so that we can keep doing quicksort on left and right half
     int j = partition(l, r, arr);
     
     
     // going for left half before j
     quickSortTechnique(l, j - 1, arr);
     
     //going for right half of j
     quickSortTechnique(j + 1, r, arr);
     
     
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
      object.quickSortTechnique(0, len - 1, arr);
      System.out.println("Array after sorting - ");
      
      // function to print the new array
      object.printArr(arr);
  }
}
`,
Python = `
def partition(arr, start, end):
    # Choose the last element as the pivot
    pivot = arr[end]
 
    # Index of the smaller element
    i = start - 1
 
    # Loop through the array and swap elements if necessary
    for j in range(start, end):
        # If the current element is smaller than the pivot
        if arr[j] < pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
 
    # Swap the pivot element into its correct position
    arr[i + 1], arr[end] = arr[end], arr[i + 1]
 
    return i + 1

def quicksort(arr, start, end):
    if start < end:
        # Partition the array and get the pivot index
        pivot_index = partition(arr, start, end)
 
        # Sort the elements before and after the pivot
        quicksort(arr, start, pivot_index - 1)
        quicksort(arr, pivot_index + 1, end)

# Test the function
print(quicksort([5, 3, 6, 2, 10], 0, 4)) # [2, 3, 5, 6, 10]

`,
Javascript = `
// In this code we have taken pivot as the last value of range, but you can
// take any value you want

let arr = [1000, 1, 100, 3, 2, 34, 54, 89, 75, 37];


let len = arr.length;

// function to print array
function print(str) {
  
  console.log(str);
  arr.forEach(function(num) {
    console.log(num);
  });
}

// this function will place pivot value at its right position and 
// and all greater value to its right and all lower value to its left
function partition(l, r) {
  
       let j = r;
        for(let i = l; i <= r; i++) {
          
        // if value greater than pivot is at lower position than pivot's
         if(i < j && arr[i] > arr[j]) {
         
          let temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
         }
         
         // if value smaller than pivot is at greater position than pivot's
         else if(i > j && arr[i] < arr[j]) {
         
         let temp = arr[j];
         arr[j] = arr[i];
         arr[i] = temp;
       }
     }
     
     // returning the index of the pivot value
     return j;
}


// quicksort function which recursively call itself and palce elements at their 
// right position
function quickSort(l, r) {
  if(l < r) {
    let partition_index = partition(l, r);
    
    quickSort(l, partition_index - 1);
    quickSort(partition_index + 1, r);
  }
}

// this function call will print the original array
print("Before");

// calling quickSort function 
quickSort(0, len - 1);

// after sorting this function call will print the final array
print("After");
`,C=`void swap(int* a, int* b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

int partition(int arr[], int low, int high) {
  int pivot = arr[high];
  int i = (low - 1);

  for (int j = low; j <= high - 1; j++) {
      if (arr[j] < pivot) {
          i++;
          swap(&arr[i], &arr[j]);
      }
  }
  swap(&arr[i + 1], &arr[high]);
  return (i + 1);
}

void quickSort(int arr[], int low, int high) {
  if (low < high) {
      int pi = partition(arr, low, high);

      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
  }
}
`,
C_opt= `void swap(int* a, int* b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

int partition(int arr[], int low, int high) {
  int pivot = arr[high];
  int i = (low - 1);

  for (int j = low; j <= high - 1; j++) {
      if (arr[j] < pivot) {
          i++;
          swap(&arr[i], &arr[j]);
      }
  }
  swap(&arr[i + 1], &arr[high]);
  return (i + 1);
}

void quickSort(int arr[], int low, int high) {
  if (low < high) {
      int pi = partition(arr, low, high);

      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
  }
}
`,
Cpp_opt = ``,
Java_opt=``,
Python_opt=``,
Javascript_opt=``

export default function QuickSort({text}) {
  return (
    <React.Fragment>
      <Row className='bg'>
          <div className='desc'>
      <Col span={14} style={{ color: 'white' }}><h1 style={{ color: 'orange' }}>Description</h1>
        <h3 style={{ color: 'white' }}>Quick Sort is a sorting algorithm based on splitting the data structure in smaller partitions and sort them recursively until the data structure is sorted.</h3>
        <h3 style={{ color: 'white' }}>This division in partitions is done based on an element, called pivot: all the elements bigger than the pivot get placed on the right side of the structure, the smaller ones to the left, creating two partitions. Next, this procedure gets applied recursively to the two partitions and so on.
        </h3>
        <h3 style={{ color: 'white' }}>This partition technique based on the pivot is called Divide and conquer. It's a performant strategy also used by other sorting algorithms, such as Merge Sort.</h3>
      </Col>
        </div>
          <div className="mobile-table">
      <Col span={8}>
        <h1 style={{color:'white'}}>Asymptotic Complexity</h1>
        <table Name="styled-table">
          <thead>
            <tr>
              <th>Average Time Complexity</th>
              <th>Θ(nlogn)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Best Case Time Complexity</td>
              <td>Ω(nlogn)</td>
            </tr>
            <tr>
              <td>Worst Case Time Complexity</td>
              <td>O(n<sup>2</sup>)</td>
            </tr>
            <tr>
              <td>Space Complexity</td>
              <td>O(logn)</td>
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
