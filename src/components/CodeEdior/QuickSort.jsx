import React from 'react'
import { Row,Col } from 'antd'
import './table.css'

export default function QuickSort({text}) {
  return (
    <React.Fragment><Row style={{
      display: 'flex',
      marginTop:'30px',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignContent: 'space-between',
      justifyContent: 'space-around',
      alignItems: 'center' }}>
      <Col span={14} style={{ color: 'white' }}><h1 style={{ color: 'white' }}>Description</h1>
        <h2 style={{ color: 'white' }}>Quick Sort is a sorting algorithm based on splitting the data structure in smaller partitions and sort them recursively until the data structure is sorted.</h2>
        <h2 style={{ color: 'white' }}>This division in partitions is done based on an element, called pivot: all the elements bigger than the pivot get placed on the right side of the structure, the smaller ones to the left, creating two partitions. Next, this procedure gets applied recursively to the two partitions and so on.
        </h2>
        <h2 style={{ color: 'white' }}>This partition technique based on the pivot is called Divide and conquer. It's a performant strategy also used by other sorting algorithms, such as Merge Sort.</h2>
      </Col>
      <Col span={8}>
        <h1 style={{color:'white'}}>Complexity</h1>
        <table class="styled-table">
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
              <td>O(n<sup>2</sup>)</td>
            </tr>
            <tr>
              <td>Space Complexity</td>
              <td>O(n)</td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row></React.Fragment>
  )
}
