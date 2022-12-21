import React from 'react'

const QuickSortGraph = () => {
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
            <td>Element smaller than the pivot and the swapping it</td>
        </tr>
        <tr>
            <td><div style={{height:'4px',background:'red'}}></div></td>
            <td>Looping through the array/element set</td>
        </tr>
        <tr>
            <td><div style={{height:'4px',background:'yellow'}}></div></td>
            <td>Pivot</td>
        </tr>
    </tbody>
</table>
</div>
    </React.Fragment>
  )
}

export default QuickSortGraph