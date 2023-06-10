import React from 'react';
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor'

let Cpp = `
// C++ implementation of Comb Sort
#include<bits/stdc++.h>
using namespace std;

// To find gap between elements
int getNextGap(int gap)
{
	// Shrink gap by Shrink factor
	gap = (gap*10)/13;

	if (gap < 1)
		return 1;
	return gap;
}

// Function to sort a[0..n-1] using Comb Sort
void combSort(int a[], int n)
{
	// Initialize gap
	int gap = n;

	// Initialize swapped as true to make sure that
	// loop runs
	bool swapped = true;

	// Keep running while gap is more than 1 and last
	// iteration caused a swap
	while (gap != 1 || swapped == true)
	{
		// Find next gap
		gap = getNextGap(gap);

		// Initialize swapped as false so that we can
		// check if swap happened or not
		swapped = false;

		// Compare all elements with current gap
		for (int i=0; i<n-gap; i++)
		{
			if (a[i] > a[i+gap])
			{
				swap(a[i], a[i+gap]);
				swapped = true;
			}
		}
	}
}

// Driver program
int main()
{
	int a[] = {8, 4, 1, 56, 3, -44, 23, -6, 28, 0};
	int n = sizeof(a)/sizeof(a[0]);

	combSort(a, n);

	printf("Sorted array: \n");
	for (int i=0; i<n; i++)
		printf("%d ", a[i]);

	return 0;
}
`,
  Java = `
  // Java program for implementation of Comb Sort
  import java.io.*;
  public class CombSort
  {
    // To find gap between elements
    int getNextGap(int gap)
    {
      // Shrink gap by Shrink factor
      gap = (gap*10)/13;
      if (gap < 1)
        return 1;
      return gap;
    }
  
    // Function to sort arr[] using Comb Sort
    void sort(int arr[])
    {
      int n = arr.length;
  
      // initialize gap
      int gap = n;
  
      // Initialize swapped as true to make sure that
      // loop runs
      boolean swapped = true;
  
      // Keep running while gap is more than 1 and last
      // iteration caused a swap
      while (gap != 1 || swapped == true)
      {
        // Find next gap
        gap = getNextGap(gap);
  
        // Initialize swapped as false so that we can
        // check if swap happened or not
        swapped = false;
  
        // Compare all elements with current gap
        for (int i=0; i<n-gap; i++)
        {
          if (arr[i] > arr[i+gap])
          {
            // Swap arr[i] and arr[i+gap]
            int temp = arr[i];
            arr[i] = arr[i+gap];
            arr[i+gap] = temp;
  
            // Set swapped
            swapped = true;
          }
        }
      }
    }
  
    // Driver method
    public static void main(String args[])
    {
      CombSort ob = new CombSort();
      int arr[] = {8, 4, 1, 56, 3, -44, 23, -6, 28, 0};
      ob.sort(arr);
  
      System.out.println("sorted array");
      for (int i=0; i<arr.length; ++i)
        System.out.print(arr[i] + " ");
  
    }
  }
  /* This code is contributed by Rajat Mishra */
  
`,
  Python = `
  # Python program for implementation of CombSort

# To find next gap from current
def getNextGap(gap):

	# Shrink gap by Shrink factor
	gap = (gap * 10)//13
	if gap < 1:
		return 1
	return gap

# Function to sort arr[] using Comb Sort
def combSort(arr):
	n = len(arr)

	# Initialize gap
	gap = n

	# Initialize swapped as true to make sure that
	# loop runs
	swapped = True

	# Keep running while gap is more than 1 and last
	# iteration caused a swap
	while gap !=1 or swapped == 1:

		# Find next gap
		gap = getNextGap(gap)

		# Initialize swapped as false so that we can
		# check if swap happened or not
		swapped = False

		# Compare all elements with current gap
		for i in range(0, n-gap):
			if arr[i] > arr[i + gap]:
				arr[i], arr[i + gap]=arr[i + gap], arr[i]
				swapped = True


# Driver code to test above
arr = [8, 4, 1, 56, 3, -44, 23, -6, 28, 0]
combSort(arr)

print ("Sorted array:")
for i in range(len(arr)):
	print (arr[i],end=" ")


# This code is contributed by Mohit Kumra

`,
  Javascript = `
  <script>
	// Javascript program for implementation of Comb Sort
	
	// To find gap between elements
	function getNextGap(gap)
	{
		// Shrink gap by Shrink factor
		gap = parseInt((gap*10)/13, 10);
		if (gap < 1)
			return 1;
		return gap;
	}

	// Function to sort arr[] using Comb Sort
	function sort(arr)
	{
		let n = arr.length;

		// initialize gap
		let gap = n;

		// Initialize swapped as true to
		// make sure that loop runs
		let swapped = true;

		// Keep running while gap is more than
		// 1 and last iteration caused a swap
		while (gap != 1 || swapped == true)
		{
			// Find next gap
			gap = getNextGap(gap);

			// Initialize swapped as false so that we can
			// check if swap happened or not
			swapped = false;

			// Compare all elements with current gap
			for (let i=0; i<n-gap; i++)
			{
				if (arr[i] > arr[i+gap])
				{
					// Swap arr[i] and arr[i+gap]
					let temp = arr[i];
					arr[i] = arr[i+gap];
					arr[i+gap] = temp;

					// Set swapped
					swapped = true;
				}
			}
		}
	}
	
	let arr = [8, 4, 1, 56, 3, -44, 23, -6, 28, 0];
	sort(arr);

	document.write("sorted array" + "</br>");
	for (let i=0; i<arr.length; ++i)
	document.write(arr[i] + " ");

// This code is contributed by decode2207
</script>

`,
C=`void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void combSort(int arr[], int n) {
    int gap = n;
    float shrink = 1.3;
    int sorted = 0;

    while (gap > 1 || sorted == 0) {
        gap = (int)(gap / shrink);
        if (gap < 1)
            gap = 1;

        sorted = 1;
        for (int i = 0; i < n - gap; i++) {
            if (arr[i] > arr[i + gap]) {
                swap(&arr[i], &arr[i + gap]);
                sorted = 0;
            }
        }
    }
}
`,
C_opt= `void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void combSort(int arr[], int n) {
    int gap = n;
    float shrink = 1.3;
    int sorted = 0;

    while (gap > 1 || sorted == 0) {
        gap = (int)(gap / shrink);
        if (gap < 1)
            gap = 1;

        sorted = 1;
        for (int i = 0; i < n - gap; i++) {
            if (arr[i] > arr[i + gap]) {
                swap(&arr[i], &arr[i + gap]);
                sorted = 0;
            }
        }
    }
}
`,
Cpp_opt = ``,
Java_opt=``,
Python_opt=``,
Javascript_opt=``

