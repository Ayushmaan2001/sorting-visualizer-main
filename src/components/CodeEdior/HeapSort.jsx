import React from 'react';
import './table.css'
import { Col, Row } from 'antd';

const HeapSort = ({text}) => {
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
                <h2 style={{ color: 'white' }}>Heap Sort is an in-place iterative sorting algorithm based on auxiliary data structures called heap. It's less efficient than algorithm with the same time complexity and it's not suitable for data structures with few elements</h2>
                <h2 style={{ color: 'white' }}>The heap is a data structure representable as a binary tree, where each node has a value bigger or equal to its children. Consequently, the root will hold the maximum value.</h2>
                <h2 style={{ color: 'white' }}>The data structure gets ordered to form the heap initially, and then it gets progressively reordered with an algorithm similar to Selection Sort, starting from the bigger elements.</h2>
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
                            <td>O(1)</td>
                        </tr>
                    </tbody>
                </table>
            </Col>
        </Row></React.Fragment>
    );
}

export default HeapSort;
