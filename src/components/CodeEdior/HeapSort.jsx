import React from 'react';
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor';

let Cpp = `
#include <iostream>
#include <vector>

// Function to fix the heap property at the given index
void heapify(std::vector<int>& heap, int i, int heap_size)
{
    int left = 2 * i + 1;    // Index of the left child
    int right = 2 * i + 2;   // Index of the right child
    int largest = i;         // Index of the largest element
 
    // If the left child is larger than the root
    if (left < heap_size && heap[left] > heap[largest])
        largest = left;
 
    // If the right child is larger than the largest element
    if (right < heap_size && heap[right] > heap[largest])
        largest = right;
 
    // If the largest element is not the root
    if (largest != i)
    {
        std::swap(heap[i], heap[largest]); // Swap the root with the largest element
 
        // Fix the heap property for the new subtree
        heapify(heap, largest, heap_size);
    }
}

// Heapsort function
void heapsort(std::vector<int>& heap)
{
    // Build the heap
    for (int i = heap.size() / 2 - 1; i >= 0; i--)
        heapify(heap, i, heap.size());
 
    // Sort the heap
    for (int i = heap.size() - 1; i >= 0; i--)
    {
        std::swap(heap[0], heap[i]); // Swap the root with the last element
 
        // Fix the heap property for the new subtree
        heapify(heap, 0, i);
    }
}

int main()
{
    std::vector<int> arr = {5, 3, 6, 2, 10};
 
    // Sort the array
    heapsort(arr);
 
    // Print the sorted array
    for (int i : arr)
        std::cout << i << " ";
 
    return 0;
}


`,
    Java = `
    import java.util.*;

    public class Main {
      
      
        // this function will make arrangement for ith index and after that below index
        // if there will be a problem
        void heapify(int arr[], int len, int i) {
          
          int left = 2 * i + 1;
          int right = 2 * i + 2;
          int largest = i;
          
          if(left >= 0 && left < len && arr[left] > arr[largest]) {
            largest = left;
          }
          
          if(right >= 0 && right < len && arr[right] > arr[largest]) {
            largest = right;
          }
          
          if(largest != i) {
            int temp = arr[largest];
            arr[largest] = arr[i];
            arr[i] = temp;
            
            heapify(arr, len, largest);
          }
          
        }
      
        void heapSortTechnique(int arr[]) {
          int len = arr.length;
          
          
          for(int i = len / 2; i >= 0; i--) {
            heapify(arr, len, i);
          }
          
          for(int i = len - 1; i > 0; i--) {
            
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            
            heapify(arr, i, 0);
             
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
          // function which will sort the given array using heap sort
          object.heapSortTechnique(arr);
          System.out.println("Array after sorting - ");
          
          // function to print the new array
          object.printArr(arr);
      }
    }
`,
    Python = `
    def heapify(heap, i, heap_size):
    left = 2 * i + 1    # Index of the left child
    right = 2 * i + 2   # Index of the right child
    largest = i         # Index of the largest element
 
    # If the left child is larger than the root
    if left < heap_size and heap[left] > heap[largest]:
        largest = left
 
    # If the right child is larger than the largest element
    if right < heap_size and heap[right] > heap[largest]:
        largest = right
 
    # If the largest element is not the root
    if largest != i:
        heap[i], heap[largest] = heap[largest], heap[i] # Swap the root with the largest element
 
        # Fix the heap property for the new subtree
        heapify(heap, largest, heap_size)

def heapsort(heap):
    # Build the heap
    for i in range(len(heap) // 2 - 1, -1, -1):
        heapify(heap, i, len(heap))
 
    # Sort the heap
    for i in range(len(heap) - 1, 0, -1):
        heap[0], heap[i] = heap[i], heap[0] # Swap the root with the last element
 
        # Fix the heap property for the new subtree
        heapify(heap, 0, i)

# Test the function
print(heapsort([5, 3, 6, 2, 10])) # [2, 3, 5, 6, 10]

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
    
    // this function will make arrangement for ith index and lower indexes
    // if there will be a problem
    function heapify(len, i) {
      
          let left = 2 * i + 1;
          let right = 2 * i + 2;
          let largest = i;
          
          if(left >= 0 && left < len && arr[left] > arr[largest]) {
            largest = left;
          }
          
          if(right >= 0 && right < len && arr[right] > arr[largest]) {
            largest = right;
          }
          
          if(largest != i) {
            let temp = arr[largest];
            arr[largest] = arr[i];
            arr[i] = temp;
            
            heapify(len, largest);
          }
    }
    
    
    function heapSort() {
          
          for(let i = len / 2; i >= 0; i--) {
            heapify(len, i);
          }
          
          for(let i = len - 1; i > 0; i--) {
            
            let temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;
            
            heapify(i, 0);
             
          }
    }
    
    // this function call will print the original array
    print("Before");
    
    // calling heapSort function 
    heapSort(0, len - 1);
    
    // after sorting this function call will print the final array
    print("After");
`,
C=`void heapify(int arr[], int n, int i) {
  int largest = i; // Initialize largest as root
  int left = 2 * i + 1; // Left child
  int right = 2 * i + 2; // Right child

  // If left child is larger than root
  if (left < n && arr[left] > arr[largest])
      largest = left;

  // If right child is larger than largest so far
  if (right < n && arr[right] > arr[largest])
      largest = right;

  // If largest is not root
  if (largest != i) {
      swap(&arr[i], &arr[largest]);

      // Recursively heapify the affected sub-tree
      heapify(arr, n, largest);
  }
}

void heapSort(int arr[], int n) {
  // Build the heap (rearrange the array)
  for (int i = n / 2 - 1; i >= 0; i--)
      heapify(arr, n, i);

  // Extract elements from the heap one by one
  for (int i = n - 1; i > 0; i--) {
      // Move the current root to the end
      swap(&arr[0], &arr[i]);

      // Call heapify on the reduced heap
      heapify(arr, i, 0);
  }
}
`,
C_opt= `void heapify(int arr[], int n, int i) {
  int largest = i;
  int left = 2 * i + 1;
  int right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest])
      largest = left;

  if (right < n && arr[right] > arr[largest])
      largest = right;

  if (largest != i) {
      swap(&arr[i], &arr[largest]);
      heapify(arr, n, largest);
  }
}

void heapSort(int arr[], int n) {
  for (int i = n / 2 - 1; i >= 0; i--)
      heapify(arr, n, i);

  for (int i = n - 1; i > 0; i--) {
      swap(&arr[0], &arr[i]);
      heapify(arr, i, 0);
  }
}
`,
Cpp_opt = ``,
Java_opt=``,
Python_opt=``,
Javascript_opt=``
const HeapSort = () => {
    return (
        <React.Fragment>
          <Row className='bg'>
            <div className='desc'>
            <Col span={60} style={{ color: 'white' }}><h1 style={{ color: 'orange' }}>Description</h1>
                <h3 style={{ color: 'white' }}>Heap Sort is an in-place iterative sorting algorithm based on auxiliary data structures called heap. It's less efficient than algorithm with the same time complexity and it's not suitable for data structures with few elements</h3>
                <h3 style={{ color: 'white' }}>The heap is a data structure representable as a binary tree, where each node has a value bigger or equal to its children. Consequently, the root will hold the maximum value.</h3>
                <h3 style={{ color: 'white' }}>The data structure gets ordered to form the heap initially, and then it gets progressively reordered with an algorithm similar to Selection Sort, starting from the bigger elements.</h3>
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
                            <td>O(1)</td>
                        </tr>
                    </tbody>
                </table>
            </Col>
            </div>
        </Row>
            <CodeEditor Cpp={Cpp} Java={Java} Python={Python} Javascript={Javascript} C={C} C_opt={C_opt} />
        </React.Fragment>
    );
}

export default HeapSort;
