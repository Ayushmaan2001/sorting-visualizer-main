import React from 'react'
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor';

let Cpp = `
#define RANGE 255
void countSort(char arr[])
{
    memset(count, 0, sizeof(count));
    for (i = 0; arr[i]; ++i)
        ++count[arr[i]];
    for (i = 1; i <= RANGE; ++i)
        count[i] += count[i - 1];
    for (i = 0; arr[i]; ++i) {
        output[count[arr[i]] - 1] = arr[i];
        --count[arr[i]];
    }
    for (i = sizeof(arr)-1; i>=0; --i) 
    { 
        output[count[arr[i]]-1] = arr[i]; 
        --count[arr[i]]; 
    } 
    for (i = 0; arr[i]; ++i)
        arr[i] = output[i];
}
`,
Python = `
def countSort(arr):
    output = [0 for i in range(len(arr))]
    count = [0 for i in range(256)]
    ans = ["" for _ in arr]
    for i in arr:
        count[ord(i)] += 1
    for i in range(256):
        count[i] += count[i-1]
    for i in range(len(arr)):
        output[count[ord(arr[i])]-1] = arr[i]
        count[ord(arr[i])] -= 1
    for i in range(len(arr)):
        ans[i] = output[i]
    return ans 
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
`
export default function CountingSort() {
  return (
    <React.Fragment><Row style={{
      marginTop: '30px',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignContent: 'space-between',
      justifyContent: 'space-around',
    }}>
      <div className='desc'>
      <Col span={14} style={{ color: 'white' }} ><h1 style={{ color: 'orange' }}>Description</h1>
        <h2 style={{ color: 'white' }}>Counting sort is a sorting algorithm that sorts the elements of an array by counting the number of occurrences of each unique element in the array. The count is stored in an auxiliary array and the sorting is done by mapping the count as an index of the auxiliary array.</h2>
        <h2 style={{ color: 'white' }}>Here n is the size of elements and k is the range of the elements</h2></Col>
      </div>
      <div className="mobile-table">
      <Col span={8}>
        <h1 style={{ color: 'white' }}>Complexity</h1>
        <table className="styled-table mobile-table">
          <thead>
            <tr>
              <th>Average Complexity</th>
              <th>O(nxk)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Best Case</td>
              <td>O(nxk)</td>
            </tr>
            <tr>
              <td>Worst Case</td>
              <td>O(nxk)</td>
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
  )
}
