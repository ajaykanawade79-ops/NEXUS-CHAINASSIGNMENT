const inputString = process.argv.slice(2).join(" ");

function removeSpaces(text) {
  return text.replace(/\s+/g, "");
}

console.log("Without Spaces:", removeSpaces(inputString));