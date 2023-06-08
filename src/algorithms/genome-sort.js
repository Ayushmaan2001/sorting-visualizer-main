import asyncSetTimeout from '../helpers/asyncSetTimeout';
import ARRAY_FINAL_OUTPUT from './arrayFinalOutput';

var check = 1;
const Genomesort = async ({
    array,
    setArray,
    setColorsArray,
    visualizationSpeed,
    setI,
    setNum1,
    setNum2,
    comparisons,
    setComparisons,
    swaps,
    setswaps,
    timeRequired,
  setTimeRequired
} = {}) => {
    comparisons = 0;
    swaps=0;
    timeRequired = 0;
    setTimeRequired(timeRequired)
    var t1 = performance.now();
    let len = array.length
    let index = 0;

    while (index < len) {
        comparisons++;
        setComparisons(comparisons);
        let newColorArray = new Array(len).fill(0);
        if (index === 0)
            index++;
        setI(index);
        setNum1(array[index])
        setNum2(array[index - 1])
        if (array[index] >= array[index - 1]) {
            newColorArray[index] = 3;
            setColorsArray(newColorArray);
            await asyncSetTimeout({
                timeout: 10 * visualizationSpeed
            });
            setI(index);
            setNum1(array[index])
            setNum2(array[index - 1])
            index++;
        } else {
            setI(index);
            //set something
            // setNum1(array[index])
            // setNum2(array[index-1])
            let temp = 0;
            newColorArray[index] = 1;
            newColorArray[index - 1] = 2;
            setColorsArray(newColorArray);
            await asyncSetTimeout({
                timeout: 10 * visualizationSpeed
            });
            //swapping
            temp = array[index];
            array[index] = array[index - 1];
            array[index - 1] = temp;
            swaps++;
            setswaps(swaps);
            await asyncSetTimeout({
                timeout: 10 * visualizationSpeed
            });
            index--;
            let var1 = JSON.parse(JSON.stringify({
                array:array,
                fileName:"internal_array_output.txt",
                cmp:comparisons,
                swap:swaps,
                check:check++,
            }))
            await ARRAY_FINAL_OUTPUT(var1)
        }
        setArray(array)
    }
    for (let i = 0; i < len; i++) {
        let newColorsArray = new Array(len).fill(0);
        newColorsArray[i] = 3;
        setColorsArray(newColorsArray);
        await asyncSetTimeout({
            timeout: 10 * visualizationSpeed
        });
    }
    let newColorsArray = new Array(len).fill(0);
    setColorsArray(newColorsArray);
    var t2 = performance.now();
    setTimeRequired(t2-t1);
}

export default Genomesort