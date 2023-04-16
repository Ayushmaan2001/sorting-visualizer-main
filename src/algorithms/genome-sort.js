import asyncSetTimeout from '../helpers/asyncSetTimeout';

const Genomesort = async ({
    array,
    setArray,
    setColorsArray,
    visualizationSpeed,
    setI,
    setNum1,
    setNum2,
    comparisons,
    setComparisons
} = {}) => {
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
            temp = array[index];
            array[index] = array[index - 1];
            array[index - 1] = temp;
            await asyncSetTimeout({
                timeout: 10 * visualizationSpeed
            });

            index--;
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
}

export default Genomesort