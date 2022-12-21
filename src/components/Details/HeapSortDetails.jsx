import React from 'react'

const HeapSortDetails = ({I,J,num1,num2}) => {
  return (
    <div>
    <table className="styled-table">
        <tbody>
            <tr>
                <td>i<sup>th</sup> iteration</td>
                <td>{I}</td>
            </tr>
            <tr>
                <td>j<sup>th</sup> index of the array</td>
                <td>{J}</td>
            </tr>
            <tr>
                <td>largest element in heap</td>
                <td>{num1}</td>
            </tr>
            <tr>
                <td>element to be swap with</td>
                <td>{num2}</td>
            </tr>
        </tbody>
    </table>
</div>
  )
}

export default HeapSortDetails