import React from 'react'

const HeapSortGraph = () => {
  return (
    <React.Fragment>
      <div style={{maxHeight:'160px'}}>
        <table className="styled-table-graph">
    <thead>
        <tr>
            <th>Color Code</th>
            <th>Meaning</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><div style={{height:'4px',background:'#02E095'}}></div></td>
            <td>Largest element in the remaining array</td>
        </tr>
        <tr>
            <td><div style={{height:'4px',background:'red'}}></div></td>
            <td>value set</td>
        </tr>
        <tr>
            <td><div style={{height:'4px',background:'yellow'}}></div></td>
            <td>array set</td>
        </tr>
    </tbody>
</table>
</div>
    </React.Fragment>
  )
}

export default HeapSortGraph