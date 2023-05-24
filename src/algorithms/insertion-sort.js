import asyncSetTimeout from '../helpers/asyncSetTimeout';
import ARRAY_FINAL_OUTPUT from './arrayFinalOutput';

const insertionSort = async ({
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
  let len = array.length;
  comparisons=0;
  swaps=0;
  for (let i = 1; i < len; i++) {
    let currentValue = array[i];
    setI(i);
    let j = i - 1;

    while (j >= 0 && array[j] > currentValue) {
      comparisons++;
      setComparisons(comparisons)
      setJ(j)
      let newColorsArray = new Array(len).fill(0);
      newColorsArray[i] = 3;
      newColorsArray[j] = 2;
      newColorsArray[j + 1] = 1;
      setColorsArray(newColorsArray);
      await asyncSetTimeout({timeout: 10*visualizationSpeed});
      setNum1(array[j]);
      setNum2(array[j+1])
      array[j + 1] = array[j];
      array[j] = currentValue;
      array = array.concat();
      setArray(array);
      setNum1(array[j]);
      setNum2(array[j+1]);
      swaps++;
      setswaps(swaps);
      j--;
      let var1 = JSON.parse(JSON.stringify({
        array:array,
        fileName:"internal_array_output.txt",
        cmp:comparisons,
        swaps:swaps
    }))
    await ARRAY_FINAL_OUTPUT(var1)
      await asyncSetTimeout({timeout:10*visualizationSpeed})
    }
  }
  setColorsArray([])
};

export default insertionSort;
