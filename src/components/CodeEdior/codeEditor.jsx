import { Collapse } from 'antd';
import React from 'react';
const { Panel } = Collapse;


const CodeEditor = ({Cpp,Java,Python,Javascript}) => {
    return (
        <Collapse defaultActiveKey={['1']}>
      <Panel header="This is panel header with arrow icon" key="1">
        <p>{Cpp}</p>
      </Panel>
      <Panel header="This is panel header with no arrow icon" key="2">
        <p>{Java}</p>
      </Panel>
      <Panel header="This is panel header with no arrow icon" key="3">
        <p>{Python}</p>
      </Panel>
      <Panel header="This is panel header with no arrow icon" key="4">
        <p>{Javascript}</p>
      </Panel>
    </Collapse>
    );
}

export default CodeEditor;
