import asyncSetTimeout from "../helpers/asyncSetTimeout";

async function main(arr, noOfBuckets, setArray, unsortedRunsArray1,unsortedRunsArray2,setunsortedRunsArray2,setunsortedRunsArray1,visualizationSpeed,setColorsArray) {
    let maxEle = Math.max(...arr);
    let minEle = Math.min(...arr);
    let range = (maxEle - minEle) / noOfBuckets;
    let temp = [];
    for (let i = 0; i < noOfBuckets; i++) {
        temp.push([]);
    }
    for (let i = 0; i < arr.length; i++) {
        let newColorsArray = new Array(arr.length).fill(0);
        newColorsArray[i] = 1;
        setColorsArray(newColorsArray);
        let diff = (arr[i] - minEle) / range - Math.floor((arr[i] - minEle) / range);
        if (diff === 0 && arr[i] !== minEle) {
            let flr = Math.floor((arr[i] - minEle) / range);
            temp[flr - 1].push(arr[i]);
            unsortedRunsArray1.push(temp[flr - 1])
            setunsortedRunsArray1(unsortedRunsArray1)
            await asyncSetTimeout({timeout:10*visualizationSpeed})
        } else {
            let flr = Math.floor((arr[i] - minEle) / range);
            temp[flr].push(arr[i]);
            unsortedRunsArray2.push(temp[flr]);
            setunsortedRunsArray2(unsortedRunsArray2)
            await asyncSetTimeout({timeout:10*visualizationSpeed})
        }
        await asyncSetTimeout({timeout:10*visualizationSpeed})
    }
    for (let i = 0; i < temp.length; i++) {
        if (temp[i].length !== 0) {
            temp[i].sort((a, b) => a - b);
            // unsortedRunsArray1.length = 0;
        }
    }
    unsortedRunsArray1.length = 0;
    setunsortedRunsArray1(temp[0]);
    await asyncSetTimeout({timeout:10*visualizationSpeed})
    unsortedRunsArray2.length = 0;
    setunsortedRunsArray2(temp[1]);
    await asyncSetTimeout({timeout:10*visualizationSpeed})

    let k = 0;
    for (let lst of temp) {
        if (lst.length !== 0) {
            for (let i of lst) {
                arr[k] = i;
                k++;
                setArray(arr);
                // await asyncSetTimeout({timeout:10*visualizationSpeed})
            }
        }
    }
    setArray(arr)
}

const bucketSort = async ({
    array,
    setArray,
    setColorsArray,
    visualizationSpeed,
    unsortedRunsArray1,
    unsortedRunsArray2,
    setunsortedRunsArray2,
    setunsortedRunsArray1
} = {}) => {
    main(array, 2, setArray, unsortedRunsArray1,unsortedRunsArray2,setunsortedRunsArray2,setunsortedRunsArray1,visualizationSpeed,setColorsArray)
}

export default bucketSort;