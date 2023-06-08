import asyncSetTimeout from '../helpers/asyncSetTimeout';
import ARRAY_FINAL_OUTPUT from './arrayFinalOutput';

var check = 1;
var opp = [];
async function strandSort(array,setArray,unsortedRunsArray1,unsortedRunsArray2,setunsortedRunsArray1,setunsortedRunsArray2,visualizationSpeed,setColorsArray,setNum1,setNum2,comparisons,setComparisons)
{  
    var sublist=[];
    sublist.push(array[0]);
    setNum2(sublist[0])
    setunsortedRunsArray1(sublist)
    await asyncSetTimeout({
      timeout: 10 * visualizationSpeed
    });
    array.shift();
    setNum1(array[0]);
    setArray(array);
    await asyncSetTimeout({
      timeout: 10 * visualizationSpeed
    });
    var len=array.length-1;
    var len2=sublist.length-1;

    var it =0;
     while(it<=len){
      comparisons++;
      setComparisons(comparisons)
      let newColorsArray = new Array(array.length).fill(0);
      newColorsArray[it] = 1;
        setColorsArray(newColorsArray)
        setNum1(array[it]);
        await asyncSetTimeout({
          timeout: 10 * visualizationSpeed
        });
        if (array[it] >sublist[len2]) {
          setColorsArray([])
          let sublistColorArray = new Array(len).fill(0);
          sublistColorArray[it] = 2;
          setColorsArray(sublistColorArray)
          await asyncSetTimeout({
            timeout: 10 * visualizationSpeed
          });
            sublist.push(array[it]);
            len2++; 
            array.splice(it,1);
            setunsortedRunsArray1(sublist);
            setArray(array)
            setNum2(sublist[len2]);
            await asyncSetTimeout({
              timeout: 10 * visualizationSpeed
            });
        }
        else{
            it++;
        }
        let var1 = JSON.parse(JSON.stringify({
          array:array,
          fileName:"internal_array_output.txt",
          cmp:comparisons,
          swap:0,
          check:check++,
      }))
      await ARRAY_FINAL_OUTPUT(var1)
    }
    setColorsArray([]);
   while(sublist.length>0 && unsortedRunsArray2.length>0){
        if(sublist[0]>=unsortedRunsArray2[0]){opp.push(unsortedRunsArray2.shift());}
        else{opp.push(sublist.shift());}
        setunsortedRunsArray2(unsortedRunsArray2);
        setunsortedRunsArray1(sublist);
        await asyncSetTimeout({
          timeout: 10 * visualizationSpeed
        });
    }
    if(sublist.length===0){
        opp=[...opp,...unsortedRunsArray2];
    }
    if(unsortedRunsArray2.length===0){
        opp=[...opp,...sublist];
    }
    unsortedRunsArray2=[...opp];
    setunsortedRunsArray2(unsortedRunsArray2);
    opp.length=0;
    if(array.length>0){
    strandSort(array,setArray,unsortedRunsArray1,unsortedRunsArray2,setunsortedRunsArray1,setunsortedRunsArray2,visualizationSpeed,setColorsArray,setNum1,setNum2,comparisons,setComparisons);
    }
}

const Strandsort = async ({
  array,
  setArray,
  setColorsArray,
  visualizationSpeed,
  unsortedRunsArray1,
  unsortedRunsArray2,
  setunsortedRunsArray2,
  setunsortedRunsArray1,
  setNum1,
  setNum2,
  comparisons,
  setComparisons,
  timeRequired,
  setTimeRequired
} = {}) => {
  comparisons=0;
  timeRequired = 0;
  setTimeRequired(timeRequired)
  var t1 = performance.now();
  strandSort(array,setArray,unsortedRunsArray1,unsortedRunsArray2,setunsortedRunsArray1,setunsortedRunsArray2,visualizationSpeed,setColorsArray,setNum1,setNum2,comparisons,setComparisons);
  var t2 = performance.now();
  setTimeRequired(t2-t1)
}

export default Strandsort