import axios from 'axios';

async function ARRAY_FINAL_OUTPUT(JSONObject){
    try{
        await axios.post('https://write-files-text.onrender.com/array_final', JSONObject)
    }
    catch (err) {
        console.log(err)
    }
}

export default ARRAY_FINAL_OUTPUT;