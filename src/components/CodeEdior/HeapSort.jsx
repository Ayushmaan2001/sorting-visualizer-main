import React from 'react';
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor';

let Cpp = `
void heapify(int arr[], int N, int i)
{
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;
    if (l < N && arr[l] > arr[largest])
        largest = l;
    if (r < N && arr[r] > arr[largest])
        largest = r;
    if (largest != i) {
        swap(arr[i], arr[largest]);
        heapify(arr, N, largest);
    }
}
void heapSort(int arr[], int N)
{
 
    for (int i = N / 2 - 1; i >= 0; i--)
        heapify(arr, N, i);
    for (int i = N - 1; i > 0; i--) {
        swap(arr[0], arr[i]);
        heapify(arr, i, 0);
    }
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
def heapify(arr, N, i):
    largest = i  # Initialize largest as root
    l = 2 * i + 1     # left = 2*i + 1
    r = 2 * i + 2     # right = 2*i + 2
    if l < N and arr[largest] < arr[l]:
        largest = l
    if r < N and arr[largest] < arr[r]:
        largest = r
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]  # swap
        heapify(arr, N, largest)

def heapSort(arr):
    N = len(arr)
    for i in range(N//2 - 1, -1, -1):
        heapify(arr, N, i)
    for i in range(N-1, 0, -1):
        arr[i], arr[0] = arr[0], arr[i]  # swap
        heapify(arr, i, 0)
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
`
const HeapSort = () => {
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
                <h2 style={{ color: 'white' }}>Heap Sort is an in-place iterative sorting algorithm based on auxiliary data structures called heap. It's less efficient than algorithm with the same time complexity and it's not suitable for data structures with few elements</h2>
                <h2 style={{ color: 'white' }}>The heap is a data structure representable as a binary tree, where each node has a value bigger or equal to its children. Consequently, the root will hold the maximum value.</h2>
                <h2 style={{ color: 'white' }}>The data structure gets ordered to form the heap initially, and then it gets progressively reordered with an algorithm similar to Selection Sort, starting from the bigger elements.</h2>
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
                            <td>O(1)</td>
                        </tr>
                    </tbody>
                </table>
            </Col>
            </div>
        </Row>
            <CodeEditor Cpp={Cpp} Java={Java} Python={Python} Javascript={Javascript} d2={false} d3={false} d4={false} />
        </React.Fragment>
    );
}

export default HeapSort;
