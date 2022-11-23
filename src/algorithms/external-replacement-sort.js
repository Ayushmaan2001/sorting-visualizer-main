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
    visualizationSpeed
} = {}) => {
    let maxSize = array.length;
    let runSize = maxSize;
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
    let k = 0;
    for (let i = 0; i < InputArray.length; i++) {
        let newColorsArray = new Array(maxSize).fill(0);
        newColorsArray[i] = 3;
        setColorsArray(newColorsArray);
        await asyncSetTimeout({ timeout: visualizationSpeed })
        InputArray[i] = outputArray[k++];
        setArray(InputArray)
    }
    setColorsArray([])
}

export default externalReplacementSort;