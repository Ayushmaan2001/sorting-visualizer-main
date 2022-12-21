import React from 'react'

const InsertionSortGraph = () => {
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
            <td>Values to be swap</td>
        </tr>
        <tr>
            <td><div style={{height:'4px',background:'red'}}></div></td>
            <td>Smallest Element in array </td>
        </tr>
        <tr>
            <td><div style={{height:'4px',background:'yellow'}}></div></td>
            <td>Max size of the array which is checked</td>
        </tr>
    </tbody>
</table>
</div>
    </React.Fragment>
  )
}

export default InsertionSortGraph