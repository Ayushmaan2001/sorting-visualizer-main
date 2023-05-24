import asyncSetTimeout from '../helpers/asyncSetTimeout';
import ARRAY_FINAL_OUTPUT from './arrayFinalOutput';

const bubbleSort = async ({
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
  setswaps
} = {}) => {
  comparisons=0;
  swaps=0;
  let len = array.length;
  for (let i = 0; i < len - 1; i++) {
    setI(i);
    for (let j = 0; j < len - 1 - i; j++) {
      setJ(j);
      let newColorsArray = new Array(len).fill(0);
      newColorsArray[len - 1 - i] = 3;
      newColorsArray[j] = 1;
      newColorsArray[j + 1] = 2;
      setColorsArray(newColorsArray);
      await asyncSetTimeout({
        timeout: 10 * visualizationSpeed
      });
      setNum1(array[j]);
      setNum2(array[j + 1]);
      comparisons++;
      setComparisons(comparisons)
      if (array[j + 1] < array[j]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        swaps++;
        setswaps(swaps)
        setArray(array);
      }
      await asyncSetTimeout({
        timeout: 10 * visualizationSpeed
      })
      let var1 = JSON.parse(JSON.stringify({
        array:array,
        fileName:"internal_array_output.txt",
        cmp:comparisons,
        swap:swaps
    }))
    await ARRAY_FINAL_OUTPUT(var1)
    }
  }
  setColorsArray([])
};

export default bubbleSort;