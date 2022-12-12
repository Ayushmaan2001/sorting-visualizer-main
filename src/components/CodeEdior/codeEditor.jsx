import { Collapse } from 'antd';
import './table.css'
import React from 'react';
const { Panel } = Collapse;


const CodeEditor = ({ Cpp, Java, Python, Javascript, d2, d3, d4 }) => {
  const [codeUrl, setCodeUrl] = React.useState('Cpp')
  const code = (e) => {
    setCodeUrl(e.target.innerHTML);
    console.log(codeUrl)
  }
  return (
    <React.Fragment>
      {/* <Collapse defaultActiveKey={['1']} accordion={false} bordered={false} ghost={false} style={{ maxWidth: '40rem', margin: '3px 30px' }}>
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
      </Collapse> */}
      <div class="navMenu">
        <a onClick={(e) => { code(e) }} href={() => false}>Cpp</a>
        <a onClick={(e) => { code(e) }} href={() => false}>Java</a>
        <a onClick={(e) => { code(e) }} href={() => false}>Python</a>
        <a onClick={(e) => { code(e) }} href={() => false}>Javascript</a>
      </div>
      {/* <div class="card">
        <div class="card2">
          <pre>
            {codeUrl === 'Cpp' ? Cpp : codeUrl === 'Java' ? Java : codeUrl === 'Python' ? Python : Javascript}
          </pre>
        </div>
      </div> */}
      <div class="card">
        <pre>
          {codeUrl === 'Cpp' ? Cpp : codeUrl === 'Java' ? Java : codeUrl === 'Python' ? Python : Javascript}
        </pre>
      </div>
    </React.Fragment>
  );
}

export default CodeEditor;
