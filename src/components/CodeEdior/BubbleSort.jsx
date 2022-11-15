import React from 'react';
import './table.css'
import { Col, Row } from 'antd';
// import CodeEditor from './codeEditor'

export default function BubbleSort() {
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
        <h2 style={{ color: 'white' }}>Bubble Sort is an iterative sorting algorithm that imitates the movement of bubbles in sparkling water. The bubbles represents the elements of the data structure.</h2>
        <h2 style={{ color: 'white' }}>The bigger bubbles reach the top faster than smaller bubbles, and this algorithm works in the same way. It iterates through the data structure and for each cycle compares the current element with the next one, swapping them if they are in the wrong order.
        </h2>
        <h2 style={{ color: 'white' }}>It's a simple algorithm to implement, but not much efficient: on average, quadratic sorting algorithms with the same time complexity such as Selection Sort or Insertion Sort perform better.
          It has several variants to improve its performances, such as Shaker Sort, Odd Even Sort and Comb Sort.</h2>
      </Col>
      <Col span={8}>
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
      </Col>
    </Row>
    {/* <CodeEditor Cpp={Cpp} Java='java' Python={'python'} Javascript={'js'}/> */}
    </React.Fragment>
  )
}
