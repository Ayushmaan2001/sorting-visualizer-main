import asyncSetTimeout from '../helpers/asyncSetTimeout';

async function stoogesort(arr, l, h,setArray,setColorsArray,visualizationSpeed)
    {
      let newColorsArray = new Array(arr.length).fill(0);
            newColorsArray[l] = 2;
            newColorsArray[h] = 3;
            setColorsArray(newColorsArray);
            await asyncSetTimeout({
              timeout: 10 * visualizationSpeed
            });
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
            let t = Math.floor((h - l + 1)/3);
            stoogesort(arr, l, h - t,setArray,setColorsArray,visualizationSpeed);
            stoogesort(arr, l + t, h,setArray,setColorsArray,visualizationSpeed);
            stoogesort(arr, l, h - t,setArray,setColorsArray,visualizationSpeed);
        }
        setArray(arr)
        return;
    }


const Stoogesort = async({
  array,
  setArray,
  setColorsArray,
  visualizationSpeed
} = {}) => {
stoogesort(array,0,array.length,setArray,setColorsArray,visualizationSpeed);
console.log(array)
} 

export default Stoogesort