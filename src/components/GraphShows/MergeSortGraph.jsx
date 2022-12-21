import React from 'react'

const MergeSortGraph = () => {
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
            <td>Building the sorted array</td>
        </tr>
        <tr>
            <td><div style={{height:'4px',background:'red'}}></div></td>
            <td>checking and merging the elements</td>
        </tr>
    </tbody>
</table>
</div>
    </React.Fragment>
  )
}

export default MergeSortGraph