import React from 'react';
import "./index.css"
import axios from 'axios';
import FileDownload from 'js-file-download';

const Downloadbtn = () => {
async function DOWNLOAD_FILE(fileName,file){
await axios({
method:'post',
url:"https://write-files-text.onrender.com/download",
data:fileName,
responseType:'text'
})
.then((res)=>{
    FileDownload(res.data,`${file}`)
})
}

const downloadFile = async(file) => {
    let data = JSON.parse(JSON.stringify({
        fileName:file
    }))
    await DOWNLOAD_FILE(data,`${file}`)
}

return (
<div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-around',marginTop:'20px'}}>
    <button className="color-style" onClick={() => {downloadFile('unsorted1.txt')}}>
        <span></span>
        <span> Unsorted1</span><i></i>
    </button>
    <button className="color-style" onClick={() => {downloadFile('unsorted2.txt')}}>
        <span></span>
        <span> Unsorted2</span><i></i>
    </button>
    <button className="color-style" onClick={() => {downloadFile('sorted1.txt')}}>
        <span></span>
        <span> Sorted1</span><i></i>
    </button>
    <button className="color-style" onClick={() => {downloadFile('sorted2.txt')}}>
        <span></span>
        <span> Sorted2</span><i></i>
    </button>
    <button className="color-style" onClick={() => {downloadFile('output.txt')}}>
        <span></span>
        <span> Final Array</span><i></i>
    </button>
</div>
);
}

export default Downloadbtn;