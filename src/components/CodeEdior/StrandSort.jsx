import React from 'react';
import './table.css'
import { Col, Row } from 'antd';
import CodeEditor from './codeEditor'

let Cpp = `
// CPP program to implement Strand Sort
#include <bits/stdc++.h>
using namespace std;

// A recursive function to implement Strand
// sort.
// ip is input list of items (unsorted).
// op is output list of items (sorted)
void strandSort(list<int> &ip, list<int> &op)
{
	// Base case : input is empty
	if (ip.empty())
		return;

	// Create a sorted sublist with
	// first item of input list as
	// first item of the sublist
	list<int> sublist;
	sublist.push_back(ip.front());
	ip.pop_front();
	
	// Traverse remaining items of ip list
	for (auto it = ip.begin(); it != ip.end(); ) {

		// If current item of input list
		// is greater than last added item
		// to sublist, move current item
		// to sublist as sorted order is
		// maintained.
		if (*it > sublist.back()) {
			sublist.push_back(*it);

			// erase() on list removes an
			// item and returns iterator to
			// next of removed item.
			it = ip.erase(it);
		}

		// Otherwise ignore current element
		else
			it++;
	}

	// Merge current sublist into output
	op.merge(sublist);

	// Recur for remaining items in
	// input and current items in op.
	strandSort(ip, op);
}

// Driver code
int main(void)
{
	list<int> ip{10, 5, 30, 40, 2, 4, 9};

	// To store sorted output list
	list<int> op;

	// Sorting the list
	strandSort(ip, op);

	// Printing the sorted list
	for (auto x : op)
		cout << x << " ";
	return 0;
}

`,
  Java = `
  import java.util.Arrays;
  import java.util.LinkedList;
  
  public class Strand{
    // note: the input list is destroyed
    public static <E extends Comparable<? super E>> 
    LinkedList<E> strandSort(LinkedList<E> list){
      if(list.size() <= 1) return list;
  
      LinkedList<E> result = new LinkedList<E>();
      while(list.size() > 0){
        LinkedList<E> sorted = new LinkedList<E>();
        sorted.add(list.removeFirst()); //same as remove() or remove(0)
        for(Iterator<E> it = list.iterator(); it.hasNext(); ){
          E elem = it.next();
          if(sorted.peekLast().compareTo(elem) <= 0){
            sorted.addLast(elem); //same as add(elem) or add(0, elem)
            it.remove();
          }
        }
        result = merge(sorted, result);
      }
      return result;
    }
  
    private static <E extends Comparable<? super E>>
    LinkedList<E> merge(LinkedList<E> left, LinkedList<E> right){
      LinkedList<E> result = new LinkedList<E>();
      while(!left.isEmpty() && !right.isEmpty()){
        //change the direction of this comparison to change the direction of the sort
        if(left.peek().compareTo(right.peek()) <= 0)
          result.add(left.remove());
        else
          result.add(right.remove());
      }
      result.addAll(left);
      result.addAll(right);
      return result;
    }
    
    public static void main(String[] args){
      System.out.println(strandSort(new LinkedList<Integer>(Arrays.asList(3,1,2,4,5))));
      System.out.println(strandSort(new LinkedList<Integer>(Arrays.asList(3,3,1,2,4,5))));
      System.out.println(strandSort(new LinkedList<Integer>(Arrays.asList(3,3,1,2,4,3,5,6))));
    }
  }
`,
  Python = `
  def strand_sort(inp):
  output = strand(inp)
  while len(inp):
    output = merge(output, strand(inp))
  return output
   
   
def strand(inp):
  element, sub = 0, [inp.pop(0)]
  while element < len(inp):
    if inp[element] > sub[-1]:
      sub.append(inp.pop(element))
    else:
      element += 1
  return sub
  
def merge(a, b):
  output = []
  while len(a) and len(b):
    if a[0] < b[0]:
      output.append(a.pop(0))
    else:
      output.append(b.pop(0))
  output += a
  output += b
  return output
  
inputs = [9,2,0,4,1,8,2,3,7]
print("Input List:")
print(inputs)
 
output = strand_sort(inputs)
print("Output List:")
print(output)
`,
  Javascript = `
  // Javascript program to implement Strand Sort

  // A recursive function to implement Strand sort.
  // ip is input list of items (unsorted).
  // op is output list of items (sorted)
  function strandSort(ip)
  {
    // Create a sorted sublist with
    // first item of input list as
    // first item of the sublist
    var sublist=[];
    sublist.push(ip[0]);
    ip.shift();
    
    
    // Traverse remaining items of ip list
    var len=ip.length-1;//last index of input list
    var len2=sublist.length-1;//last index of sublist
    
    var it =0;
    while(it<=len){
  
      // If current item of input list
      // is greater than last added item
      // to sublist, move current item
      // to sublist as sorted order is
      // maintained.
      if (ip[it] >sublist[len2]) {
        sublist.push(ip[it]);
        len2++;
        
        // splice(index,1) on list removes an
        // item and moves "it" to
        // next of removed item.
        
        ip.splice(it,1);
      
      }
  
      // Otherwise ignore current element
      else{
        it++;
      }
    }
  
  // Merge current sublist into output
  while(sublist.length>0 && op.length>0){
      if(sublist[0]>=op[0]){opp.push(op.shift());}
      else{opp.push(sublist.shift());}
    }
    if(sublist.length==0){
      opp=[...opp,...op];
    }
    if(op.length==0){
      opp=[...opp,...sublist];
    }
    op=[...opp];
    opp.length=0;
    
    // Recur for remaining items in input and current items in op.
    //Added base case
    if(ip.length>0){
    strandSort(ip);
    }
  }
  
  // Driver code
  
    var ip=[10, 5, 30, 40, 2, 4, 9];
  
    // To store sorted output list
    var op=[];
    //list helping in merge operation
    var opp=[];
    // Sorting the list
    strandSort(ip);
    
    // Printing the sorted list
      console.log(op);
  
`,
C=`#include <stdio.h>
#include <stdlib.h>

void merge(int arr[], int left[], int leftSize, int right[], int rightSize) {
    int i = 0, j = 0, k = 0;

    while (i < leftSize && j < rightSize) {
        if (left[i] < right[j])
            arr[k++] = left[i++];
        else
            arr[k++] = right[j++];
    }

    while (i < leftSize)
        arr[k++] = left[i++];

    while (j < rightSize)
        arr[k++] = right[j++];
}

void strandSort(int arr[], int n) {
    if (n <= 1)
        return;

    int i, j, k;
    int* sublist = malloc(n * sizeof(int));
    int sublistSize = 0;
    int* remaining = malloc(n * sizeof(int));
    int remainingSize = 0;

    sublist[sublistSize++] = arr[0];

    for (i = 1; i < n; i++) {
        if (arr[i] < sublist[sublistSize - 1])
            sublist[sublistSize++] = arr[i];
        else
            remaining[remainingSize++] = arr[i];
    }

    strandSort(sublist, sublistSize);
    strandSort(remaining, remainingSize);
    merge(arr, sublist, sublistSize, remaining, remainingSize);

    free(sublist);
    free(remaining);
}
`,
C_opt= `#include <stdio.h>
#include <stdlib.h>

void merge(int arr[], int left[], int leftSize, int right[], int rightSize) {
    int i = 0, j = 0, k = 0;

    while (i < leftSize && j < rightSize) {
        if (left[i] < right[j])
            arr[k++] = left[i++];
        else
            arr[k++] = right[j++];
    }

    while (i < leftSize)
        arr[k++] = left[i++];

    while (j < rightSize)
        arr[k++] = right[j++];
}

void strandSort(int arr[], int n) {
    if (n <= 1)
        return;

    int i, j, k;
    int* sublist = malloc(n * sizeof(int));
    int sublistSize = 0;
    int* remaining = malloc(n * sizeof(int));
    int remainingSize = 0;

    sublist[sublistSize++] = arr[0];

    for (i = 1; i < n; i++) {
        if (arr[i] < sublist[sublistSize - 1])
            sublist[sublistSize++] = arr[i];
        else
            remaining[remainingSize++] = arr[i];
    }

    strandSort(sublist, sublistSize);
    strandSort(remaining, remainingSize);
    merge(arr, sublist, sublistSize, remaining, remainingSize);

    free(sublist);
    free(remaining);
}
`,
Cpp_opt = `std::list<int> strandSort(std::list<int> input) {
  if (input.size() <= 1) {
      return input;
  }
  std::list<int> sublist;
  sublist.push_back(input.front());
  input.pop_front();
  for (auto it = input.begin(); it != input.end(); ) {
      if (*it > sublist.back()) {
          sublist.push_back(*it);
          it = input.erase(it);
      }
      else {
          ++it;
      }
  }
  if (sublist.size() == input.size()) {
      return sublist;  // Array is already sorted, no need to merge
  }
  return mergeStrands(sublist, strandSort(input));
}

std::list<int> mergeStrands(std::list<int> strand1, std::list<int> strand2) {
  std::list<int> merged;
  while (!strand1.empty() && !strand2.empty()) {
      if (strand1.front() < strand2.front()) {
          merged.push_back(strand1.front());
          strand1.pop_front();
      }
      else {
          merged.push_back(strand2.front());
          strand2.pop_front();
      }
  }
  while (!strand1.empty()) {
      merged.push_back(strand1.front());
      strand1.pop_front();
  }
  while (!strand2.empty()) {
      merged.push_back(strand2.front());
      strand2.pop_front();
  }
  return merged;
}
`,
Java_opt=`import java.util.List;
import java.util.LinkedList;

public class StrandSort {
    public static List<Integer> strandSort(List<Integer> input) {
        if (input.size() <= 1) {
            return input;
        }
        List<Integer> sublist = new LinkedList<>();
        sublist.add(input.get(0));
        input.remove(0);
        for (int i = 0; i < input.size(); ) {
            if (input.get(i) > sublist.get(sublist.size() - 1)) {
                sublist.add(input.get(i));
                input.remove(i);
            } else {
                i++;
            }
        }
        if (sublist.size() == input.size()) {
            return sublist;  // List is already sorted, no need to merge
        }
        return mergeStrands(sublist, strandSort(input));
    }

    public static List<Integer> mergeStrands(List<Integer> strand1, List<Integer> strand2) {
        List<Integer> merged = new LinkedList<>();
        while (!strand1.isEmpty() && !strand2.isEmpty()) {
            if (strand1.get(0) < strand2.get(0)) {
                merged.add(strand1.get(0));
                strand1.remove(0);
            } else {
                merged.add(strand2.get(0));
                strand2.remove(0);
            }
        }
        while (!strand1.isEmpty()) {
            merged.add(strand1.get(0));
            strand1.remove(0);
        }
        while (!strand2.isEmpty()) {
            merged.add(strand2.get(0));
            strand2.remove(0);
        }
        return merged;
    }

    public static void main(String[] args) {
        //Starting Code
    }
}
`,
Python_opt=``,
Javascript_opt=`function strandSort(input) {
  if (input.length <= 1) {
    return input;
  }

  let sublist = [input.shift()];

  for (let i = 0; i < input.length; ) {
    if (input[i] > sublist[sublist.length - 1]) {
      sublist.push(input[i]);
      input.splice(i, 1);
    } else {
      i++;
    }
  }

  if (sublist.length === input.length) {
    return sublist; // Array is already sorted, no need to merge
  }

  return mergeStrands(sublist, strandSort(input));
}

function mergeStrands(strand1, strand2) {
  let merged = [];
  while (strand1.length > 0 && strand2.length > 0) {
    if (strand1[0] < strand2[0]) {
      merged.push(strand1.shift());
    } else {
      merged.push(strand2.shift());
    }
  }
  while (strand1.length > 0) {
    merged.push(strand1.shift());
  }
  while (strand2.length > 0) {
    merged.push(strand2.shift());
  }
  return merged;
}
`

