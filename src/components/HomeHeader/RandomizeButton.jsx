import React from 'react';
import {RedoOutlined} from '@ant-design/icons';
import '../../styles/Buttons.css'

const RandomizeButton = ({onClick}) => {
  return (
    <div >
      <button className="color-style" onClick={onClick} icon={<RedoOutlined />}>
        <span> Randomize</span><i></i>
      </button>
    </div>
  );
};

export default RandomizeButton;
