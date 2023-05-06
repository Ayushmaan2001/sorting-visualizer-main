import React from 'react';

const BucketSortDetails = ({I,num1}) => {
    return (
        <div>
            <table className="styled-table">
        <tbody>
            <tr>
                <td>Current Element</td>
                <td>{I}</td>
            </tr>
            <tr>
                <td> No of Buckets</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Current element Bucket</td>
                <td>{num1}</td>
            </tr>
        </tbody>
    </table>
        </div>
    );
}

export default BucketSortDetails;
