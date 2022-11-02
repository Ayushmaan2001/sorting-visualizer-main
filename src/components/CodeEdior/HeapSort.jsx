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
                <h2 style={{ color: 'white' }}>Counting sort is a sorting algorithm that sorts the elements of an array by counting the number of occurrences of each unique element in the array. The count is stored in an auxiliary array and the sorting is done by mapping the count as an index of the auxiliary array.</h2>
                <h2>Here n is the size of elements and k is the range of the elements</h2>
            </Col>
            <Col span={8}>
                <h1 style={{ color: 'white' }}>Complexity</h1>
                <table class="styled-table">
                    <thead>
                        <tr>
                            <th>Average Complexity</th>
                            <th>O(nxk)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Best Case</td>
                            <td>O(nxk)</td>
                        </tr>
                        <tr>
                            <td>Worst Case</td>
                            <td>O(nxk)</td>
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
