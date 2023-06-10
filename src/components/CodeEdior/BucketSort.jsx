import React from 'react';
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor'

let Java=`
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// Main class
public class GFG
{

// bucketSort method that sorts an array of double values using bucket sort
public static void bucketSort(double[] arr, int noOfBuckets)
{

	// find the max and min elements in the array
	double maxEle = Arrays.stream(arr).max().getAsDouble();
	double minEle = Arrays.stream(arr).min().getAsDouble();

	// find the range between the max and min elements
	double range = (maxEle - minEle) / noOfBuckets;

	// create a list of empty lists to store elements based on their bucket index
	List<List<Double>> temp = new ArrayList<>();
	for (int i = 0; i < noOfBuckets; i++) {
	temp.add(new ArrayList<>());
	}

	// distribute the elements of the array into the appropriate bucket based on their value
	for (int i = 0; i < arr.length; i++)
	{
	double diff = (arr[i] - minEle) / range - (int)((arr[i] - minEle) / range);

	// check if the difference is 0, and the element is not the min element
	if (diff == 0 && arr[i] != minEle) {
		temp.get((int)((arr[i] - minEle) / range) - 1).add(arr[i]);
	} else {
		temp.get((int)((arr[i] - minEle) / range)).add(arr[i]);
	}
	}

	// sort each non-empty bucket using the internal sort method
	for (int i = 0; i < temp.size(); i++) {
	if (!temp.get(i).isEmpty()) {
		temp.get(i).sort(Double::compare);
	}
	}

	// combine the sorted elements from
	// each non-empty bucket into a single array
	int k = 0;
	for (List<Double> lst : temp) {
	if (!lst.isEmpty()) {
		for (double i : lst) {
		arr[k] = i;
		k++;
		}
	}
	}
}

public static void main(String[] args) {

	double[] arr = { 9.8, 0.6, 10.1, 1.9, 3.07, 3.04, 5.0, 8.0, 4.8, 7.68 };
	int noOfBuckets = 5;

	// call the bucket sort method
	bucketSort(arr, noOfBuckets);

	// print the sorted array
	System.out.print("Sorted array: ");
	for (double i : arr) {
	System.out.print(i + " ");
	}
	System.out.println();
}
}

// This code is contributed by chinmaya121221
`,Cpp=`
#include <algorithm>
#include <iostream>
#include <vector>

using namespace std;

// Bucket sort for numbers having integer part
void bucketSort(vector<double>& arr, int noOfBuckets)
{
double max_ele = *max_element(arr.begin(), arr.end());
double min_ele = *min_element(arr.begin(), arr.end());

// range (for buckets)
double rnge = (max_ele - min_ele) / noOfBuckets;

vector<vector<double> > temp;

// create empty buckets
for (int i = 0; i < noOfBuckets; i++) {
	temp.push_back(vector<double>());
}

// scatter the array elements into the correct bucket
for (int i = 0; i < arr.size(); i++) {
	double diff = (arr[i] - min_ele) / rnge
	- int((arr[i] - min_ele) / rnge);

	// append the boundary elements to the lower array
	if (diff == 0 && arr[i] != min_ele) {
	temp[int((arr[i] - min_ele) / rnge) - 1]
		.push_back(arr[i]);
	}
	else {
	temp[int((arr[i] - min_ele) / rnge)].push_back(
		arr[i]);
	}
}

// Sort each bucket individually
for (int i = 0; i < temp.size(); i++) {
	if (!temp[i].empty()) {
	sort(temp[i].begin(), temp[i].end());
	}
}

// Gather sorted elements to the original array
int k = 0;
for (vector<double>& lst : temp) {
	if (!lst.empty()) {
	for (double i : lst) {
		arr[k] = i;
		k++;
	}
	}
}
}

int main()
{
vector<double> arr = { 9.8, 0.6, 10.1, 1.9, 3.07,
						3.04, 5.0, 8.0, 4.8, 7.68 };
int noOfBuckets = 5;
bucketSort(arr, noOfBuckets);
cout << "Sorted array: ";
for (double i : arr) {
	cout << i << " ";
}
cout << endl;
return 0;
}

// This code is contributed by divyansh2212
`,Javascript=`
function bucketSort(arr, noOfBuckets) {
    // find the max and min elements in the array
    let maxEle = Math.max(...arr);
    let minEle = Math.min(...arr);
    // find the range between the max and min elements
    let range = (maxEle - minEle) / noOfBuckets;
    
    // create an array of empty arrays to store elements based on their bucket index
    let temp = [];
    for (let i = 0; i < noOfBuckets; i++) {
        temp.push([]);
    }
    
    // distribute the elements of the array into the appropriate bucket based on their value
    for (let i = 0; i < arr.length; i++) {
        let diff = (arr[i] - minEle) / range - Math.floor((arr[i] - minEle) / range);
        // check if the difference is 0, and the element is not the min element
        if (diff === 0 && arr[i] !== minEle) {
        let flr = Math.floor((arr[i] - minEle) / range);
        temp[flr - 1].push(arr[i]);
        } else {
        let flr = Math.floor((arr[i] - minEle) / range);
        temp[flr].push(arr[i]);
        }
    }
    
    // sort each non-empty bucket using the Array.sort method
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].length !== 0) {
        temp[i].sort((a, b) => a - b);
        }
    }
    
    // combine the sorted elements from each non-empty bucket into a single array
    let k = 0;
    for (let lst of temp) {
        if (lst.length !== 0) {
        for (let i of lst) {
            arr[k] = i;
            k++;
        }
        }
    }
    
    return arr;
    }
    
    
    let arr = [9.8, 0.6, 10.1, 1.9, 3.07, 3.04, 5.0, 8.0, 4.8, 7.68];
    let noOfBuckets = 5;
    
    // call the bucket sort method
    console.log("Sorted array:", bucketSort(arr, noOfBuckets));
    //This Code is Contributed by chinmaya121221
    `,Python=`
# Python program for the above approach

# Bucket sort for numbers
# having integer part
def bucketSort(arr, noOfBuckets):
	max_ele = max(arr)
	min_ele = min(arr)

	# range(for buckets)
	rnge = (max_ele - min_ele) / noOfBuckets

	temp = []

	# create empty buckets
	for i in range(noOfBuckets):
		temp.append([])

	# scatter the array elements
	# into the correct bucket
	for i in range(len(arr)):
		diff = (arr[i] - min_ele) / rnge - int((arr[i] - min_ele) / rnge)

		# append the boundary elements to the lower array
		if(diff == 0 and arr[i] != min_ele):
			temp[int((arr[i] - min_ele) / rnge) - 1].append(arr[i])

		else:
			temp[int((arr[i] - min_ele) / rnge)].append(arr[i])

	# Sort each bucket individually
	for i in range(len(temp)):
		if len(temp[i]) != 0:
			temp[i].sort()

	# Gather sorted elements
	# to the original array
	k = 0
	for lst in temp:
		if lst:
			for i in lst:
				arr[k] = i
				k = k+1


# Driver Code
arr = [9.8, 0.6, 10.1, 1.9, 3.07, 3.04, 5.0, 8.0, 4.8, 7.68]
noOfBuckets = 5
bucketSort(arr, noOfBuckets)
print("Sorted array: ", arr)

# This code is contributed by
# Vinita Yadav
`,
C=`#include <stdio.h>
#include <stdlib.h>

void insertionSort(int arr[], int n) {
    int i, j, key;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = key;
    }
}

void bucketSort(int arr[], int n, int maxVal) {
    int i, j;
    int* buckets = (int*)malloc(maxVal * sizeof(int));

    for (i = 0; i < maxVal; i++)
        buckets[i] = 0;

    for (i = 0; i < n; i++)
        buckets[arr[i]]++;

    for (i = 0, j = 0; i < maxVal; i++) {
        while (buckets[i] > 0) {
            arr[j++] = i;
            buckets[i]--;
        }
    }

    free(buckets);
}
`,
C_opt= `#include <stdio.h>
#include <stdlib.h>

void insertionSort(int arr[], int n) {
    int i, j, key;
    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        arr[j + 1] = key;
    }
}

void bucketSort(int arr[], int n, int maxVal) {
    int i, j;
    int* buckets = (int*)malloc(maxVal * sizeof(int));
    int bucketIndex = 0;

    for (i = 0; i < maxVal; i++)
        buckets[i] = 0;

    for (i = 0; i < n; i++)
        buckets[arr[i]]++;

    for (i = 0; i < maxVal; i++) {
        while (buckets[i] > 0) {
            arr[bucketIndex++] = i;
            buckets[i]--;
        }
    }

    free(buckets);
}
`,
Cpp_opt = ``,
Java_opt=``,
Python_opt=``,
Javascript_opt=``

