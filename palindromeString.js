const input = process.argv[2];

const isPalindrome = (text) => {
    const cleanedText = text.toLowerCase();
    const reversedText = [...cleanedText].reverse().join("");
    return cleanedText === reversedText;
};

console.log(isPalindrome(input) ? "Palindrome" : "Not Palindrome");