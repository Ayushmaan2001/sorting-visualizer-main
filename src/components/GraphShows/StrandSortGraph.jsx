import React from 'react';

const StrandSortGraph = () => {
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
            <td>Looping through the array</td>
        </tr>
        <tr>
            <td><div style={{height:'4px',background:'red'}}></div></td>
            <td>Value is largest than the last element of sublist</td>
        </tr>
    </tbody>
</table>
</div>
    </React.Fragment>
    );
}

export default StrandSortGraph;
