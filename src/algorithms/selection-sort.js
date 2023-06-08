import asyncSetTimeout from '../helpers/asyncSetTimeout';
import ARRAY_FINAL_OUTPUT from './arrayFinalOutput';

var check = 1;
const selectionSort = async ({
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
  comparisons=0;
  swaps=0;
  timeRequired = 0;
  setTimeRequired(timeRequired)
  var t1 = performance.now();
  array = array.concat();
  let len = array.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    setI(i);
    setNum1(array[i]);

    for (let j = i + 1; j < len; j++) {
      setJ(j);
      let newColorsArray = new Array(len).fill(0);
      newColorsArray[i] = 3;
      newColorsArray[minIndex] = 1;
      newColorsArray[j] = 2;
      setColorsArray(newColorsArray);
      await asyncSetTimeout({
        timeout: 10 * visualizationSpeed
      });
      comparisons++;
      setComparisons(comparisons)
      if (array[minIndex] > array[j]) {
        minIndex = j;
        setNum2(array[minIndex]);
      }
      await asyncSetTimeout({
        timeout: 10 * visualizationSpeed
      })
    }
    await asyncSetTimeout({
      timeout: 10 * visualizationSpeed
    })
    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
    swaps++;
    setswaps(swaps);
    setArray(array);
    let var1 = JSON.parse(JSON.stringify({
      array:array,
      fileName:"internal_array_output.txt",
      cmp:comparisons,
      swap:swaps,
      check:check++,
  }))
  await ARRAY_FINAL_OUTPUT(var1)
  }
  var t2 = performance.now();
  setTimeRequired(t2-t1)
  setColorsArray([])
};

export default selectionSort;