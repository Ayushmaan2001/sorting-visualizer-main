import asyncSetTimeout from "../helpers/asyncSetTimeout";

const countingSort = async ({
    array,
    setArray,
    setColorsArray,
    visualizationSpeed,
    setI,
  setJ,
  setNum1,
  setNum2
} = {}) => {
    let len = array.length;
    const map = {};
    for (let i = 0; i < array.length; i++) {
        setI(i);
        let newColorsArray = new Array(len).fill(0);
        newColorsArray[i] = 2;
        setColorsArray(newColorsArray);
        await asyncSetTimeout({ timeout: visualizationSpeed });
        if (map[array[i]]) {
            map[array[i]]++;
        }
        else {
            map[array[i]] = 1;
        }
        await asyncSetTimeout({timeout:visualizationSpeed})
    }
    let k = 0;
    for (const [key, value] of Object.entries(map)) {
        setI(k);
        let newColorsArray = new Array(len).fill(0);
        let val = value, freq = key;
        setNum1(freq);
        for (let j = 0; j < val; j++) {
            newColorsArray[k-1] = 1;
            newColorsArray[k] = 3;
            array[k++] = Number(freq);
        }
        setColorsArray(newColorsArray);
        setArray(array);
        await asyncSetTimeout({timeout:3000})
    }
    setColorsArray([])
};

export default countingSort;