const BucketSort = () => {
    return (
        <React.Fragment>
      <Row style={{
        // // display: 'flex',
        // marginTop: '30px',
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        // alignContent: 'space-between',
        // justifyContent: 'space-around',
      }}
        className="bg"
      >
        <div className='desc'>
          <Col span={60}><h1 style={{ color: 'orange'}}>Description</h1>
            <h3 style={{ color: 'white' }}>Bucket sort is a sorting algorithm that separate the elements into multiple groups said to be buckets. Elements in bucket sort are first uniformly divided into groups called buckets, and then they are sorted by any other sorting algorithm. After that, elements are gathered in a sorted manner. </h3>
            <h3 style={{ color: 'white' }}>The process of bucket sort can be understood as a scatter-gather approach. Here, elements are first scattered into buckets then the elements in each bucket are sorted. Finally, the elements are gathered in order.</h3>
        </Col>
        </div>
        <div className="mobile-table">
          <div>
            <h1 style={{ color: 'white' }}>Asymptotic Complexity</h1>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Average Time Complexity</th>
                  <th>Θ(n+k)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Best Case Time Complexity</td>
                  <td>Ω(n+k)</td>
                </tr>
                <tr>
                  <td>Worst Case Time Complexity</td>
                  <td>O(n<sup>2</sup>)</td>
                </tr>
                <tr>
                  <td>Space Complexity</td>
                  <td>O(n+k)</td>
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

export default BucketSort;
