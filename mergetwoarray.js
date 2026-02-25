const separatorIndex = process.argv.indexOf("--");

const firstArray = process.argv.slice(2, separatorIndex);
const secondArray = process.argv.slice(separatorIndex + 1);

const mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
};

console.log(mergeArrays(firstArray, secondArray));