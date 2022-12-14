import asyncSetTimeout from "../helpers/asyncSetTimeout";

const radixSort = async ({
    array,
    setArray,
    setColorsArray,
    visualizationSpeed
} = {}) => {
    let n = array.length;
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
        }
        return num;
    }
    let res = radixsort(array);
    for(let i=0;i<test.length;i++){
        await asyncSetTimeout({timeout:200});
        setArray(test[i]);
        await asyncSetTimeout({timeout:visualizationSpeed*10});
    }
    await asyncSetTimeout({timeout:visualizationSpeed*10});
    setArray(res);
}

export default radixSort;