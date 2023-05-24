import asyncSetTimeout from '../helpers/asyncSetTimeout';

async function stoogesort(arr, l, h, setArray, setColorsArray, visualizationSpeed, comparisons, setComparisons) {
  let newColorsArray = new Array(arr.length).fill(0);
  newColorsArray[l] = 2;
  newColorsArray[h] = 3;
  setColorsArray(newColorsArray);
  await asyncSetTimeout({
    timeout: 10 * visualizationSpeed
  });
  // comparisons++;
  // setComparisons(comparisons)
  if (l >= h)
    return;
  if (arr[l] > arr[h]) {
    let t = arr[l];
    arr[l] = arr[h];
    arr[h] = t;
    setArray(arr)
  }
  console.log(arr)
  if (h - l + 1 > 2) {
    let t = Math.floor((h - l + 1) / 3);
    stoogesort(arr, l, h - t, setArray, setColorsArray, visualizationSpeed, comparisons, setComparisons);
    stoogesort(arr, l + t, h, setArray, setColorsArray, visualizationSpeed, comparisons, setComparisons);
    stoogesort(arr, l, h - t, setArray, setColorsArray, visualizationSpeed, comparisons, setComparisons);
  }
  setArray(arr)
}


const Stoogesort = async ({
  array,
  setArray,
  setColorsArray,
  visualizationSpeed,
  comparisons,
  setComparisons,
  timeRequired,
  setTimeRequired
} = {}) => {
  comparisons=0
  timeRequired = 0;
  setTimeRequired(timeRequired)
  var t1 = performance.now();
  stoogesort(array, 0, array.length, setArray, setColorsArray, visualizationSpeed,comparisons,setComparisons);
  var t2 = performance.now();
  setTimeRequired(t2-t1)
}

export default Stoogesort