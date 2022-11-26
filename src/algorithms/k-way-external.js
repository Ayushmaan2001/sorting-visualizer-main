import asyncSetTimeout from "../helpers/asyncSetTimeout";
class MinHeap {
    constructor() {
        this.heap = [[0, 0]];
    }
    swap(i, j) {
        let obj = []
        obj.push(this.heap[i][0]);
        obj.push(this.heap[i][1]);

        this.heap[i][0] = this.heap[j][0];
        this.heap[i][1] = this.heap[j][1];

        this.heap[j][0] = obj[0];
        this.heap[j][1] = obj[1];

    }
    insertObj(obj) {
        this.heap.push(obj);
        let i = this.heap.length - 1;
        while (i > 1) {
            let j = Math.floor(i / 2);
            if (this.heap[i][0] < this.heap[j][0]) {
                this.swap(i, j);
                i = j;
            }
            else {
                break;
            }
        }
    }
    isEmpty() {
        if (this.heap.length === 1) {
            return true;
        }
        else {
            return false;
        }
    }
    removeMin() {
        let obj = [];
        obj.push(this.heap[1][0], this.heap[1][1]);
        this.swap(1, this.heap.length - 1);
        this.heap.pop();
        let i = 1;
        while ((i * 2) <= this.heap.length - 1) {
            let left = this.heap[i * 2][0];
            let right = (i * 2 + 1 <= this.heap.length - 1) ? this.heap[i * 2 + 1][0] : 1e9;
            let cur = this.heap[i][0];
            if (cur <= left && cur <= right) {
                break;
            }
            else if (left <= right) {
                this.swap(i, i * 2);
                i = i * 2;
            }
            else {
                this.swap(i, i * 2 + 1);
                i = i * 2 + 1;
            }
        }
        return obj;
    }
};
let runs = []

