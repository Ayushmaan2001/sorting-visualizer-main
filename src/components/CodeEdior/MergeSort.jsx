import React from 'react'
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor';

let Cpp = `
#include <iostream>
#include <vector>

// Function to merge two sorted arrays
std::vector<int> merge(const std::vector<int>& left, const std::vector<int>& right)
{
    std::vector<int> result; // Vector to store the merged array
 
    // Indexes to track the current position in the left and right arrays
    int i = 0, j = 0;
 
    // Loop until one of the arrays is fully processed
    while (i < left.size() && j < right.size())
    {
        // If the element in the left array is smaller, add it to the result
        if (left[i] < right[j])
            result.push_back(left[i++]);
        else // Otherwise, add the element in the right array
            result.push_back(right[j++]);
    }
 
    // Add the remaining elements from the left array (if any)
    while (i < left.size())
        result.push_back(left[i++]);
 
    // Add the remaining elements from the right array (if any)
    while (j < right.size())
        result.push_back(right[j++]);
 
    return result;
}

// Recursive function to sort an array using mergesort
std::vector<int> mergesort(std::vector<int> arr)
{
    // If the array has more than one element, split it in half
    if (arr.size() > 1)
    {
        // Calculate the midpoint of the array
        int mid = arr.size() / 2;
 
        // Split the array into two halves
        std::vector<int> left(arr.begin(), arr.begin() + mid);
        std::vector<int> right(arr.begin() + mid, arr.end());
 
        // Sort the two halves
        left = mergesort(left);
        right = mergesort(right);
 
        // Merge the sorted halves
        arr = merge(left, right);
    }
 
    return arr;
}

int main()
{
    std::vector<int> arr = {5, 3, 6, 2, 10};
 
    // Sort the array
    arr = mergesort(arr);
 
    // Print the sorted array
    for (int i : arr)
        std::cout << i << " ";
 
    return 0;
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
def merge(left, right):
    result = [] # List to store the merged array
 
    # Indexes to track the current position in the left and right lists
    i = 0
    j = 0
 
    # Loop until one of the lists is fully processed
    while i < len(left) and j < len(right):
        # If the element in the left list is smaller, add it to the result
        if left[i] < right[j]:
            result.append(left[i])
            i += 1
        else: # Otherwise, add the element in the right list
            result.append(right[j])
            j += 1
 
    # Add the remaining elements from the left list (if any)
    result.extend(left[i:])
 
    # Add the remaining elements from the right list (if any)
    result.extend(right[j:])
 
    return result

def mergesort(arr):
    # If the array has more than one element, split it in half
    if len(arr) > 1:
        # Calculate the midpoint of the array
        mid = len(arr) // 2
 
        # Split the array into two halves
        left = arr[:mid]
        right = arr[mid:]
 
        # Sort the two halves
        left = mergesort(left)
        right = mergesort(right)
 
        # Merge the sorted halves
        arr = merge(left, right)
 
    return arr

# Test the function
print(mergesort([5, 3, 6, 2, 10])) # [2, 3, 5, 6, 10]

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
`,
C=`void merge(int arr[], int left, int mid, int right) {
  int i, j, k;
  int n1 = mid - left + 1;
  int n2 = right - mid;

  int L[n1], R[n2];

  for (i = 0; i < n1; i++)
      L[i] = arr[left + i];
  for (j = 0; j < n2; j++)
      R[j] = arr[mid + 1 + j];

  i = 0;
  j = 0;
  k = left;

  while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
          arr[k] = L[i];
          i++;
      } else {
          arr[k] = R[j];
          j++;
      }
      k++;
  }

  while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
  }

  while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
  }
}

void mergeSort(int arr[], int left, int right) {
  if (left < right) {
      int mid = left + (right - left) / 2;

      mergeSort(arr, left, mid);
      mergeSort(arr, mid + 1, right);

      merge(arr, left, mid, right);
  }
}
`,
C_opt= `void merge(int arr[], int left, int mid, int right) {
  int i, j, k;
  int n1 = mid - left + 1;
  int n2 = right - mid;

  int L[n1], R[n2];

  for (i = 0; i < n1; i++)
      L[i] = arr[left + i];
  for (j = 0; j < n2; j++)
      R[j] = arr[mid + 1 + j];

  i = 0;
  j = 0;
  k = left;

  while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
          arr[k] = L[i];
          i++;
      } else {
          arr[k] = R[j];
          j++;
      }
      k++;
  }

  while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
  }

  while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
  }
}

void mergeSort(int arr[], int left, int right) {
  if (left < right) {
      int mid = left + (right - left) / 2;

      mergeSort(arr, left, mid);
      mergeSort(arr, mid + 1, right);

      merge(arr, left, mid, right);
  }
}
`,
Cpp_opt = ``,
Java_opt=``,
Python_opt=``,
Javascript_opt=``
export default function MergeSort({text}) {
  return (
    <React.Fragment>
      <Row className='bg'>
          <div className='desc'>
      <Col span={60} style={{ color: 'white' }}><h1 style={{ color: 'orange' }}>Description</h1>
        <h3 style={{ color: 'white' }}>Merge Sort is a sorting algorithm based on the Divide et Impera technique, like Quick Sort. It can be implemented iteratively or recursively, using the Top-Down and Bottom-Up algorithms respectively. We represented the first one.</h3>
        <h3 style={{ color: 'white' }}>The algorithm divides the data structure recursively until the subsequences contain only one element. At this point, the subsequences get merged and ordered sequentially. To do so, the algorithm progressively builds the sorted sublist by adding each time the minimum element of the next two unsorted subsequences until there is only one sublist remaining. This will be the sorted data structure.
        </h3>
      </Col>
      </div>
          <div className="mobile-table">
      <Col span={8}>
        <h1 style={{ color: 'white' }}>Asymptotic Complexity</h1>
        <table className="styled-table">
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
              <td>O(nlogn)</td>
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
      <CodeEditor Cpp={Cpp} Java={Java} Python={Python} Javascript={Javascript} C={C} C_opt={C_opt} />
    </React.Fragment>
  )
}
