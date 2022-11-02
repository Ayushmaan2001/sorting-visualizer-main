import React from 'react'
import './table.css'
import { Col, Row } from 'antd';

export default function RadixSort({text}) {
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
        <h2 style={{ color: 'white' }}>Radix Sort is a sorting algorithm that doesn't use comparisons. Its complexity depends, in addition to the number of elements, by the values b and d, representing the radix of the numbers and the maximum number of digits of the elements respectively</h2>
        <h2 style={{ color: 'white' }}>Radix Sort works by splitting the elements into buckets, according to their radix, starting from the least significant digit (LSD) or from the most significant digit (MSD) of the number. If the number has more than one significant digit, this process is repeated to account all the digits of the number.</h2>
        <h2 style={{ color: 'white' }}>It's a particular sorting algorithm really different from the others as it is not based on comparisons, but on the digits of the number instead, so it's only applicable on whole numbers or strings.</h2>
        <h2 style={{ color: 'white' }}>It can be faster than other logarithmic sorting algorithms on big data structures as it can even perform in linear time in special cases, but it's not widely used due to its limitations.</h2>
      </Col>
      <Col span={8}>
        <h1 style={{ color: 'white' }}>Complexity</h1>
        <table class="styled-table">
          <thead>
            <tr>
              <th>Average Complexity</th>
              <th>O(d×(n+b))</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Best Case</td>
              <td>O(d×(n+b))</td>
            </tr>
            <tr>
              <td>Worst Case</td>
              <td>O(d×(n+b))</td>
            </tr>
            <tr>
              <td>Space Complexity</td>
              <td>O(n+2^d)</td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row></React.Fragment>
  )
}
