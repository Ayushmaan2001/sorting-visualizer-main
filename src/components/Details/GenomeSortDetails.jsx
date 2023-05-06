import React from 'react';

const GenomeSortDetails = ({I,J,num1,num2}) => {
    return (
        <div>
    <table className="styled-table">
        <tbody>
            <tr>
                <td>Index</td>
                <td>{I}</td>
            </tr>
            <tr>
                <td>Current Element</td>
                <td>{J}</td>
            </tr>
            <tr>
                <td>(I-1)<sup>th</sup>Element</td>
                <td>{num1}</td>
            </tr>
        </tbody>
    </table>
</div>
    );
}

export default GenomeSortDetails;
