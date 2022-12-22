import React from 'react'
import SortingBar from '../SortingBar/SortingBar';
import "./RunBars.css"

function RunsBars({ colorsArray, runsArray1, runsArray2, maxItem, unsortedRunsArray1, unsortedRunsArray2 }) {
    return (
        <React.Fragment>
            <div style={{ color: 'wheat', fontSize: '2rem', textAlign: 'center', margin: '5rem' }}>Run 1 Unsorted(Into the memory)</div>
            {unsortedRunsArray1.length === 0 ? null : <div
                style={{
                    backgroundColor: '#0D1929',
                    display: 'flex',
                    height: '100%',
                    width: '100vw',
                    flexDirection: 'row',
                    alignItems: 'end',
                    padding: '0px 0px 0px 0px',
                    minHeight: '34rem',
                    marginTop: '1rem'
                }}
                id="Bars-runs"
            >
                {unsortedRunsArray1.map((item, index) => {
                    const height = (item / maxItem) * 100;
                    const width = (1 / 40) * 100;
                    return (
                        <div
                            key={index}
                            style={{
                                height: '100%',
                                display: 'flex',
                                alignItems: 'end',
                                width: `${width}%`,
                                position:'relative'
                            }}
                        >
                            <SortingBar
                                colorCode={colorsArray[index]}
                                style={{
                                    height: `calc(${height}% - 20px)`,
                                    width: '100%',
                                    margin: 'auto 10% 0 10%',
                                    zIndex: '1'
                                }}
                            ></SortingBar>
                            <div style={{color:' #4169e1',fontWeight:'bold',position:'absolute',zIndex:'1',marginLeft:`${width+15}%`}}>{item}</div>
                        </div>
                    );
                })}
            </div>}
            <div style={{ color: 'wheat', fontSize: '2rem', textAlign: 'center', margin: '5rem' }}>Run 2 Unsorted(Into the memory)</div>
            {unsortedRunsArray2.length === 0 ? null : <div
                    style={{
                        backgroundColor: '#0D1929',
                        display: 'flex',
                        height: '100%',
                        width: '100vw',
                        flexDirection: 'row',
                        alignItems: 'end',
                        padding: '0px 0px 0px 0px',
                        minHeight: '34rem',
                        marginTop: '1rem'
                    }}
                    id="Bars-runs"
                >
                    {unsortedRunsArray2.map((item, index) => {
                        const height = (item / maxItem) * 100;
                        const width = (1 / 40) * 100;
                        return (
                            <div
                                key={index}
                                style={{
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'end',
                                    width: `${width}%`,
                                    position:'relative'
                                }}
                            >
                                <SortingBar
                                    colorCode={colorsArray[index]}
                                    style={{
                                        height: `calc(${height}% - 20px)`,
                                        width: '100%',
                                        margin: 'auto 10% 0 10%',
                                        zIndex:'1'
                                    }}
                                ></SortingBar>
                                <div style={{color:' #4169e1',fontWeight:'bold',position:'absolute',zIndex:'1',marginLeft:`${width+15}%`}}>{item}</div>
                            </div>
                        );
                    })}
                </div>}
            <div style={{ color: 'wheat', fontSize: '2rem', textAlign: 'center', margin: '5rem' }}>Run 1 Sorted</div>
            {runsArray1.length === 0 ? null : <div
                style={{
                    backgroundColor: '#0D1929',
                    display: 'flex',
                    height: '100%',
                    width: '100vw',
                    flexDirection: 'row',
                    alignItems: 'end',
                    padding: '0px 0px 0px 0px',
                    minHeight: '34rem',
                    marginTop: '1rem'
                }}
                id="Bars-runs"
            >
                {runsArray1.map((item, index) => {
                    const height = (item / maxItem) * 100;
                    const width = (1 / 40) * 100;
                    return (
                        <div
                            key={index}
                            style={{
                                height: '100%',
                                display: 'flex',
                                alignItems: 'end',
                                width: `${width}%`,
                                position:'relative'
                            }}
                        >
                            <SortingBar
                                colorCode={colorsArray[index]}
                                style={{
                                    height: `calc(${height}% - 20px)`,
                                    width: '100%',
                                    margin: 'auto 10% 0 10%',
                                    zIndex:'1'
                                }}
                            ></SortingBar>
                            <div style={{color:' #4169e1',fontWeight:'bold',position:'absolute',zIndex:'1',marginLeft:`${width+15}%`}}>{item}</div>
                        </div>
                    );
                })}
            </div>}
            <div style={{ color: 'wheat', fontSize: '2rem', textAlign: 'center', marginTop: '5rem' }}>Run 2 Sorted</div>
            {runsArray2.length === 0 ? null : <div
                style={{
                    backgroundColor: '#0D1929',
                    display: 'flex',
                    height: '100%',
                    width: '100vw',
                    flexDirection: 'row',
                    alignItems: 'end',
                    padding: '0px 0px 0px 0px',
                    minHeight: '34rem',
                    marginTop: '1rem'
                }}
                id="Bars-runs"
            >
                {runsArray2.map((item, index) => {
                    const height = (item / maxItem) * 100;
                    const width = (1 / 40) * 100;
                    return (
                        <div
                            key={index}
                            style={{
                                height: '100%',
                                display: 'flex',
                                alignItems: 'end',
                                width: `${width}%`,
                            }}
                        >
                            <SortingBar
                                colorCode={colorsArray[index]}
                                style={{
                                    height: `calc(${height}% - 20px)`,
                                    width: '100%',
                                    margin: 'auto 10% 0 10%',
                                    zIndex: '1',
                                    position:'relative'
                                }}
                            ></SortingBar>
                            <div style={{color:' #4169e1',fontWeight:'bold',position:'absolute',zIndex:'1',marginLeft:`${width+15}%`}}>{item}</div>
                        </div>
                    );
                })}
            </div>}
        </React.Fragment>
    )
}

export default RunsBars