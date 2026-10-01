const start = 15;
const end = 30;
const rangeOdd = (start, end) => {
    const arr = [];
    for (let i = start; i <= end; i++) {
        if (i % 2 !== 0) {
            arr.push(i);
        }
    }
    return arr;
};

console.log(rangeOdd(start, end));