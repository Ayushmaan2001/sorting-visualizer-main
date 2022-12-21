import React from 'react'

const KWayExternalSortGraph = () => {
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
            <td><div style={{height:'4px',background:'red'}}></div></td>
            <td>Looping through the array and deleting the element</td>
        </tr>
        <tr>
            <td><div style={{height:'4px',background:'yellow'}}></div></td>
            <td>merging and building the sorted array</td>
        </tr>
    </tbody>
</table>
</div>
    </React.Fragment>
  )
}

export default KWayExternalSortGraph