import React from 'react';
import "./index.css"
import axios from 'axios';

const Downloadbtn = () => {
async function DOWNLOAD_FILE(fileName){
await axios.post('http://localhost:5000/download',fileName).then((data) => {
console.log(data)
})
}

const download = async () => {
    let down = JSON.parse(JSON.stringify({
        fileName:"unsorted1.txt"
    }))
await DOWNLOAD_FILE(down);
}
return (
<div>
    <button onClick={download}>
        <span></span>
        <span> Download</span><i></i>
    </button>
</div>
);
}

export default Downloadbtn;