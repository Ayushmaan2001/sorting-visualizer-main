const generateRandomizedArray = ({arraySize} = {}) =>{
    let randomizedArray = [];

    for(let i = 0; i < arraySize;i++){
        randomizedArray.push(Math.floor(Math.random() * (40 - 10) + 10));
    }
    return randomizedArray;
}

const swapInArray = (arr, swaps) => {
    let size = arr.length;

    for (let i = 0; i < swaps; i++) {
      let index1 = Math.floor(Math.random() * size);
      let index2 = index1 + 1;
      if (index2 >= size) {
        index2 = index1 - 1;
      }
      let temp = arr[index1];
      arr[index1] = arr[index2];
      arr[index2] = temp;
    }
    return arr;
}
  

const generateNearlySortedArray = ({arraySize} = {}) => {
    let arr = generateRandomizedArray({arraySize: arraySize});
    arr.sort((a, b) => a - b); 
    // 10 - 30% of length direct inversions created
    let numSwaps = Math.floor(((Math.floor(Math.random() * 11) + 20) * arr.length) / 100.0); 
    // console.log(numSwaps);
    return swapInArray(arr, numSwaps);
}

const generateNearlyReverseSortedArray = ({arraySize} = {}) => {
    let arr = generateRandomizedArray({arraySize: arraySize});
    arr.sort((a, b) => b - a); 
    let numSwaps = Math.floor(((Math.floor(Math.random() * 11) + 20) * arr.length) / 100.0);
    // console.log(numSwaps);
    return swapInArray(arr, numSwaps);
}

const generateSortedArray = ({arraySize} = {}) => {
    let arr = generateRandomizedArray({arraySize: arraySize});
    arr.sort((a, b) => a - b); 
    return arr;
}

const generateReverseSortedArray = ({arraySize} = {}) => {
    let arr = generateRandomizedArray({arraySize: arraySize});
    arr.sort((a, b) => b - a); 
    return arr;
}

const generateArray = {generateRandomizedArray,generateNearlySortedArray,generateNearlyReverseSortedArray,generateSortedArray,generateReverseSortedArray}
export default generateArray;