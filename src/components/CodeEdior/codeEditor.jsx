import { Collapse } from 'antd';
import React from 'react';
const { Panel } = Collapse;

const CodeEditor = ({Cpp,Java,Python,Javascript,d2,d3,d4}) => {
    return (
      <Collapse defaultActiveKey={['1']} accordion={false} bordered={false} ghost={false} style={{ maxWidth: '40rem', margin: '3px 30px'}}>
      <Panel header="CPP" key="1" showArrow={false}>
        <pre>
          {Cpp}
        </pre>
      </Panel>
        <Panel header="Java" key="2" showArrow={false} disabled={d2}>
        <pre>{Java}</pre>
      </Panel>
        <Panel header="Python" key="3" showArrow={false} disabled={d3}>
        <pre>{Python}</pre>
      </Panel>
        <Panel header="Javascript" key="4" showArrow={false} disabled={d4}>
        <pre>{Javascript}</pre>
      </Panel>
    </Collapse>
    );
}

export default CodeEditor;
