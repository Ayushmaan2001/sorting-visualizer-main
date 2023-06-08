import React from 'react';
import "./index.css"
import axios from 'axios';
import FileDownload from 'js-file-download';

const DownloadArray = () => {
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
    <button className="color-style" onClick={() => {downloadFile('internal_array_output.txt')}}>
        <span></span>
        <span>Download File</span><i></i>
    </button>
</div>
    );
}

export default DownloadArray;
