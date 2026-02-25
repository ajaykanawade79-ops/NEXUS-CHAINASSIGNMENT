const numbers = process.argv.slice(2).map(Number);

const findMissingNumber = (arr) => {
    const n = arr.length + 1;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
};

console.log(findMissingNumber(numbers));