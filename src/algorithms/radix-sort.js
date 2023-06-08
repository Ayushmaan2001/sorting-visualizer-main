import asyncSetTimeout from "../helpers/asyncSetTimeout";

const radixSort = async ({
    array,
    setArray,
    visualizationSpeed,
    timeRequired,
  setTimeRequired
} = {}) => {
    timeRequired = 0;
    setTimeRequired(timeRequired)
    var t1 = performance.now();
    let test = [];

    function getDigit(num, i) {
        return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
    }
    function digitCount(num) {
        if (num === 0) return 1;
        return Math.floor(Math.log10(Math.abs(num))) + 1;
    }
    function mostDigit(num) {
        let maxdigist = 0;
        for (let i = 0; i < num.length; i++) {
            maxdigist = Math.max(maxdigist, digitCount(num[i]));
        }
        return maxdigist;
    }
    function radixsort(num) {
        let maxDigitCount = mostDigit(num);
        for (let k = 0; k < maxDigitCount; k++) {
            let digitBuckets = Array.from({
                length: 10
            }, () => []);
            for (let i = 0; i < num.length; i++) {
                let digit = getDigit(num[i], k);
                digitBuckets[digit].push(num[i]);
            }
            // reforming array
            test.push(num);
            num = [].concat(...digitBuckets);
            console.log(num);
        }
        return num;
    }
    let res = radixsort(array);
    //change here to correct the visualization
    await asyncSetTimeout({timeout:10*visualizationSpeed})
    for(let i=0;i<test.length;i++){
        await asyncSetTimeout({timeout:200});
        setArray(test[i]);
        await asyncSetTimeout({timeout:visualizationSpeed*100});
    }
    await asyncSetTimeout({timeout:visualizationSpeed*10});
    setArray(res);
    var t2 = performance.now();
    setTimeRequired(t2-t1)
}

export default radixSort;