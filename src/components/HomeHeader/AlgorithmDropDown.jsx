import React from 'react';
import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';

const AlgorithmDropDown = ({
  currentAlgorithm,
  algorithms,
  isVisualizing,
  onAlgorithmChange,
}) => {
  const width = 140;

  const menu = (
    <Menu style={{width: width}}>
      {algorithms.map(function (algorithm, idx) {
        return (
          <Menu.Item key={idx} onClick={() => onAlgorithmChange(algorithm)} disabled={isVisualizing}>
            {algorithm}
          </Menu.Item>
        );
      })}
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={['click']}>
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
        {currentAlgorithm} <DownOutlined />
      </div>
    </Dropdown>
  );
};

export default AlgorithmDropDown;