const CombSort = () => {
    return (
        <React.Fragment>
      <Row className="bg">
        <div className='desc'>
          <Col span={60}><h1 style={{ color: 'orange'}}>Description</h1>
            <h3 style={{ color: 'white' }}>Comb Sort is mainly an improvement over Bubble Sort. Bubble sort always compares adjacent values. So all inversions are removed one by one. </h3>
            <h3 style={{ color: 'white' }}> Comb Sort improves on Bubble Sort by using a gap of the size of more than 1. The gap starts with a large value and shrinks by a factor of 1.3 in every iteration until it reaches the value 1. 
            </h3>
            <h3 style={{ color: 'white' }}>Thus Comb Sort removes more than one inversion count with one swap and performs better than Bubble Sort.
The shrink factor has been empirically found to be 1.3 (by testing Combsort on over 200,000 random lists). Although it works better than Bubble Sort on average, worst-case remains O(n2).</h3>
          
          <h3 style={{ color: 'white' }}>
            Here N is the size of array and p is the number of increment
          </h3></Col>
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
                  <td>Ω(nlog(n))</td>
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
      <CodeEditor Cpp={Cpp} Java={Java} Python={Python} Javascript={Javascript} C={C} C_opt={C_opt} />
    </React.Fragment>
    );
}

export default CombSort;
