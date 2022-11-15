import asyncSetTimeout from "../helpers/asyncSetTimeout";
import axios from 'axios'

let data;
async function POST_REQUEST(JSONObject){
    try{
        await axios.post('http://localhost:5000/k_way_external_merge_sort', { JSONObject })
    }
    catch (err) {
        console.log(err)
    }
}

async function GET_REQUEST() {
    try {
        data = await axios.get('http://localhost:5000/k_way_external_sort_output');
        return data;
    } catch (error) {
        console.log(error)
    }
}

const K_Way_Merge_Sort = async ({
    array,
    setArray,
    setColorsArray,
    visualizationSpeed,
} = {}) => {
    let temp_array;
    var JSONObject = JSON.parse(JSON.stringify(array));
    asyncSetTimeout({timeout:100000000})
    await POST_REQUEST(JSONObject)
    .then((data) => {
        console.log(data);
    })
    await GET_REQUEST()
    .then((data) => {
        temp_array = data;
    }).finally(() => {
        console.log(temp_array.data[0])
        // console.log(temp_array.data)
        let arr_test = [];
        let temp = "";
        for(let i=1;i<temp_array.data[0].length;i++){
            if (temp_array.data[0][i] === ' '){
                arr_test.push(parseInt(temp));
                temp = "";
            }
            else{
                temp += temp_array.data[0][i];
            }
        }
        arr_test.push(parseInt(temp));
        asyncSetTimeout({ timeout: 1000000 })
        console.log(arr_test)
        setArray(arr_test)
    })
    // let temp_arr = array;
    // var n = temp_array.length;
    // let k=0;
    // for(let i=0;i<n;i++){
    //     array[k++] = temp_array[i];
    //     setArray(array);
    //     console.log('s')
    //     asyncSetTimeout({timeout:visualizationSpeed})
    // }
}

export default K_Way_Merge_Sort