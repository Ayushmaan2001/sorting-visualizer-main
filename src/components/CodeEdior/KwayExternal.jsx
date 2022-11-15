import React from 'react'
import './table.css'
import { Col, Row } from 'antd';

export default function KwayExternal() {
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
              <h2 style={{ color: 'white' }}>External sorting is a term for a class of sorting algorithms that can handle massive amounts of data. External sorting is required when the data being sorted does not fit into the main memory of a computing device (usually RAM) and instead, must reside in the slower external memory (usually a hard drive). </h2>
              <h2 style={{ color: 'white' }}>External sorting typically uses a hybrid sort-merge strategy. In the sorting phase, chunks of data small enough to fit in the main memory are read, sorted, and written out to a temporary file. In the merge phase, the sorted sub-files are combined into a single larger file.</h2>
              <h2 style={{ color: 'white' }}>The external merge sort algorithm, which sorts chunks that each fit in RAM, then merges the sorted chunks together. We first divide the file into runs such that the size of a run is small enough to fit into the main memory. Then sort each run in the main memory using the merge sort sorting algorithm. Finally merge the resulting runs together into successively bigger runs, until the file is sorted.
              Here N is the size of the array.
              </h2>
          </Col>
          <Col span={8}>
              <h1 style={{ color: 'white' }}>Complexity</h1>
              <table className="styled-table">
                  <thead>
                      <tr>
                          <th>Average Complexity</th>
                          <th>O(N * log N).</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>Best Case</td>
                          <td>O(N * log N).</td>
                      </tr>
                      <tr>
                          <td>Worst Case</td>
                          <td>O(N * log N).</td>
                      </tr>
                      <tr>
                          <td>Space Complexity</td>
                          <td>O(run_size)</td>
                      </tr>
                  </tbody>
              </table>
          </Col>
      </Row>
          {/* <CodeEditor Cpp={Cpp} Java='java' Python={'python'} Javascript={'js'}/> */}
      </React.Fragment>
  )
}
