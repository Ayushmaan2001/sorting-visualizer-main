import asyncSetTimeout from '../helpers/asyncSetTimeout';
import ARRAY_FINAL_OUTPUT from './arrayFinalOutput';

const Combsort = async ({
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
  setswaps
} = {}) => {
  comparisons=0;
  swaps=0
  function getNextGap(gap) {
    gap = parseInt((gap * 10) / 13, 10);
    if (gap < 1)
      return 1;
    return gap;
  }
  let len = array.length;

  let gap = len;
  setI(gap)
  let swapped = true;

  while (gap !== 1 || swapped === true) {
    gap = getNextGap(gap);
    swapped = false;
    for (let i = 0; i < len - gap; i++) {
      let newColorsArray = new Array(len).fill(0);
      newColorsArray[i] = 1;
      newColorsArray[i + gap] = 2;
      setColorsArray(newColorsArray);
      comparisons++;
      setComparisons(comparisons);
      await asyncSetTimeout({
        timeout: 10 * visualizationSpeed
      });
      if (array[i] > array[i + gap]) {
        await asyncSetTimeout({
          timeout: 10 * visualizationSpeed
        });
        let temp = array[i];
        setNum1(array[i]);
        setNum2(array[i + gap]);
        array[i] = array[i + gap];
        array[i + gap] = temp;
        swaps++;
        setswaps(swaps)
        swapped = true;
        setArray(array);
        await asyncSetTimeout({
          timeout: 10 * visualizationSpeed
        });
      }
      let var1 = JSON.parse(JSON.stringify({
        array:array,
        fileName:"internal_array_output.txt",
        cmp:comparisons,
        swap:swaps
    }))
    await ARRAY_FINAL_OUTPUT(var1)
    }
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

export default Combsort