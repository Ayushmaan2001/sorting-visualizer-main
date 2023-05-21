import './table.css'
import React from 'react';


const CodeEditor = ({ Cpp, Java, Python, Javascript, d2, d3, d4 }) => {
  const [codeUrl, setCodeUrl] = React.useState('Cpp')
  const code = (e) => {
    setCodeUrl(e.target.innerHTML);
  }
  return (
    <React.Fragment>      
      <div className='menu-code'>
        <nav>
          <a onClick={(e) => { code(e) }} href={() => false}>Cpp</a>
          <a disabled={d2} onClick={(e) => { code(e) }} href={() => false}>Javascript</a>
          <a disabled={d3} onClick={(e) => { code(e) }} href={() => false}>Python</a>
          <a disabled={d4} onClick={(e) => { code(e) }} href={() => false}>Java</a>
          <div class="animation start-home"></div>
        </nav>
        <div>
          <pre style={{color:'white',display:'flex',justifyContent:'space-around',marginTop:'20px',marginDown:'20px'}}>
          {codeUrl === 'Cpp' ? Cpp : codeUrl === 'Java' ? Java : codeUrl === 'Python' ? Python : Javascript}
          </pre>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CodeEditor;
