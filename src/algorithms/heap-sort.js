import asyncSetTimeout from '../helpers/asyncSetTimeout';

const heapSort = async({
    array,
    setArray,
    setColorsArray,
    visualizationSpeed,
} = {}) => {
    let len = array.length;
    for(let i=Math.floor(len/2)-1;i>=0;i--){
        heapify(array,len,i);
    }
    for(let i=len-1;i>=0;i--){
        let newColorsArray = new Array(len).fill(0);
        newColorsArray[0] = 1;
        newColorsArray[i] = 2;
        var temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        setArray(array);
        heapify(array,i,0);
        await asyncSetTimeout({timeout:800})
        setColorsArray(newColorsArray)
    }
    for(let i=0;i<len;i++){
        let newColorsArray = new Array(len).fill(0);
        newColorsArray[i] = 3;
        setColorsArray(newColorsArray)
        await asyncSetTimeout({timeout:800})
    }
    function heapify(arr, len, i) {
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        if (l < len && arr[l] > arr[largest]) {
            largest = l;
        }
        if (r < len && arr[r] > arr[largest]) {
            largest = r;
        }
        asyncSetTimeout({timeout:visualizationSpeed})
        if (largest !== i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            heapify(arr, len, largest);
        }
    }
}


export default heapSort;