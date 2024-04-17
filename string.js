function invertString(str) {
    let invertedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        invertedString += str[i];
    }

    return invertedString;
}

const inputString = "Revertendo a string";
const inverted = invertString(inputString);
console.log("String original:", inputString);
console.log("String invertida:", inverted);
