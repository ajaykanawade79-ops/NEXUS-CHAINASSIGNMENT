const numbers = process.argv.slice(2);

const removeDuplicates = (arr) => {
    return [...new Set(arr)];
};

console.log(removeDuplicates(numbers));