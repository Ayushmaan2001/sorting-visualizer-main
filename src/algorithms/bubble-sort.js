import asyncSetTimeout from '../helpers/asyncSetTimeout';

const bubbleSort = async ({
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

  for (let i = 0; i < len - 1; i++) {
    setI(i);
    for (let j = 0; j < len - 1 - i; j++) {
      setJ(j);
      let newColorsArray = new Array(len).fill(0);
      newColorsArray[len - 1 - i] = 3;
      newColorsArray[j] = 1;
      newColorsArray[j + 1] = 2;
      setColorsArray(newColorsArray);
      await asyncSetTimeout({timeout: 10*visualizationSpeed});
      setNum1(array[j]);;
      setNum2(array[j + 1]);
      if (array[j + 1] < array[j]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        setArray(array);
      }
      await asyncSetTimeout({timeout:10*visualizationSpeed})
    }
  }
  setColorsArray([])
};

export default bubbleSort;
