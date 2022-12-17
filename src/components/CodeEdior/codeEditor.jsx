import './table.css'
import React from 'react';


const CodeEditor = ({ Cpp, Java, Python, Javascript, d2, d3, d4 }) => {
  const [codeUrl, setCodeUrl] = React.useState('Cpp')
  const code = (e) => {
    setCodeUrl(e.target.innerHTML);
    console.log(codeUrl)
  }
  return (
    <React.Fragment>
      <div class="navMenu">
        <a onClick={(e) => { code(e) }} href={() => false}>Cpp</a>
        <a disabled={d2} onClick={(e) => { code(e) }} href={() => false}>Java</a>
        <a disabled={d3} onClick={(e) => { code(e) }} href={() => false}>Python</a>
        <a disabled={d4} onClick={(e) => { code(e) }} href={() => false}>Javascript</a>
      </div>
      <div class="card">
        <pre>
          {codeUrl === 'Cpp' ? Cpp : codeUrl === 'Java' ? Java : codeUrl === 'Python' ? Python : Javascript}
        </pre>
      </div>
    </React.Fragment>
  );
}

export default CodeEditor;
