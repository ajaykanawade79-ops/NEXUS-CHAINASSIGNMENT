const inputArray = process.argv.slice(2);

const getFrequency = (arr) => {
    const frequencyMap = {};

    arr.forEach(item => {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
    });

    return frequencyMap;
};

console.log(getFrequency(inputArray));