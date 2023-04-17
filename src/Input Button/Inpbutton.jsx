import { Input,Space } from 'antd';
import { useRef, useState } from 'react';
import {PlayCircleOutlined} from '@ant-design/icons';
import React from 'react';

const Inpbutton = ({setRandomizedArray,setMaxItem,isVisualizing}) => {
    const val = useRef(0)
    const [ipArray,setIpArray] = useState([]);
    const [value, setValue] = useState();
    const pushArrayValues = () => {
        setValue(Number(val.current.input.defaultValue)) 
        console.log(value)
        ipArray.push(Number(val.current.input.defaultValue));
        setIpArray(ipArray);
    }
    const setArrayValues = () => {
        setMaxItem(Math.max(...ipArray));
        setRandomizedArray(ipArray)
    }
    return (
        <React.Fragment>
        <Space style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px'}}>
        <Input placeholder="Enter the Values" ref={val} disabled={isVisualizing} style={{backgroundColor:'white'}}/>
      <button onClick={() => {
        pushArrayValues()
      }} icon={<PlayCircleOutlined />}
      disabled={isVisualizing}
      >
        <span></span>
        <span> Push into the array</span><i></i>
      </button>
      <button onClick={() => {
        setArrayValues()
      }} icon={<PlayCircleOutlined />}
      disabled={isVisualizing}
      >
        <span></span>
        <span> Set the Array</span><i></i>
      </button>
      <button onClick={() => {
        setIpArray([])
      }} icon={<PlayCircleOutlined />}
      disabled={isVisualizing}
      >
        <span></span>
        <span> Reset the array</span><i></i>
      </button>
    </Space>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'20px',color:'white'}}>
        {
            ipArray.map((item,idx) => {
                return(
                    <div key={idx} style={{marginLeft:'10px'}}>
                        {
                            item + " "
                        }
                        {/* {" "} */}
                    </div>
                )
            })
        }
    </div>
    </React.Fragment>
    );
}

export default Inpbutton;
