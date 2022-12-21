import React from 'react'

const CountingSortDetails = ({I,J,num1,num2}) => {
  return (
    <div>
    <table className="styled-table">
        <tbody>
            <tr>
                <td>i<sup>th</sup> iteration</td>
                <td>{I}</td>
            </tr>
            <tr>
                <td>Value</td>
                <td>{num1}</td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default CountingSortDetails