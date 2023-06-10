import React from 'react'
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor';

let Cpp = `
#include <iostream>
#include <vector>

// Function to get the digit at the given place value
int getDigit(int num, int place)
{
    int digit = 0;
    while (place > 0)
    {
        digit = num % 10;
        num /= 10;
        place--;
    }
    return digit;
}

// Function to get the number of digits in the largest number
int getMaxNumDigits(const std::vector<int>& arr)
{
    int max_digits = 0;
    for (int i : arr)
    {
        int digits = 0;
        int num = i;
        while (num > 0)
        {
            digits++;
            num /= 10;
        }
        max_digits = std::max(max_digits, digits);
    }
    return max_digits;
}

// Radix sort function
void radixSort(std::vector<int>& arr)
{
    int max_digits = getMaxNumDigits(arr); // Get the number of digits in the largest number
 
    // Loop through each place value (starting with the ones place)
    for (int place = 1; place <= max_digits; place++)
    {
        // Create a bucket for each digit
        std::vector<std::vector<int>> buckets(10);
 
        // Loop through the array and add each element to the appropriate bucket
        for (int i : arr)
            buckets[getDigit(i, place)].push_back(i);
 
        // Flatten the buckets back into
        // Flatten the buckets back into the array
        arr.clear();
        for (const auto& bucket : buckets)
            arr.insert(arr.end(), bucket.begin(), bucket.end());
    }
}

int main()
{
    std::vector<int> arr = {5, 3, 6, 2, 10};
 
    // Sort the array
    radixSort(arr);
 
    // Print the sorted array
    for (int i : arr)
        std::cout << i << " ";
 
    return 0;
}
`,
Python = `
def get_digit(num, place):
    digit = 0
    while place > 0:
        digit = num % 10
        num //= 10
        place -= 1
    return digit

def get_max_num_digits(arr):
    max_digits = 0
    for i in arr:
        digits = 0
        num = i
        while num > 0:
            digits += 1
            num //= 10
        max_digits = max(max_digits, digits)
    return max_digits

def radix_sort(arr):
    max_digits = get_max_num_digits(arr) # Get the number of digits in the largest number
 
    # Loop through each place value (starting with the ones place)
    for place in range(1, max_digits + 1):
        # Create a bucket for each digit
        buckets = [[] for _ in range(10)]
 
        # Loop through the array and add each element to the appropriate bucket
        for i in arr:
            buckets[get_digit(i, place)].append(i)
 
        # Flatten the buckets back into the array
        arr.clear()
        for bucket in buckets:
            arr.extend(bucket)

# Test the function
print(radix_sort([5, 3, 6, 2, 10])) # [2, 3, 5, 6, 10]

`,
Java = `
import java.util.*;

public class Main {
  
    int getMax(int arr[], int n)
    {
        int mx = arr[0];
        for (int i = 1; i < n; i++) {
           
           if (arr[i] > mx) {
              mx = arr[i];
           }
                
        }
            
        return mx;
    }
  
    void countingSort(int arr[], int len, int exp) {
     
     int outputArr[] = new int[len];
     
     // max digit size is 9 so size of 10 array will be enough
     int count[] = new int[10];
     // counting the occurence of each number
     for(int i = 0; i < len; i++) {
       count[(arr[i] / exp) % 10]++;
     }
     
     for(int i = 1; i < 10; i++) {
       count[i] += count[i - 1];
     }
     
     // updating the output array
     for (int i = len - 1; i >= 0; i--) {
            outputArr[count[(arr[i] / exp) % 10] - 1] = arr[i];
            count[(arr[i] / exp) % 10]--;
     }
     
     // updating the final array
     for(int i = 0; i < len; i++) {
       arr[i] = outputArr[i];
     }
    }
  
    void radixSortTechnique(int arr[]) {
      int len = arr.length;
      
      int mx = getMax(arr, len);
      
      for (int exp = 1; mx / exp > 0; exp *= 10) {
        countingSort(arr, len, exp);
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
      // function which will sort the given array using radix sort
      object.radixSortTechnique(arr);
      System.out.println("Array after sorting - ");
      
      // function to print the new array
      object.printArr(arr);
  }
}
`,
Javascript = `
let arr = [1000, 1, 100, 3, 2, 34, 54, 89, 75, 37];


let len = arr.length;

// function to get the maximum element from the array
function getMax(arr) {
  let maxx = arr[0];
  
  arr.forEach(function(num) {
    if(maxx < num) {
      maxx = num;
    }
  });
  return maxx;
}
// function to print array
function print(str) {
  
  console.log(str);
  arr.forEach(function(num) {
    console.log(num);
  });
}


// counting sort
function countingSort(exp) {
  
  
  // count array will contain the frequency of each element
  let count = new Array(10);
  
  for(let i = 0; i < 10; i++) count[i] = 0;
  
  // output array will contain the resultant array
  let output = new Array(len);
  
  // calculating the frequency
  arr.forEach(function(num) {
    
    let temp = Math.floor(num / exp) % 10;
    
    if(!count[temp]) {
      count[temp] = 1;
    } else {
      count[temp] += 1;
    }

  });

  // making the count array more suitable for output array
  for(let i = 1; i < 10; i++) 
    count[i] += count[i - 1];
  
  
  // formation of output array
  for(let i = len - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10] -= 1;
  }
  
  
  // finally copying the data from output array to original array
  for(let i = 0; i < len; i++) {
    arr[i] = output[i];
  }
}

// main radix function
function radixSort() {

  // trying to get the maximum element because we need the number maximum number of digits
  let m = getMax(arr);
  
  // sorting the array from rightmost bit to lowest bit
  for(let exp = 1; Math.floor(m / exp) > 0; exp *= 10) {
    countingSort(exp);
  }
}
// this function call will print the original array
print("Before");

// calling radixSort function 
radixSort();

// after sorting this function call will print the final array
print("After");
`,
C=`// Get the maximum value in the array
int getMax(int arr[], int n) {
    int max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Counting sort for each digit
void countingSort(int arr[], int n, int exp) {
    int output[n]; // Output array
    int count[10] = {0}; // Count array to store the count of each digit
  
    // Store the count of each digit
    for (int i = 0; i < n; i++) {
        count[(arr[i] / exp) % 10]++;
    }
  
    // Calculate the cumulative count
    for (int i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }
  
    // Build the output array in reverse order to maintain stability
    for (int i = n - 1; i >= 0; i--) {
        output[count[(arr[i] / exp) % 10] - 1] = arr[i];
        count[(arr[i] / exp) % 10]--;
    }
  
    // Copy the sorted elements to the original array
    for (int i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

// Radix Sort
void radixSort(int arr[], int n) {
    int max = getMax(arr, n);
  
    // Perform counting sort for each digit from least significant to most significant
    for (int exp = 1; max / exp > 0; exp *= 10) {
        countingSort(arr, n, exp);
    }
}
`,
C_opt= `// Queue data structure
#define MAX_QUEUE_SIZE 1000

typedef struct {
    int items[MAX_QUEUE_SIZE];
    int front;
    int rear;
} Queue;

// Initialize the queue
void initQueue(Queue* queue) {
    queue->front = 0;
    queue->rear = -1;
}

// Check if the queue is empty
int isEmpty(Queue* queue) {
    return (queue->rear < queue->front);
}

// Insert an element at the rear of the queue
void enqueue(Queue* queue, int value) {
    queue->items[++(queue->rear)] = value;
}

// Remove and return the element at the front of the queue
int dequeue(Queue* queue) {
    return queue->items[(queue->front)++];
}

// Get the maximum value in the array
int getMax(int arr[], int n) {
    int max = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

// Counting sort for each digit using queues
void countingSort(int arr[], int n, int exp) {
    const int radix = 10; // Base of the number system
    Queue buckets[radix]; // Queue array for each digit (0-9)
  
    // Initialize the queues
    for (int i = 0; i < radix; i++) {
        initQueue(&buckets[i]);
    }
  
    // Place elements into the appropriate bucket
    for (int i = 0; i < n; i++) {
        int digit = (arr[i] / exp) % radix;
        enqueue(&buckets[digit], arr[i]);
    }
  
    // Gather elements from the buckets into the output array
    int index = 0;
    for (int i = 0; i < radix; i++) {
        while (!isEmpty(&buckets[i])) {
            arr[index++] = dequeue(&buckets[i]);
        }
    }
}

// Radix Sort
void radixSort(int arr[], int n) {
    int max = getMax(arr, n);
  
    // Perform counting sort for each digit from least significant to most significant
    for (int exp = 1; max / exp > 0; exp *= 10) {
        countingSort(arr, n, exp);
    }
}
`,
Cpp_opt = ``,
Java_opt=``,
Python_opt=``,
Javascript_opt=``

