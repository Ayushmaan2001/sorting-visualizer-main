import React from 'react';
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor'

let Cpp = `
// A C++ Program to implement Gnome Sort
#include <iostream>
using namespace std;

// A function to sort the algorithm using gnome sort
void gnomeSort(int arr[], int n)
{
	int index = 0;

	while (index < n) {
		if (index == 0)
			index++;
		if (arr[index] >= arr[index - 1])
			index++;
		else {
			swap(arr[index], arr[index - 1]);
			index--;
		}
	}
	return;
}

// A utility function ot print an array of size n
void printArray(int arr[], int n)
{
	cout << "Sorted sequence after Gnome sort: ";
	for (int i = 0; i < n; i++)
		cout << arr[i] << " ";
	cout << "\n";
}

// Driver program to test above functions.
int main()
{
	int arr[] = { 34, 2, 10, -9 };
	int n = sizeof(arr) / sizeof(arr[0]);

	gnomeSort(arr, n);
	printArray(arr, n);

	return (0);
}

`,
  Java = `
  // Java Program to implement Gnome Sort

  import java.util.Arrays;
  public class GFG {
    static void gnomeSort(int arr[], int n)
    {
      int index = 0;
  
      while (index < n) {
        if (index == 0)
          index++;
        if (arr[index] >= arr[index - 1])
          index++;
        else {
          int temp = 0;
          temp = arr[index];
          arr[index] = arr[index - 1];
          arr[index - 1] = temp;
          index--;
        }
      }
      return;
    }
  
    // Driver program to test above functions.
    public static void main(String[] args)
    {
      int arr[] = { 34, 2, 10, -9 };
  
      gnomeSort(arr, arr.length);
  
      System.out.print("Sorted sequence after applying Gnome sort: ");
      System.out.println(Arrays.toString(arr));
    }
  }

`,
  Python = `
  # Python program to implement Gnome Sort

  # A function to sort the given list using Gnome sort
  def gnomeSort( arr, n):
    index = 0
    while index < n:
      if index == 0:
        index = index + 1
      if arr[index] >= arr[index - 1]:
        index = index + 1
      else:
        arr[index], arr[index-1] = arr[index-1], arr[index]
        index = index - 1
  
    return arr
  
  # Driver Code
  arr = [ 34, 2, 10, -9]
  n = len(arr)
  
  arr = gnomeSort(arr, n)
  print "Sorted sequence after applying Gnome Sort :",
  for i in arr:
    print i,
  
`,
  Javascript = `
  <script>

  // Javascript Program to implement Gnome Sort
  
  function gnomeSort(arr, n)
    {
      let index = 0;
    
      while (index < n) {
        if (index == 0)
          index++;
        if (arr[index] >= arr[index - 1])
          index++;
        else {
          let temp = 0;
          temp = arr[index];
          arr[index] = arr[index - 1];
          arr[index - 1] = temp;
          index--;
        }
      }
      return;
    }
  
  // Driver Code
    
      let arr = [34, 2, 10, -9 ];
    
      gnomeSort(arr, arr.length);
    
      document.write("Sorted sequence after applying Gnome sort: ");
      document.write(arr.toString());
        
  </script>
  
`,C=`void swap(int* a, int* b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

void gnomeSort(int arr[], int n) {
  int pos = 0;

  while (pos < n) {
      if (pos == 0 || arr[pos] >= arr[pos - 1]) {
          pos++;
      } else {
          swap(&arr[pos], &arr[pos - 1]);
          pos--;
      }
  }
}
`,
C_opt= `void swap(int* a, int* b) {
  int temp = *a;
  *a = *b;
  *b = temp;
}

void gnomeSort(int arr[], int n) {
  int pos = 0;

  while (pos < n) {
      if (pos == 0 || arr[pos] >= arr[pos - 1]) {
          pos++;
      } else {
          swap(&arr[pos], &arr[pos - 1]);
          pos--;
      }

      if (pos > 1 && arr[pos] < arr[pos - 1]) {
          pos--;
      }
  }
}
`,
Cpp_opt = ``,
Java_opt=``,
Python_opt=``,
Javascript_opt=``

const GenomeSort = () => {
    return (
        <React.Fragment>
      <Row className="bg">
        <div className='desc'>
          <Col span={60}><h1 style={{ color: 'orange'}}>Description</h1>
            <h3 style={{ color: 'white' }}>Gnome Sort also called Stupid sort is based on the concept of a Garden Gnome sorting his flower pots. A garden gnome sorts the flower pots by the following method</h3>
            <h3 style={{ color: 'white' }}>He looks at the flower pot next to him and the previous one; if they are in the right order he steps one pot forward, otherwise he swaps them and steps one pot backwards.</h3>
            <h3 style={{ color: 'white' }}>If there is no previous pot (he is at the starting of the pot line), he steps forwards; if there is no pot next to him (he is at the end of the pot line), he is done.</h3>
          </Col>
        </div>
        <div className="mobile-table">
          <div>
            <h1 style={{ color: 'white' }}>Asymptotic Complexity</h1>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Average Time Complexity</th>
                  <th>Θ(n log n)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Best Case Time Complexity</td>
                  <td>Ω(n log n)</td>
                </tr>
                <tr>
                  <td>Worst Case Time Complexity</td>
                  <td>O(nlogn)</td>
                </tr>
                <tr>
                  <td>Space Complexity</td>
                  <td>O(B)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Row>
      <CodeEditor Cpp={Cpp} Java={Java} Python={Python} Javascript={Javascript} C={C} C_opt={C_opt} />
    </React.Fragment>
    );
}

export default GenomeSort;
