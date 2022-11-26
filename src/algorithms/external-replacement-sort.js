import asyncSetTimeout from "../helpers/asyncSetTimeout";
class MinHeap {
    constructor() {
        this.heap = [[-1, -1]];
    }
    size() {
        return this.heap.length - 1;
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

const externalReplacementSort = async ({
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
    let maxSize = array.length;
    let runSize = maxSize/2;
    let numOfRuns = 0;

    let InputArray = array;

    let runs = []

    function generateRuns() {
        let heap = new MinHeap();
        let extra = [];
        let j = 0;
        while (extra.length > 0 || j < InputArray.length) {
            numOfRuns++;
            let currentRun = []
            while (extra.length > 0) {
                heap.insertObj([extra[extra.length - 1], -1]);
                extra.pop();
            }
            while (j < InputArray.length && heap.size() < runSize) {
                heap.insertObj([InputArray[j++], -1]);
            }
            while (heap.size() > 0 && (heap.size() + extra.length) <= runSize) {
                let obj = heap.removeMin();
                currentRun.push(obj[0]);
                if (j < InputArray.length) {
                    let val = InputArray[j++];
                    if (val >= obj[0]) {
                        heap.insertObj([val, -1]);
                    }
                    else {
                        extra.push(val);
                    }
                }
            }
            runs.push(currentRun);
        }

    }
    generateRuns();

    let outputArray = []

    function KWayMerge() {

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
            if (curPtrs[id] < runs[id].length) {
                let val = runs[id][curPtrs[id]];
                heap.insertObj([val, id]);
                curPtrs[id]++;
            }
        }
    }
    KWayMerge();
    console.log(InputArray)

    //unsorted run 1
    let i = 0;
    for(;i<runs[0].length;i++) {
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

    //unsorted run 2
    while(!InputArray.length == 0) {
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
    for (let i = 0; i < runs[0].length; i++) {
        const idx1 = unsortedRunsArray1.indexOf(runs[0][i]);
        const idx2 = unsortedRunsArray2.indexOf(runs[0][i]);
        if (idx1 > -1) {
            let newColorsArray = new Array(unsortedRunsArray1.length).fill(0);
            newColorsArray[idx1] = 2;
            setColorsArray(unsortedRunsArray1);
            await asyncSetTimeout({ timeout: visualizationSpeed });
            unsortedRunsArray1.splice(idx1, 1);
            setunsortedRunsArray1(unsortedRunsArray1);
        }
        else {
            let newColorsArray = new Array(unsortedRunsArray2.length).fill(0);
            newColorsArray[idx2] = 2;
            setColorsArray(unsortedRunsArray2);
            await asyncSetTimeout({ timeout: visualizationSpeed });
            unsortedRunsArray2.splice(idx2, 1);
            setunsortedRunsArray1(unsortedRunsArray2);
        }
        let temp = runsArray1;
        temp.push(runs[0][i])
        setrunsArray1(temp);
        await asyncSetTimeout({ timeout: visualizationSpeed });
    }
    setColorsArray([])

    //run 2 sorted
    for (let i = 0; i < runs[1].length; i++) {
        const idx1 = unsortedRunsArray1.indexOf(runs[1][i]);
        const idx2 = unsortedRunsArray2.indexOf(runs[1][i]);
        if (idx1 > -1) {
            let newColorsArray = new Array(unsortedRunsArray1.length).fill(0);
            newColorsArray[idx1] = 2;
            setColorsArray(unsortedRunsArray1);
            await asyncSetTimeout({ timeout: visualizationSpeed });
            unsortedRunsArray1.splice(idx1, 1);
            setunsortedRunsArray1(unsortedRunsArray1);
        }
        else {
            let newColorsArray = new Array(unsortedRunsArray2.length).fill(0);
            newColorsArray[idx2] = 2;
            setColorsArray(unsortedRunsArray2);
            await asyncSetTimeout({ timeout: visualizationSpeed });
            unsortedRunsArray2.splice(idx2, 1);
            setunsortedRunsArray1(unsortedRunsArray2);
        }
        let temp = runsArray2;
        temp.push(runs[1][i])
        setrunsArray2(temp);
        await asyncSetTimeout({ timeout: visualizationSpeed });
    }
    setunsortedRunsArray2([])
    setunsortedRunsArray1([])
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
    }
    setrunsArray1([])
    setrunsArray2([])
    
    setColorsArray([])
}

export default externalReplacementSort;