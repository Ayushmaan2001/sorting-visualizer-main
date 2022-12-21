import React from 'react'

const BubbleSortDetails = ({I,J,num1,num2}) => {
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
                <td>J<sup>th</sup> element of an array</td>
                <td>{num1}</td>
            </tr>
            <tr>
                <td>(J+1)<sup>th</sup> element of an array</td>
                <td>{num2}</td>
            </tr>
        </tbody>
    </table>
</div>
)
}

export default BubbleSortDetails