const StrandSort = () => {
    return (
        <React.Fragment>
      <Row className="bg"
      >
        <div className='desc'>
          <Col span={60}><h1 style={{ color: 'orange'}}>Description</h1>
            <h3 style={{ color: 'white' }}>Strand sort is a recursive sorting algorithm that sorts items of a list into increasing order. </h3>
            <h3 style={{ color: 'white' }}>This mechanism at first transfers the first element of to be sorted list into a sub-list. It then compares the last element in the sub-list to each subsequent element in the unsorted list. 
            </h3>
            <h3 style={{ color: 'white' }}>If there is an element in the original list that is greater than the last element in the sub-list, the element is transferred to the end of sub-list. This process continues until the last element in the sub-list is compared to the remaining elements in the original list. The sub-list is then added to a new list. Repeat this process and merge all sub-lists until all elements are sorted. </h3>
          </Col>
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
                  <td>Ω(n<sup>2</sup>)</td>
                </tr>
                <tr>
                  <td>Worst Case Time Complexity</td>
                  <td>O(n<sup>2</sup>)</td>
                </tr>
                <tr>
                  <td>Space Complexity</td>
                  <td>O(n)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Row>
      <CodeEditor Cpp={Cpp} Java={Java} Python={Python} Javascript={Javascript} C={C} C_opt={C_opt} Java_opt={Java_opt} Javascript_opt={Javascript_opt} Cpp_opt={Cpp_opt}/>
    </React.Fragment>
    );
}

export default StrandSort;
