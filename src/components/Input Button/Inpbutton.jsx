import { Input,Space } from 'antd';
import { useRef, useState } from 'react';
import {PlayCircleOutlined} from '@ant-design/icons';
import React from 'react';

const Inpbutton = ({setRandomizedArray,setMaxItem,isVisualizing}) => {
    const val = useRef("")
    const [ipArray,setIpArray] = useState([]);
    let check = true;
    const pushArrayValues = () => {
        let str = val.current.input.defaultValue;
        for(let i=0;i<str.length;i++){
          if(str[i]!==' '){
            let tmp = "";
            while(i<str.length){
              if(str[i] === ' '){
                break;
              }
              tmp += str[i]
              i++;
            }
            if(tmp.length!==0)
            if(tmp>= 'a' && tmp<='z'){
              alert("Enter correct array")
              check = false;
              return;
            }
              ipArray.push(Number(tmp));
          }
        }
        if(check){
          setMaxItem(Math.max(...ipArray));
        setRandomizedArray(ipArray)
        setIpArray([])
        }
        else{
          return;
        }
        check = true;
    }
    return (
        <React.Fragment>
        <Space style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}}>
        <Input placeholder="Enter the Values" ref={val} disabled={isVisualizing} style={{backgroundColor:'white'}}/>
      <button className="color-style" onClick={() => {
        pushArrayValues()
      }} icon={<PlayCircleOutlined />}
      disabled={isVisualizing}
      >
        <span></span>
        <span> Push into the array</span><i></i>
      </button>
      <button className="color-style" onClick={() => {
        setRandomizedArray([])
      }} icon={<PlayCircleOutlined />}
      disabled={isVisualizing}
      >
        <span></span>
        <span> Reset the array</span><i></i>
      </button>
    </Space>
  
    </React.Fragment>
    );
}

export default Inpbutton;
