import asyncSetTimeout from '../helpers/asyncSetTimeout';

const Combsort = async ({
  array,
  setArray,
  setColorsArray,
  visualizationSpeed,
  setI,
  setNum1,
  setNum2
} = {}) => {
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
      if (array[i] > array[i + gap]) {
        let newColorsArray = new Array(len).fill(0);
        newColorsArray[i] = 1;
        newColorsArray[i + gap] = 2;
        setColorsArray(newColorsArray);
        await asyncSetTimeout({
          timeout: 10 * visualizationSpeed
        });
        let temp = array[i];
        setNum1(array[i]);
        setNum2(array[i + gap]);
        array[i] = array[i + gap];
        array[i + gap] = temp;
        swapped = true;
        setArray(array);
        await asyncSetTimeout({
          timeout: 10 * visualizationSpeed
        });
      }
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