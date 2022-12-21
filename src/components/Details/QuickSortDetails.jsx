import React from 'react'

const QuickSortDetails = ({I,J,num1,num2}) => {
return (
<div>
    <table className="styled-table">
        <tbody>
            <tr>
                <td>Pivot</td>
                <td>{I}</td>
            </tr>
            <tr>
                <td>J<sup>th</sup> iteration</td>
                <td>{J}</td>
            </tr>
            <tr>
                <td>Element larger than pivot</td>
                <td>{num1}</td>
            </tr>
            <tr>
                <td>Element smaller than pivot</td>
                <td>{num2}</td>
            </tr>
        </tbody>
    </table>
</div>
)
}

export default QuickSortDetails