import React from 'react';

const AnalysisGraphs = ({cmp,time,mem,swap}) => {
    return (
        <div style={{marginTop:'70px', color:'orange',display:'flex', flexDirection:'column',alignItems:'center'}}>
            <div>
                <h1>Analysis</h1>
            </div>
            <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
            <img src={cmp} id='analysis' alt='analysis'/>
            <img src={swap} id='analysis' alt='analysis'/>
            <img src={time} id='analysis' alt='analysis'/>
            <img src={mem} id='analysis' alt='analysis'/>
        </div>
        </div>
    );
}

export default AnalysisGraphs;
