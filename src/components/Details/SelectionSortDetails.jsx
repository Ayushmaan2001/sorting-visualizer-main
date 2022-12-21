import React from 'react'

const SelectionSortDetails = ({I,J,num1,num2}) => {
return (
<div>
    <table className="styled-table">
        <tbody>
            <tr>
                <td>i<sup>th</sup> iteration</td>
                <td>{I}</td>
            </tr>
            <tr>
                <td>j<sup>th</sup> iteration</td>
                <td>{J}</td>
            </tr>
            <tr>
                <td>I<sup>th</sup> element (swap with the smallest element)</td>
                <td>{num1}</td>
            </tr>
            <tr>
                <td>Smallest element of an array</td>
                <td>{num2}</td>
            </tr>
        </tbody>
    </table>
</div>
)
}

export default SelectionSortDetails