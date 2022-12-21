import asyncSetTimeout from '../helpers/asyncSetTimeout';

const selectionSort = async ({
  array,
  setArray,
  setColorsArray,
  visualizationSpeed,
  setI,
  setJ,
  setNum1,
  setNum2
} = {}) => {
  array = array.concat();

  let len = array.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    setI(i);
    setNum1(array[i]);

    for (let j = i + 1; j < len; j++) {
      setJ(j);
      const newColorsArray = new Array(len).fill(0);
      newColorsArray[i] = 3;
      newColorsArray[minIndex] = 1;
      newColorsArray[j] = 2;
      setColorsArray(newColorsArray);
      await asyncSetTimeout({timeout: visualizationSpeed});
      if (array[minIndex] > array[j]) {
        minIndex = j;
        setNum2(array[minIndex]);
      }
      await asyncSetTimeout({timeout:400})
    }
    await asyncSetTimeout({timeout:3000})
    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
    setArray(array);
  }
  setColorsArray([])
};

export default selectionSort;
