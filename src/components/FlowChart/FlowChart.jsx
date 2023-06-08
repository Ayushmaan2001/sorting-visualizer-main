import React from 'react';
import "./FlowChart.css"

const FlowChart = ({f1,f2,f3,val1,val2,val3}) => {
    return (
        <React.Fragment>
            <div style={{color:'orange',display:'flex',justifyContent:'space-around'}}>
                <h1>
                    FlowChart
                </h1>
            </div>
           <div className='flow-chart'>
           <div>
           {
                f1 === true ? <img src={val1} alt='' width={300}/> : null
            }
           </div>
            <div>
            {
                f2 === true ? <img src={val2} alt='' width={300} style={{marginLeft:'20px',marginRight:'20px'}}/> : null
            }
            </div>
            <div>
            {
                f3 === true ? <img src={val3} alt='' width={300}/> : null
            }
            </div>
           </div>
        </React.Fragment>
    );
}

export default FlowChart;
