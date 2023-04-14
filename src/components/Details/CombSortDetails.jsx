import React from 'react';

const CombSortDetails = ({I,num1,num2}) => {
    return (
        <div>
    <table className="styled-table">
        <tbody>
            <tr>
                <td>Gap</td>
                <td>{I}</td>
            </tr>
            <tr>
                <td>i<sup>th</sup> element of an array</td>
                <td>{num1}</td>
            </tr>
            <tr>
                <td>(I+Gap)<sup>th</sup> element of an array</td>
                <td>{num2}</td>
            </tr>
        </tbody>
    </table>
</div>
    );
}

export default CombSortDetails;
