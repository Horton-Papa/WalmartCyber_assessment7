const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i = 0; i < nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }
    return new_nums;
}


function doublerInsert(nums){

    let new_nums = [];

    for (let i = 0; i < nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }
    return new_nums;
}


function getSizedArray(size){
    let array = [];
    for (let i = 0; i < size; i++){
        array.push(i);
    }
    return array;
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);

// store the arrays in an object for both functions to iterate from 
const variables = {
    tinyArray: tinyArray,
    smallArray: smallArray,
    mediumArray: mediumArray,
    largeArray: largeArray,
    xLargeArray: extraLargeArray
}

// How long does it take to double every number in a given 
// array? 

for (key in variables){
    perf.start();                     // Starts timer
    doublerAppend(variables[key]);
    let resultsAppend = perf.stop();  // Stops timer and save time results

    perf.start();
    doublerInsert(variables[key]);
    let resultsInsert = perf.stop();

    console.log(`Results for the ${key}`);
    console.log("unshift", resultsInsert.preciseWords);
    console.log("push", resultsAppend.preciseWords);
}


// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("unshift", resultsInsert.preciseWords);
console.log("push", resultsAppend.preciseWords);