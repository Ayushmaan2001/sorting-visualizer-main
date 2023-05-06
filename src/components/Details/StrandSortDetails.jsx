import React from 'react';

const StrandSortDetails = ({num1,num2}) => {
    return (
        <div>
    <table className="styled-table">
        <tbody>
            <tr>
                <td>Current element of an array</td>
                <td>{num1}</td>
            </tr>
            <tr>
                <td>Largest element in sublist</td>
                <td>{num2}</td>
            </tr>
        </tbody>
    </table>
</div>
    );
}

export default StrandSortDetails;
