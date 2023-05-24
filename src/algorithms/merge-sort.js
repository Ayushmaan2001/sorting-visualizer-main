import asyncSetTimeout from '../helpers/asyncSetTimeout';

let arr = [];
let cmp = 0;
const mergeSort = async (
  l,
  r,
  setArray,
  setColorsArray,
  visualizationSpeed,
  comparisons,
  setComparisons,
  swaps,
  setswaps
) => {
  if (l >= r) return;

  let mid = Math.floor((l + r) / 2);
  await mergeSort(l, mid, setArray, setColorsArray, visualizationSpeed, comparisons,setComparisons,swaps,setswaps);
  await mergeSort(mid + 1, r, setArray, setColorsArray, visualizationSpeed, comparisons,setComparisons,swaps,setswaps);
  let i = l;
  let j = mid + 1;
  let it = 0;
  let tempArr = new Array(r - l + 1);
  let newColorsArray = new Array(arr.length).fill(0);

  while (i <= mid && j <= r) {
    newColorsArray = new Array(arr.length).fill(0);
    newColorsArray[i] = 2;
    newColorsArray[j] = 2;
    setColorsArray(newColorsArray.concat());
    await asyncSetTimeout({
      timeout: 10 * visualizationSpeed
    });
    cmp++;
    setComparisons(cmp)
    if (arr[i] > arr[j]) {
      tempArr[it] = arr[j];
      j++;
      swaps++;
      setswaps(swaps);
    } else {
      tempArr[it] = arr[i];
      i++;
    }
    it++;
  }

  while (i <= mid) {
    newColorsArray = new Array(arr.length).fill(0);
    newColorsArray[i] = 2;
    newColorsArray[j] = 2;
    setColorsArray(newColorsArray.concat());
    await asyncSetTimeout({
      timeout: 10 * visualizationSpeed
    });

    tempArr[it] = arr[i];
    it++;
    i++;
  }

  while (j <= r) {
    newColorsArray = new Array(arr.length).fill(0);
    newColorsArray[i] = 2;
    newColorsArray[j] = 2;
    setColorsArray(newColorsArray.concat());
    await asyncSetTimeout({
      timeout: 10 * visualizationSpeed
    });

    tempArr[it] = arr[j];
    it++;
    j++;
  }

  it = 0;
  for (let k = l; k <= r; k++, it++) {
    arr[k] = tempArr[it];
    newColorsArray = new Array(arr.length).fill(0);
    newColorsArray[k] = 1;
    newColorsArray[i - 1] = 2;
    newColorsArray[j - 1] = 2;
    setArray(arr.concat());
    setColorsArray(newColorsArray.concat());
    await asyncSetTimeout({
      timeout: 10 * visualizationSpeed
    });
  }
};

const mergeSortWrapper = async ({
  array,
  leftIndex,
  rightIndex,
  setArray,
  setColorsArray,
  visualizationSpeed,
  comparisons,
  setComparisons,
  swaps,
  setswaps,
  timeRequired,
  setTimeRequired
}) => {
  arr = array.concat();
  comparisons=0;
  swaps=0;
  timeRequired = 0;
  setTimeRequired(timeRequired)
  var t1 = performance.now();
  await mergeSort(
    leftIndex,
    rightIndex,
    setArray,
    setColorsArray,
    visualizationSpeed,
    comparisons,
    setComparisons,
    swaps,
  setswaps
  );
  var t2 = performance.now();
  setTimeRequired(t2-t1)
  setColorsArray([])
};

export default mergeSortWrapper;