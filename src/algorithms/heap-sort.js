import asyncSetTimeout from '../helpers/asyncSetTimeout';

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
    setComparisons
} = {}) => {
    comparisons=0
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
        setArray(array);
        heapify(array, i, 0);
        await asyncSetTimeout({
            timeout: 10 * visualizationSpeed
        })
        setColorsArray(newColorsArray)
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
}


export default heapSort;