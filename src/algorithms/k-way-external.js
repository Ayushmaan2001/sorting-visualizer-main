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


const k_way_external = async({
    array,
    setArray,
    setColorsArray,
    visualizationSpeed
} = {}) => {
    let InputArray = array;
    let maxSize = array.length;
    let runSize = 2;
    let numOfRuns = maxSize/2;

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

    let runs = []

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
    let k=0;
    for(let i=0;i<InputArray.length;i++){
        let newColorsArray = new Array(maxSize).fill(0);
        newColorsArray[i] = 3;
        setColorsArray(newColorsArray);
        await asyncSetTimeout({timeout:visualizationSpeed})
        InputArray[i] = outputArray[k++];
        setArray(InputArray)
    }
    setColorsArray([])
}

export default k_way_external;