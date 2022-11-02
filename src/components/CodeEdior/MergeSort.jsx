import React from 'react'
import './table.css'
import { Col, Row } from 'antd';

export default function MergeSort({text}) {
  return (
    <React.Fragment><Row style={{
      display: 'flex',
      marginTop: '30px',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignContent: 'space-between',
      justifyContent: 'space-around',
      alignItems: 'center'
    }}>
      <Col span={14} style={{ color: 'white' }}><h1 style={{ color: 'white' }}>Description</h1>
        <h2 style={{ color: 'white' }}>Merge Sort is a sorting algorithm based on the Divide et Impera technique, like Quick Sort. It can be implemented iteratively or recursively, using the Top-Down and Bottom-Up algorithms respectively. We represented the first one.</h2>
        <h2 style={{ color: 'white' }}>The algorithm divides the data structure recursively until the subsequences contain only one element. At this point, the subsequences get merged and ordered sequentially. To do so, the algorithm progressively builds the sorted sublist by adding each time the minimum element of the next two unsorted subsequences until there is only one sublist remaining. This will be the sorted data structure.
        </h2>
      </Col>
      <Col span={8}>
        <h1 style={{ color: 'white' }}>Complexity</h1>
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
              <td>O(nxlogn)</td>
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
