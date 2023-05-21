import React from 'react';
import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';

const ArrayDropDown = ({
    array,
    isVisualizing,
    currentArray,
    onArrayChange,
}) => {

    const width = 140;
    const menu = (
        <Menu style={{width:width}}>
           {array.map(function (arr, idx) {
        return (
          <Menu.Item key={idx} onClick={() => {onArrayChange(arr)}} disabled={isVisualizing}>
            {arr}
          </Menu.Item>
        );
      })}
        </Menu>
    )
    return (
        <Dropdown overlay={menu} trigger={['click']} >
            <div
        style={{
          height: 30,
          width: width,
          padding: 10,
          fontWeight: 'bold',
          background: '#0D1929',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
        }}
      >
        {currentArray}
        <DownOutlined />
      </div>
        </Dropdown>
    );
}

export default ArrayDropDown;
