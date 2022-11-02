import { Collapse } from 'antd';
import React from 'react';
const { Panel } = Collapse;


const CodeEditor = ({Cpp,Java,Python,Javascript}) => {
    return (
        <Collapse defaultActiveKey={['1']}>
      <Panel header="This is panel header with arrow icon" key="1">
        <pre>
          {Cpp}
        </pre>
      </Panel>
      <Panel header="This is panel header with no arrow icon" key="2">
        <pre>{Java}</pre>
      </Panel>
      <Panel header="This is panel header with no arrow icon" key="3">
        <pre>{Python}</pre>
      </Panel>
      <Panel header="This is panel header with no arrow icon" key="4">
        <pre>{Javascript}</pre>
      </Panel>
    </Collapse>
    );
}

export default CodeEditor;
