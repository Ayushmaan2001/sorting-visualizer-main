import React from 'react'
import { useState } from 'react';
import SortingBar from '../SortingBar/SortingBar';

let test = [[1,2,3],[4,5,6]]

function RunsBars({ runs, colorsArray, runsArray1, runsArray2, maxItem }) {
    return (
        <React.Fragment>
            {console.log(runsArray1,runsArray2)}
            <div
                style={{
                    backgroundColor: '#0D1929',
                    display: 'flex',
                    height: '100%',
                    width: '100vw',
                    flexDirection: 'row',
                    alignItems: 'end',
                    padding: '0px 0px 0px 0px',
                    minHeight: '34rem'
                }}
            >
                {runsArray1.map((item, index) => {
                    const height = (item / maxItem) * 100;
                    const width = (1 / runsArray1.length) * 100;
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
                                }}
                            ></SortingBar>
                        </div>
                    );
                })}
            </div>
            <div
                style={{
                    backgroundColor: '#0D1929',
                    display: 'flex',
                    height: '100%',
                    width: '100vw',
                    flexDirection: 'row',
                    alignItems: 'end',
                    padding: '0px 0px 0px 0px',
                    minHeight: '34rem'
                }}
            >
                {runsArray2.map((item, index) => {
                    const height = (item / maxItem) * 100;
                    const width = (1 / runsArray2.length) * 100;
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
                                }}
                            ></SortingBar>
                        </div>
                    );
                })}
            </div>
        </React.Fragment>
    )
}

export default RunsBars