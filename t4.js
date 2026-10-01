const average = (a, b) => {
    const ava = (a + b) / 2;
    return ava;
};
const square = (x) => {
    const sq = x ** 2;
    return sq;
};
const cube = (x) => {
    const cu = x ** 3;
    return cu;
};
const calculate = () => {
    const arr = [];
    for (let i = 0; i <= 9; i++) {
        const x = average(square(i), cube(i));
        arr.push(x);
    }
    return arr;
};

console.log(calculate());