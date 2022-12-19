import asyncSetTimeout from '../helpers/asyncSetTimeout';

let arr = [];

const partition = async (
  leftIndex,
  rightIndex,
  setArray,
  setColorsArray,
  visualizationSpeed
) => {
  let i = leftIndex - 1;
  let pivot = arr[rightIndex];
  let newColorsArray = new Array(arr.length).fill(0);
  newColorsArray[rightIndex] = 3;
  setColorsArray(newColorsArray);
  await asyncSetTimeout({timeout: visualizationSpeed});
  await asyncSetTimeout({timeout:3000})

  for (let j = leftIndex; j < rightIndex; j++) {
    newColorsArray = new Array(arr.length).fill(0);
    newColorsArray[i] = 2;
    newColorsArray[j] = 2;
    newColorsArray[rightIndex] = 3;
    setColorsArray(newColorsArray.concat());
    await asyncSetTimeout({timeout: visualizationSpeed});
    await asyncSetTimeout({timeout:800})
    if (arr[j] <= pivot) {
      i = i + 1;

      newColorsArray = new Array(arr.length).fill(0);
      newColorsArray[i] = 1;
      newColorsArray[j] = 2;
      newColorsArray[rightIndex] = 3;
      setColorsArray(newColorsArray.concat());
      // await asyncSetTimeout({timeout: visualizationSpeed * 1.5});
      await asyncSetTimeout({timeout:800})

      await asyncSetTimeout({timeout:1200})
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      setArray(arr.concat());
      await asyncSetTimeout({timeout:1200})
    }
  }

  let temp = arr[i + 1];
  arr[i + 1] = arr[rightIndex];
  arr[rightIndex] = temp;
  setArray(arr.concat());
  setColorsArray(new Array(arr.length).fill(0));
  await asyncSetTimeout({timeout: visualizationSpeed});
  await asyncSetTimeout({timeout:800})
  return i + 1;
};

const quickSort = async ({
  leftIndex,
  rightIndex,
  setArray,
  setColorsArray,
  visualizationSpeed,
} = {}) => {
  if (leftIndex < rightIndex) {
    let index = await partition(
      leftIndex,
      rightIndex,
      setArray,
      setColorsArray,
      visualizationSpeed
    );
    await quickSort({
      leftIndex: leftIndex,
      rightIndex: index - 1,
      setArray: setArray,
      setColorsArray: setColorsArray,
      visualizationSpeed: visualizationSpeed,
    });
    await quickSort({
      leftIndex: index + 1,
      rightIndex: rightIndex,
      setArray: setArray,
      setColorsArray: setColorsArray,
      visualizationSpeed: visualizationSpeed,
    });
  }
};

const quickSortLWrapper = async ({
  array,
  leftIndex,
  rightIndex,
  setArray,
  setColorsArray,
  visualizationSpeed,
} = {}) => {
  arr = [];
  arr = array.concat();
  await quickSort({
    leftIndex: leftIndex,
    rightIndex: rightIndex,
    setArray: setArray,
    setColorsArray: setColorsArray,
    visualizationSpeed: visualizationSpeed,
  });
  setColorsArray([])
};
export default quickSortLWrapper;
