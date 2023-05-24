import asyncSetTimeout from "../helpers/asyncSetTimeout";

const countingSort = async ({
    array,
    setArray,
    setColorsArray,
    visualizationSpeed,
    setI,
    setJ,
    setNum1,
    setNum2,
    timeRequired,
  setTimeRequired
} = {}) => {
    timeRequired = 0;
    setTimeRequired(timeRequired)
    var t1 = performance.now();
    let len = array.length;
    const map = {};
    for (let i = 0; i < array.length; i++) {
        setI(i);
        let newColorsArray = new Array(len).fill(0);
        newColorsArray[i] = 2;
        setColorsArray(newColorsArray);
        await asyncSetTimeout({
            timeout: 10 * visualizationSpeed
        });
        if (map[array[i]]) {
            map[array[i]]++;
        } else {
            map[array[i]] = 1;
        }
        await asyncSetTimeout({
            timeout: 10 * visualizationSpeed
        })
    }
    let k = 0;
    for (const [key, value] of Object.entries(map)) {
        setI(k);
        let newColorsArray = new Array(len).fill(0);
        let val = value,
            freq = key;
        setNum1(freq);
        for (let j = 0; j < val; j++) {
            newColorsArray[k - 1] = 1;
            newColorsArray[k] = 3;
            array[k++] = Number(freq);
        }
        setColorsArray(newColorsArray);
        setArray(array);
        await asyncSetTimeout({
            timeout: 10 * visualizationSpeed
        })
    }
    var t2 = performance.now();
    setTimeRequired(t2-t1)
    setColorsArray([])
};

export default countingSort;