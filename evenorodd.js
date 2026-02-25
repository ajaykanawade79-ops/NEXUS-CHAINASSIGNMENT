const numbers = process.argv.slice(2).map(Number);

const countEvenOdd = (arr) => {
    let evenCount = 0;
    let oddCount = 0;

    arr.forEach(num => {
        num % 2 === 0 ? evenCount++ : oddCount++;
    });

    return { evenCount, oddCount };
};

console.log(countEvenOdd(numbers));