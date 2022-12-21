import React from 'react'

const SelectionSortGraph = () => {
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
            <td>Smallest element in an array</td>
        </tr>
        <tr>
            <td><div style={{height:'4px',background:'red'}}></div></td>
            <td>looping though the array and finding smallest element</td>
        </tr>
        <tr>
            <td><div style={{height:'4px',background:'yellow'}}></div></td>
            <td>position to be swap with the smallest element</td>
        </tr>
    </tbody>
</table>
</div>
    </React.Fragment>
  )
}

export default SelectionSortGraph