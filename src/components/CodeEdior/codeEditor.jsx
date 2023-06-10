import './table.css'
import React, { useState } from 'react';
import '../../styles/styles.module.css'
import { Dropdown } from 'antd';
import { useEffect } from 'react';


const CodeEditor = ({ Cpp, Java, Python, Javascript, C, C_opt }) => {
  const [codeUrl, setCodeUrl] = React.useState('Cpp')
  const [type, setType] = useState('Average and Worst Case');
  const [selector, setSelector] = useState('cpp1');

  const codeSelector = () => {
    switch(codeUrl){
      case 'Cpp':
        if(type === 'Simple'){
          setSelector('cpp1');
        }
        else if(type === 'Optimised'){
          setSelector('cpp2');
        }
        break;
      case 'C':
        if(type === 'Simple'){
          setSelector('c1');
        }
        else if(type === 'Optimised'){
          setSelector('c2');
        }
        break;
      case 'Python':
        if(type === 'Simple'){
          setSelector('p1');
        }
        else if(type === 'Optimised'){
          setSelector('p2');
        }
        break;
      case 'Java':
        if(type === 'Simple'){
          setSelector('j1');
        }
        else if(type === 'Optimised'){
          setSelector('j2');
        }
        break;
      case 'Javascript':
        if(type === 'Simple'){
          setSelector('js1');
        }
        else if(type === 'Optimised'){
          setSelector('js2');
        }
        break;
      default:
        setSelector('cpp1');
        break;
    }
  }

  useEffect(() => {
    codeSelector();
  },[codeUrl,type])

  const items = [
    {
      label: (
        <a href={()=> false} onClick={(e) => {setType(e.target.innerHTML)}}>
          Simple
        </a>
      ),
      key: '0',
    },
    {
      label: (
        <a href={()=> false} onClick={(e) => {setType(e.target.innerHTML)}}>
          Optimised
        </a>
      ),
      key: '1',
    },
  ];

    return (
    <React.Fragment>      
      <div className='menu-code'>
        <nav>
        <Dropdown menu={{items}} trigger={['click']}>
            <a onClick={(e) => {setCodeUrl(e.target.innerHTML)}} href={() => false}> 
              Cpp
            </a>
          </Dropdown>
          <Dropdown menu={{items}} trigger={['click']}>
            <a onClick={(e) => {setCodeUrl(e.target.innerHTML)}} href={() => false}> 
              Java
            </a>
          </Dropdown>
          <Dropdown menu={{items}} trigger={['click']}>
            <a onClick={(e) => {setCodeUrl(e.target.innerHTML)}} href={() => false}> 
              Python
            </a>
          </Dropdown>
          <Dropdown menu={{items}} trigger={['click']}>
            <a onClick={(e) => {setCodeUrl(e.target.innerHTML)}} href={() => false}> 
              Javascript
            </a>
          </Dropdown>
          <Dropdown menu={{items}} trigger={['click']}>
            <a onClick={(e) => {setCodeUrl(e.target.innerHTML)}} href={() => false}>
              C
            </a>
          </Dropdown>
          <div class="animation start-home"></div>
        </nav>
        <div>
          <pre style={{color:'white',display:'flex',justifyContent:'space-around',marginTop:'20px',marginDown:'20px'}}>
          {
            selector === 'cpp1' ? Cpp :
            selector === 'p1' ? Python :
            selector === 'j1' ? Java :
            selector === 'js1' ? Javascript :
            selector === 'c1' ? C :
            selector === 'c2' ? C_opt :
            null 
          }
          </pre>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CodeEditor;