export default function RadixSort({text}) {
  return (
    <React.Fragment>
      <Row className='bg'>
          <div className='desc'>
      <Col span={60} style={{ color: 'white' }}><h1 style={{ color: 'orange' }}>Description</h1>
        <h3 style={{ color: 'white' }}>Radix Sort is a sorting algorithm that doesn't use comparisons. Its complexity depends, in addition to the number of elements, by the values b and d, representing the radix of the numbers and the maximum number of digits of the elements respectively</h3>
        <h3 style={{ color: 'white' }}>Radix Sort works by splitting the elements into buckets, according to their radix, starting from the least significant digit (LSD) or from the most significant digit (MSD) of the number. If the number has more than one significant digit, this process is repeated to account all the digits of the number.</h3>
        <h3 style={{ color: 'white' }}>It's a particular sorting algorithm really different from the others as it is not based on comparisons, but on the digits of the number instead, so it's only applicable on whole numbers or strings.</h3>
        <h3 style={{ color: 'white' }}>It can be faster than other logarithmic sorting algorithms on big data structures as it can even perform in linear time in special cases, but it's not widely used due to its limitations.</h3>
      </Col>
      </div>
          <div className="mobile-table">
      <Col span={8}>
        <h1 style={{ color: 'white' }}>Asymptotic Complexity</h1>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Average Time Complexity</th>
              <th>Θ(d*(n+k))</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Best Case Time Complexity</td>
              <td>Ω(d*(n+k))</td>
            </tr>
            <tr>
              <td>Worst Case Time Complexity</td>
              <td>O(d*(n+k))</td>
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
