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
                  <th>O(n<sup>2</sup>)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Best Case Time Complexity</td>
                  <td>O(n)</td>
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
      <CodeEditor Cpp={Cpp} Java={Java} Python={Python} Javascript={Javascript} d2={false} d3={false} d4={false} />
    </React.Fragment>
    );
}

export default StrandSort;
