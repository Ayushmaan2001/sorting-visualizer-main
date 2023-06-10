import React from 'react';
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor'

let Cpp = `
// C++ code to implement stooge sort
#include <iostream>
using namespace std;

// Function to implement stooge sort
void stoogesort(int arr[], int l, int h)
{
	if (l >= h)
		return;

	// If first element is smaller than last,
	// swap them
	if (arr[l] > arr[h])
		swap(arr[l], arr[h]);

	// If there are more than 2 elements in
	// the array
	if (h - l + 1 > 2) {
		int t = (h - l + 1) / 3;

		// Recursively sort first 2/3 elements
		stoogesort(arr, l, h - t);

		// Recursively sort last 2/3 elements
		stoogesort(arr, l + t, h);

		// Recursively sort first 2/3 elements
		// again to confirm
		stoogesort(arr, l, h - t);
	}
}

// Driver Code
int main()
{
	int arr[] = { 2, 4, 5, 3, 1 };
	int n = sizeof(arr) / sizeof(arr[0]);

	// Calling Stooge Sort function to sort
	// the array
	stoogesort(arr, 0, n - 1);

	// Display the sorted array
	for (int i = 0; i < n; i++)
		cout << arr[i] << " ";

	return 0;
}


`,
  Java = `
  // Java program to implement stooge sort
  import java.io.*;
  
  public class stooge {
    // Function to implement stooge sort
    static void stoogesort(int arr[], int l, int h)
    {
      if (l >= h)
        return;
  
      // If first element is smaller
      // than last, swap them
      if (arr[l] > arr[h]) {
        int t = arr[l];
        arr[l] = arr[h];
        arr[h] = t;
      }
  
      // If there are more than 2 elements in
      // the array
      if (h - l + 1 > 2) {
        int t = (h - l + 1) / 3;
  
        // Recursively sort first 2/3 elements
        stoogesort(arr, l, h - t);
  
        // Recursively sort last 2/3 elements
        stoogesort(arr, l + t, h);
  
        // Recursively sort first 2/3 elements
        // again to confirm
        stoogesort(arr, l, h - t);
      }
    }
  
    // Driver Code
    public static void main(String args[])
    {
      int arr[] = { 2, 4, 5, 3, 1 };
      int n = arr.length;
  
      stoogesort(arr, 0, n - 1);
  
      for (int i = 0; i < n; i++)
        System.out.print(arr[i] + " ");
    }
  }
  // Code Contributed by Mohit Gupta_OMG <(0_o)>
  
`,
  Python = `
  # Python program to implement stooge sort

def stoogesort(arr, l, h):
	if l >= h:
		return

	# If first element is smaller
	# than last, swap them
	if arr[l]>arr[h]:
		t = arr[l]
		arr[l] = arr[h]
		arr[h] = t

	# If there are more than 2 elements in
	# the array
	if h-l + 1 > 2:
		t = (int)((h-l + 1)/3)

		# Recursively sort first 2 / 3 elements
		stoogesort(arr, l, (h-t))

		# Recursively sort last 2 / 3 elements
		stoogesort(arr, l + t, (h))

		# Recursively sort first 2 / 3 elements
		# again to confirm
		stoogesort(arr, l, (h-t))


# deriver
arr = [2, 4, 5, 3, 1]
n = len(arr)

stoogesort(arr, 0, n-1)

for i in range(0, n):
	print(arr[i], end = ' ')

# Code Contributed by Mohit Gupta_OMG <(0_o)>

`,
  Javascript = `
  <script>
	// Javascript program to implement stooge sort
	
	// Function to implement stooge sort
	function stoogesort(arr, l, h)
	{
		if (l >= h)
			return;
	
		// If first element is smaller
		// than last, swap them
		if (arr[l] > arr[h]) {
			let t = arr[l];
			arr[l] = arr[h];
			arr[h] = t;
		}
	
		// If there are more than 2
		// elements in the array
		if (h - l + 1 > 2) {
			let t = parseInt((h - l + 1) / 3, 10);
	
			// Recursively sort first
			// 2/3 elements
			stoogesort(arr, l, h - t);
	
			// Recursively sort last
			// 2/3 elements
			stoogesort(arr, l + t, h);
	
			// Recursively sort first
			// 2/3 elements again to
			// confirm
			stoogesort(arr, l, h - t);
		}
	}
	
	let arr = [ 2, 4, 5, 3, 1 ];
	let n = arr.length;

	// Calling Stooge Sort function
	// to sort the array
	stoogesort(arr, 0, n - 1);

	// Display the sorted array
	for (let i = 0; i < n; i++)
	document.write(arr[i] + " ");
	
</script>

`,
C=`#include <stdio.h>

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void stoogeSort(int arr[], int low, int high) {
    if (low >= high)
        return;

    if (arr[low] > arr[high])
        swap(&arr[low], &arr[high]);

    if (high - low + 1 > 2) {
        int third = (high - low + 1) / 3;

        stoogeSort(arr, low, high - third);
        stoogeSort(arr, low + third, high);
        stoogeSort(arr, low, high - third);
    }
}
`,
C_opt= `#include <stdio.h>

void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void stoogeSort(int arr[], int low, int high) {
    if (low >= high)
        return;

    if (arr[low] > arr[high])
        swap(&arr[low], &arr[high]);

    if (high - low + 1 > 2) {
        int third = (high - low + 1) / 3;

        stoogeSort(arr, low, high - third);
        stoogeSort(arr, low + third, high);
        stoogeSort(arr, low, high - third);
    }
}
`,
Cpp_opt = ``,
Java_opt=``,
Python_opt=``,
Javascript_opt=``

const StoogeSort = () => {
    return (
        <React.Fragment>
      <Row className="bg">
        <div className='desc'>
          <Col span={60}><h1 style={{ color: 'orange'}}>Description</h1>
            <h3 style={{ color: 'white' }}>Stooge Sort is a recursive sorting algorithm. It is not much efficient but interesting sorting algorithm. </h3>
            <h3 style={{ color: 'white' }}>It generally divides the array into two overlapping parts (2/3 each). After that it performs sorting in first 2/3 part and then it performs sorting in last 2/3 part. And then, sorting is done on first 2/3 part to ensure that the array is sorted.
            </h3>
            <h3 style={{ color: 'white' }}>The key idea is that sorting the overlapping part twice exchanges the elements between the other two sections accordingly.</h3>
          </Col>
        </div>
        <div className="mobile-table">
          <div>
            <h1 style={{ color: 'white' }}>Asymptotic Complexity</h1>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Average Time Complexity</th>
                  <th>Θ(n<sup>2.709</sup>)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Best Case</td>
                  <td>Ω(n<sup>2.709</sup>)</td>
                </tr>
                <tr>
                  <td>Worst Case Time Complexity</td>
                  <td>O(n<sup>2.709</sup>)</td>
                </tr>
                <tr>
                  <td>Space Complexity Time Complexity</td>
                  <td>O(1)</td>
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

export default StoogeSort;
