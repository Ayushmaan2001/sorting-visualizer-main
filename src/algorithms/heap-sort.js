import asyncSetTimeout from '../helpers/asyncSetTimeout';
import ARRAY_FINAL_OUTPUT from './arrayFinalOutput';

var check = 1
const heapSort = async ({
    array,
    setArray,
    setColorsArray,
    visualizationSpeed,
    setI,
    setJ,
    setNum1,
    setNum2,
    comparisons,
    setComparisons,
    swaps,
    setswaps,
    timeRequired,
  setTimeRequired
} = {}) => {
    comparisons=0
    swaps=0
    timeRequired = 0;
    setTimeRequired(timeRequired)
    var t1 = performance.now();
    let len = array.length;
    for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
        heapify(array, len, i, comparisons, setComparisons);
    }
    let k = 0;
    for (let i = len - 1; i >= 0; i--) {
        setI(k++);
        setJ(i);
        let newColorsArray = new Array(len).fill(0);
        newColorsArray[0] = 1;
        newColorsArray[i] = 2;
        setNum1(array[0]);
        i - 1 > 0 ? setNum2(array[i]) : setNum2(0);
        var temp = array[0];
        array[0] = array[i];
        array[i] = temp;
        swaps++;
        setswaps(swaps);
        setArray(array);
        heapify(array, i, 0);
        await asyncSetTimeout({
            timeout: 10 * visualizationSpeed
        })
        setColorsArray(newColorsArray)
        let var1 = JSON.parse(JSON.stringify({
            array:array,
            fileName:"internal_array_output.txt",
            cmp:comparisons,
            swap:swaps,
            check:check++,
        }))
        await ARRAY_FINAL_OUTPUT(var1)
    }

    function heapify(arr, len, i) {
        let largest = i;
        let l = 2 * i + 1;
        let r = 2 * i + 2;
        comparisons++;
        setComparisons(comparisons);
        if (l < len && arr[l] > arr[largest]) {
            largest = l;
        }
        if (r < len && arr[r] > arr[largest]) {
            largest = r;
        }
        asyncSetTimeout({
            timeout: 10 * visualizationSpeed
        })
        if (largest !== i) {
            var swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            heapify(arr, len, largest);
        }
    }
    var t2 = performance.now();
    setTimeRequired(t2-t1)
}


export default heapSort;