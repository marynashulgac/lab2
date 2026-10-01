const start = 15;
const end = 30;
const range = (start, end) => {
    const arr = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
};

console.log(range(start, end));