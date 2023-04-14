import React from 'react';

const CombSortGraph = () => {
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
            <td><div style={{height:'4px',background:'#02E095',width:'60px'}}></div></td>
            <td>Values to be swap</td>
        </tr>
        <tr>
            <td><div style={{height:'4px',background:'red',width:'60px'}}></div></td>
            <td>Values to be swap</td>
        </tr>
        <tr>
            <td><div style={{height:'4px',background:'yellow',width:'60px'}}></div></td>
            <td>Final array</td>
        </tr>
    </tbody>
</table>
</div>
    </React.Fragment>
    );
}

export default CombSortGraph;
