import React from 'react';
import {PlayCircleOutlined} from '@ant-design/icons';

const StartButton = ({onClick}) => {
  return (
    <div>
      <button className="color-style" onClick={onClick} icon={<PlayCircleOutlined />}>
        <span></span>
        <span> Start</span><i></i>
      </button>
    </div>
  );
};

export default StartButton;
