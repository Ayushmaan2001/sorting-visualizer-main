import React from 'react'
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor';

let Cpp = `
#include <iostream>
#include <vector>

// Counting sort function
void countingSort(const std::vector<int>& arr, std::vector<int>& sorted_arr, int max)
{
    std::vector<int> counts(max + 1); // Vector to store the counts of each element
 
    // Loop through the array and count the occurences of each element
    for (int i : arr)
        counts[i]++;
 
    // Loop through the counts and add the elements to the sorted array
    for (int i = 0, j = 0; i <= max; i++)
        for (int k = 0; k < counts[i]; k++)
            sorted_arr[j++] = i;
}

/*
    Note that this implementation of counting sort requires the maximum element in the array to be known in advance. If the maximum element is not known, you can use a variation of counting sort called "radix sort" which works by sorting the elements based on their digits (e.g., ones place, tens place, etc.)
*/

int main()
{
    std::vector<int> arr = {5, 3, 6, 2, 10};
    std::vector<int> sorted_arr(arr.size()); // Vector to store the sorted array
 
    // Sort the array
    countingSort(arr, sorted_arr, 10);
 
    // Print the sorted array
    for (int i : sorted_arr)
        std::cout << i << " ";
 
    return 0;
}

`,
Python = `
def counting_sort(arr, max):
    counts = [0] * (max + 1) # List to store the counts of each element
 
    # Loop through the array and count the occurences of each element
    for i in arr:
        counts[i] += 1
 
    # Initialize the sorted array
    sorted_arr = []
 
    # Loop through the counts and add the elements to the sorted array
    for i, count in enumerate(counts):
        for j in range(count):
            sorted_arr.append(i)
 
    return sorted_arr

# Test the function
print(counting_sort([5, 3, 6, 2, 10], 10)) # [2, 3, 5, 6, 10]

`,
Java = `
import java.util.*;

public class Main {
  
    void countingSortTechnique(int arr[]) {
     
     int len = arr.length;
     
     // we are assuming that there won't be a number greater than 1000
     int newArrCount[] = new int[1001];
     int outputArr[] = new int[len];
     // counting the occurence of each number
     for(int i = 0; i < len; i++) {
       newArrCount[arr[i]]++;
     }
     
     for(int i = 1; i <= 1000; i++) {
       newArrCount[i] += newArrCount[i - 1];
     }
     
     // updating the output array
     for(int i = len - 1; i >= 0; i--) {
       outputArr[newArrCount[arr[i]] - 1] = arr[i];
       newArrCount[arr[i]]--;
     }
     
     // updating the final array
     for(int i = 0; i < len; i++) {
       arr[i] = outputArr[i];
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
      // function which will sort the given array using counting sort
      object.countingSortTechnique(arr);
      System.out.println("Array after sorting - ");
      
      // function to print the new array
      object.printArr(arr);
  }
}
`,
Javascript = `
// We are assuming the maximum element possible cannot exceed 1000 for this code



let arr = [1000, 1, 100, 3, 2, 34, 54, 89, 75, 37];


let len = arr.length;


// function to print array
function print(str) {
  
  console.log(str);
  arr.forEach(function(num) {
    console.log(num);
  });
}


// counting sort
function countingSort() {
  
  
  // count array will contain the frequency of each element
  let count = [];
  
  // output array will contain the resultant array
  let output = [];
  
  // calculating the frequency
  arr.forEach(function(num) {
    
    if(!count[num]) {
      count[num] = 1;
    } else {
      count[num] += 1;
    }

  });
  count[0] = 0;
  
  // making the count array more suitable for output array
  for(let i = 1; i <= 1000; i++) {
    if(!count[i]) count[i] = 0;
    
    count[i] += count[i - 1];
  }
  
  
  // formation of output array
  for(let i = len - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }
  
  
  // finally copying the data from output array to original array
  for(let i = 0; i < len; i++) {
    arr[i] = output[i];
  }
}

// this function call will print the original array
print("Before");

// calling countingSort function 
countingSort();

// after sorting this function call will print the final array
print("After");
`,
C=`void countingSort(int arr[], int n, int max) {
  int count[max + 1];
  int output[n];

  // Initialize count array with all elements as 0
  for (int i = 0; i <= max; i++) {
      count[i] = 0;
  }

  // Store the count of each element
  for (int i = 0; i < n; i++) {
      count[arr[i]]++;
  }

  // Calculate the cumulative count
  for (int i = 1; i <= max; i++) {
      count[i] += count[i - 1];
  }

  // Build the output array
  for (int i = 0; i < n; i++) {
      output[count[arr[i]] - 1] = arr[i];
      count[arr[i]]--;
  }

  // Copy the sorted elements to the original array
  for (int i = 0; i < n; i++) {
      arr[i] = output[i];
  }
}
`,
C_opt= `void countingSort(int arr[], int n, int max) {
  int count[max + 1];

  // Initialize count array with all elements as 0
  for (int i = 0; i <= max; i++) {
      count[i] = 0;
  }

  // Store the count of each element
  for (int i = 0; i < n; i++) {
      count[arr[i]]++;
  }

  int outputIndex = 0;
  // Build the output array directly from the count array
  for (int i = 0; i <= max; i++) {
      while (count[i] > 0) {
          arr[outputIndex] = i;
          outputIndex++;
          count[i]--;
      }
  }
}
`,
Cpp_opt = ``,
Java_opt=``,
Python_opt=``,
Javascript_opt=``
export default function CountingSort() {
  return (
    <React.Fragment><Row className='bg'>
      <div className='desc'>
      <Col span={60} style={{ color: 'white' }} ><h1 style={{ color: 'orange' }}>Description</h1>
        <h3 style={{ color: 'white' }}>Counting sort is a sorting algorithm that sorts the elements of an array by counting the number of occurrences of each unique element in the array. The count is stored in an auxiliary array and the sorting is done by mapping the count as an index of the auxiliary array.</h3>
        <h3 style={{ color: 'white' }}>Here n is the size of elements and k is the range of the elements</h3></Col>
      </div>
      <div className="mobile-table">
      <Col span={8}>
        <h1 style={{ color: 'white' }}>Asymptotic Complexity</h1>
        <table className="styled-table mobile-table">
          <thead>
            <tr>
              <th>Average Time Complexity</th>
              <th>Θ(n+k)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Best Case Time Complexity</td>
              <td>Ω(nxk)</td>
            </tr>
            <tr>
              <td>Worst Case Time Complexity</td>
              <td>O(n+k)</td>
            </tr>
            <tr>
              <td>Space Complexity</td>
              <td>O(n+k)</td>
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
