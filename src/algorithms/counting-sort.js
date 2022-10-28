import asyncSetTimeout from "../helpers/asyncSetTimeout";

const countingSort = async ({
    array,
    setArray,
    setColorsArray,
    visualizationSpeed,
} = {}) => {
    let len = array.length;
    const map = {};
    for (let i = 0; i < array.length; i++) {
        let newColorsArray = new Array(len).fill(0);
        newColorsArray[i] = 1;
        setColorsArray(newColorsArray);
        await asyncSetTimeout({ timeout: visualizationSpeed });
        if (map[array[i]]) {
            map[array[i]]++;
        }
        else {
            map[array[i]] = 1;
        }
    }
    let k = 0;
    for (const [key, value] of Object.entries(map)) {
        let newColorsArray = new Array(len).fill(0);
        let val = value, freq = key;
        for (let j = 0; j < val; j++) {
            newColorsArray[k] = 2;
            array[k++] = Number(freq);
        }
        setColorsArray(newColorsArray);
        setArray(array);
        await asyncSetTimeout({ timeout: visualizationSpeed });
    }
    setColorsArray([])
};

export default countingSort;