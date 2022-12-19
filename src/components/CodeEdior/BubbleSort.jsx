import React from 'react';
import './table.css'
import { AutoComplete, Col, Row } from 'antd';
import CodeEditor from './codeEditor'
let Cpp = `
void bubbleSort(int arr[], int n)
{
	int i, j;
	for (i = 0; i < n - 1; i++)
		for (j = 0; j < n - i - 1; j++)
			if (arr[j] > arr[j + 1])
				swap(arr[j], arr[j + 1]);
}
`,
  Java = `
class BubbleSort {
	void bubbleSort(int arr[])
	{
		int n = arr.length;
		for (int i = 0; i < n - 1; i++)
			for (int j = 0; j < n - i - 1; j++)
				if (arr[j] > arr[j + 1]) {
					int temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}
`,
  Python = `
def bubbleSort(arr):
	n = len(arr)
	for i in range(n):
		for j in range(0, n-i-1):
			if arr[j] > arr[j+1]:
				arr[j], arr[j+1] = arr[j+1], arr[j]
`,
  Javascript = `
function swap(arr, xp, yp)
{
	var temp = arr[xp];
	arr[xp] = arr[yp];
	arr[yp] = temp;
}
`

export default function BubbleSort() {
  return (
    <React.Fragment>
      <Row style={{
        // display: 'flex',
        marginTop: '30px',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-between',
        justifyContent: 'space-around',
      }}
        className="bg"
      >
        <div className='desc'>
          <Col span={14}><h1 style={{ color: 'orange'}}>Description</h1>
            <h2 style={{ color: 'white' }}>Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles in sparkling water. The bubbles represents the elements of the data structure.</h2>
            <h2 style={{ color: 'white' }}>The bigger bubbles reach the top faster than smaller bubbles, and this algorithm works in the same way. It iterates through the data structure and for each cycle compares the current element with the next one, swapping them if they are in the wrong order.
            </h2>
            <h2 style={{ color: 'white' }}>It's a simple algorithm to implement, but not much efficient: on average, quadratic sorting algorithms with the same time complexity such as Selection Sort or Insertion Sort perform better.
              It has several variants to improve its performances, such as Shaker Sort, Odd Even Sort and Comb Sort.</h2>
          </Col>
        </div>
        <div className="mobile-table">
          <div>
            <h1 style={{ color: 'white' }}>Complexity</h1>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Average Complexity</th>
                  <th>O(n<sup>2</sup>)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Best Case</td>
                  <td>O(n<sup>2</sup>)</td>
                </tr>
                <tr>
                  <td>Worst Case</td>
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
      <CodeEditor Cpp={Cpp} Java={Java} Python={Python} Javascript={Javascript} d2={false} d3={false} d4={false} />
    </React.Fragment>
  )
}
