import React from 'react';
import {PlayCircleOutlined} from '@ant-design/icons';

const BenchmarkingButton = () => {
    return (
        <div>
      <button className="color-style" icon={<PlayCircleOutlined />}>
        <span></span>
        <span>
            <a style={{cursor:'url',color:'inherit'}} href='https://drive.google.com/file/d/1xBzqn_odAaMkgrw82hxRLOAyet3-uuZS/view?usp=sharing' target='_blank' rel='noreferrer'>Benchmark</a>    
        </span><i></i>
      </button>
    </div>
    );
}

export default BenchmarkingButton;