const k_way_external = async ({
    array,
    setArray,
    setColorsArray,
    visualizationSpeed,
    setrunsArray1,
    setrunsArray2,
    runsArray1,
    runsArray2,
    unsortedRunsArray2,
    unsortedRunsArray1,
    setunsortedRunsArray2,
    setunsortedRunsArray1
} = {}) => {
    let InputArray = array;
    let maxSize = array.length;
    let runSize = maxSize / 2;
    let numOfRuns = 2;
    function Merge(currentRun, low, mid, high) {
        let arr = [];
        let i = low;
        let j = mid;
        while (i < mid || j < high) {
            if (j === high || (i < mid && currentRun[i] <= currentRun[j])) {
                arr.push(currentRun[i++]);
            }
            else {
                arr.push(currentRun[j++]);
            }
        }
        for (let k = 0, i = low; i < high; i++, k++) {
            currentRun[i] = arr[k];
        }
    }
    function MergeSort(currentRun, low, high) {
        if (high - low === 1) {
            return;
        }
        let mid = Math.floor((low + high) / 2);
        MergeSort(currentRun, low, mid);
        MergeSort(currentRun, mid, high);
        Merge(currentRun, low, mid, high);
    }
    function generateRuns() {
        let j = 0;
        for (let i = 0; i < numOfRuns; i++) {
            let currentRun = []
            for (; j < (i + 1) * runSize; j++) {
                currentRun.push(InputArray[j]);
            }
            MergeSort(currentRun, 0, runSize);
            runs.push(currentRun);
        }

    }
    generateRuns();
    let outputArray = []
    async function KWayMerge() {

        let heap = new MinHeap();
        let curPtrs = [];
        for (let i = 0; i < numOfRuns; i++) {
            curPtrs.push(1);
            heap.insertObj([runs[i][0], i]);
        }
        for (let i = 0; i < maxSize; i++) {
            let obj = heap.removeMin();
            let value = obj[0];
            let id = obj[1];
            outputArray.push(value);
            if (curPtrs[id] < runSize) {
                let val = runs[id][curPtrs[id]];
                heap.insertObj([val, id]);
                curPtrs[id]++;
            }
        }
    }
    KWayMerge();
    let n = runs.length;

    //run 1 unsorted
    let l = InputArray.length;
    let i = 0;
    while (i < l / 2) {
        let temp = unsortedRunsArray1;
        let newColorsArray = new Array(InputArray.length).fill(0);
        newColorsArray[i] = 2;
        setColorsArray(newColorsArray);
        const idx = InputArray.shift()
        temp.push(idx);
        setunsortedRunsArray1(temp);
        setArray(InputArray);
        await asyncSetTimeout({ timeout: visualizationSpeed });

        i++;
    }
    setColorsArray([])
    await asyncSetTimeout({timeout:visualizationSpeed})

    //run 2 unsorted
    i = l/2
    while (i < l) {
        let temp = unsortedRunsArray2;
        let newColorsArray = new Array(InputArray.length).fill(0);
        newColorsArray[i] = 2;
        setColorsArray(newColorsArray);
        const idx = InputArray.shift()
        temp.push(idx);
        setunsortedRunsArray2(temp);
        setArray(InputArray);
        await asyncSetTimeout({ timeout: visualizationSpeed });
        i++;
    }

    //run 1 sorted
    for(let i=0;i<runs[n-1].length;i++){
        const idx1 = unsortedRunsArray1.indexOf(runs[n-1][i]);
        const idx2 = unsortedRunsArray2.indexOf(runs[n-1][i]);
        if(idx1 > -1){
            let newColorsArray = new Array(unsortedRunsArray1.length).fill(0);
            newColorsArray[idx1] = 2;
            setColorsArray(unsortedRunsArray1);
            await asyncSetTimeout({timeout:visualizationSpeed});
            unsortedRunsArray1.splice(idx1,1);
            setunsortedRunsArray1(unsortedRunsArray1);
        }
        else{
            let newColorsArray = new Array(unsortedRunsArray2.length).fill(0);
            newColorsArray[idx2] = 2;
            setColorsArray(unsortedRunsArray2);
            await asyncSetTimeout({ timeout: visualizationSpeed });
            unsortedRunsArray2.splice(idx2, 1);
            setunsortedRunsArray1(unsortedRunsArray2);
        }
        let temp = runsArray1;
        temp.push(runs[n-1][i])
        setrunsArray1(temp);
        await asyncSetTimeout({timeout:visualizationSpeed});
    }
    setColorsArray([])
    await asyncSetTimeout({timeout:visualizationSpeed});
    setunsortedRunsArray1([])

    //run 2 sorted
    for (let i = 0; i < runs[n - 1].length; i++) {
        const idx1 = unsortedRunsArray1.indexOf(runs[n - 2][i]);
        const idx2 = unsortedRunsArray2.indexOf(runs[n - 2][i]);
        if (idx1 > -1) {
            let newColorsArray = new Array(unsortedRunsArray1.length).fill(0);
            newColorsArray[idx1] = 2;
            setColorsArray(unsortedRunsArray1);
            await asyncSetTimeout({ timeout: visualizationSpeed });
            unsortedRunsArray1.splice(idx1, 1);
            setunsortedRunsArray1(unsortedRunsArray1);
        }
        else{
            let newColorsArray = new Array(unsortedRunsArray2.length).fill(0);
            newColorsArray[idx2] = 2;
            setColorsArray(unsortedRunsArray2);
            await asyncSetTimeout({ timeout: visualizationSpeed });
            unsortedRunsArray2.splice(idx2, 1);
            setunsortedRunsArray1(unsortedRunsArray2);
        }
        let temp = runsArray2;
        temp.push(runs[n - 2][i])
        setrunsArray2(temp);
        await asyncSetTimeout({ timeout: visualizationSpeed });
    }
    setColorsArray([])
    await asyncSetTimeout({ timeout: visualizationSpeed });
    setunsortedRunsArray2([])

    //output array
    for (let i = 0; i < outputArray.length; i++) {
        let find = false;
        const t1 = runsArray1.indexOf(outputArray[i]);
        if (t1 > -1) {
            let newColorsArray = new Array(t1).fill(0);
            newColorsArray[t1] = 3;
            setColorsArray(newColorsArray);
            await asyncSetTimeout({ timeout: visualizationSpeed })
            runsArray1.splice(t1, 1);
            find = true;
        }
        if (find === false) {
            const t2 = runsArray2.indexOf(outputArray[i]);
            if (t2 > -1) {
                let newColorsArray = new Array(t2).fill(0);
                newColorsArray[t1] = 3;
                setColorsArray(newColorsArray);
                await asyncSetTimeout({ timeout: visualizationSpeed })
                runsArray2.splice(t2, 1);
                find = true;
            }
        }
        InputArray.push(outputArray[i]);
        setArray(InputArray);
        await asyncSetTimeout({ timeout: visualizationSpeed });
    }
}

const KWAYEXTSORT = { k_way_external, runs };
export default KWAYEXTSORT;