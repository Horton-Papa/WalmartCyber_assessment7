/* * * * * * * * * * * * *  
 *      Sum To Zero      *
 * * * * * * * * * * * * */

// Write a function that takes in an array of numbers. 
// The function should return True if any two numbers 
// in list sum to 0, and false otherwise.

// strategy:
// take input array and check each element if that number is negated anywhere else. 

const addToZero = (array) => {
    const hasNegation = array.some((element, index) => {
        // subset the array from the current element in the iteration and return if includes() condition is true
        return array
            .slice(index + 1)
            // check if current element has negation
            .includes(-element);         
    })

    return hasNegation;
}

// test
console.log(addToZero([]));
console.log(addToZero([1,-1]));
console.log(addToZero([1, 2,3]));
console.log(addToZero([1, 2, 3,-2]));

/* * * * * * * * * * * * *  
 *   Unique Characters   *
 * * * * * * * * * * * * */

// Write a function that takes in a single word, as a string.It should return True 
// if that word contains only unique characters.Return False otherwise.

// strategy:
// similar apporach to sum to zero,
// either use Set data structure, or utilize some() method
// Set data tructure might be more beneficial for practice as some() is already implemented from previouszs 
// split the word into a charcter array, check to see if any of the lletters repeat

const hasUniqueChars = (word) => {
    // nnormalize the character input
    const normalWord = word.toLowerCase()
    const charArray = normalWord.split('');

    // create set to get the unique characters
    const charSet = new Set(charArray);

    if (charArray.length === charSet.size) {
        return true;
    } else {
        return false;
    }
}


console.log(hasUniqueChars('text'));
console.log(hasUniqueChars('tex'));
console.log(hasUniqueChars('Monday'));
console.log(hasUniqueChars('moonday'));
console.log(hasUniqueChars('moOnday'));

/* * * * * * * * * * * * *  
 *      Pangram Sen      *
 * * * * * * * * * * * * */

// Pangram := sentence that contains all the letters of the English alphabet
// Create a function to determine if the input is a pangram

// strategy:
// create a variable for the alphabet (can be an array or a string)
// determine if the letter in the alphabet is included, if not, can exit and false

const isPangram = (string) => {
    // normalize string
    const normalString = string.toLowerCase();

    // store alphabet
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    // check if letter is part of the sentence, exit loop at first non occurence
    for (let letter of alphabet) {
        if (!normalString.includes(letter)){
            return false;
        }
    }

    // return true if all letters are present, after loop finishes
    return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isPangram("I like cats, but not mice"));
console.log(isPangram('The five boxing wizards jump quickly'));
console.log(isPangram('Pack my box with five dozen liquor jugs.'));
console.log(isPangram('not a pangram'));

/* * * * * * * * * * * * *  
 *      Longest Word     *
 * * * * * * * * * * * * */

// Write a function that takes a list of words and returns the length of the longest one.

// strategy:
// count length of each word in the array
// store counts in an array, sort descending and return item in index = 0
// alternate strategy, implement if time allows
// transform the array into the corresponding lengths, use find max
// 

const findLongestWord = (array) => {
    // initalize array container for lengths;
    const lengths = [];

    // find the length of each word
    for (let word of array) {
        const wordLen = word.length;
        lengths.push(wordLen);
    }

    lengths.sort((a,b) => b-a);

    return lengths[0];
}

const findLongestWord2 = (array) => {
    // transform to lengths
    const lengths = array.map(word => word.length);

    // return max value for length
    return Math.max( ...lengths )
}

console.log(findLongestWord(["hi", "hello"]));
console.log(findLongestWord2(["hi", "hello"]));