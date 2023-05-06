import React from 'react'
import './tableGraph.css'

const BucketSortGraph = () => {
    return (
        <div>
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
            <td>Looping the array</td>
        </tr>
    </tbody>
</table>
</div>
    </React.Fragment>
        </div>
    );
}

export default BucketSortGraph;
