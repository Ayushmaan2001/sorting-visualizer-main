import asyncSetTimeout from "../helpers/asyncSetTimeout";

const radixSort = async ({
    array,
    setArray,
    setColorsArray,
    visualizationSpeed
} = {}) => {
    let n = array.length;
    //max function
    function getMax(arr) {
        var maxele = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maxele) {
                maxele = arr[i];
            }
        }
        return maxele;
    }
    //count sort
    async function countSort(arr, n, exp) {
        let output = new Array(n);
        let i;
        let count = new Array(10);
        for (let i = 0; i < 10; i++) {
            count[i] = 0;
        }
        for (i = 0; i < n; i++) {
            let newColorsArray = new Array(n).fill(0);
            newColorsArray[i] = 1;
            setColorsArray(newColorsArray);
            asyncSetTimeout({timeout:visualizationSpeed})
            count[Math.floor(arr[i] / exp) % 10]++;
        }
        for (i = 1; i < 10; i++) {
            let newColorsArray = new Array(n).fill(0);
            newColorsArray[i] = 1;
            setColorsArray(newColorsArray);
            asyncSetTimeout({ timeout: visualizationSpeed })
            count[i] += count[i - 1];
        }
        for (i = n - 1; i >= 0; i--) {
            let newColorsArray = new Array(n).fill(0);
            newColorsArray[i] = 1;
            setColorsArray(newColorsArray);
            asyncSetTimeout({ timeout: visualizationSpeed })
            output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
            count[Math.floor(arr[i] / exp) % 10]--;
        }
        for (i = 0; i < n; i++) {
            let newColorArray = new Array(n).fill(0);
            newColorArray[i] = 2;
            setColorsArray(newColorArray);
            arr[i] = output[i];
            asyncSetTimeout({timeout:visualizationSpeed})
        }
    }
    let m = getMax(array);
    for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10) {
        asyncSetTimeout({ timeout: visualizationSpeed })
        countSort(array, n, exp);
    }
    setColorsArray([])
}

export default radixSort;