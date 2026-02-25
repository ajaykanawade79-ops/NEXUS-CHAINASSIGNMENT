const numbers = process.argv.slice(2).map(Number);

const sortAscending = (arr) => {
    return [...arr].sort((a, b) => a - b);
};

console.log(sortAscending(numbers));