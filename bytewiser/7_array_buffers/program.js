var integer, firstArray, secondArray;

// pull the integer from user input
integer = process.argv[2];

// create a Uint32Array with size of 1
firstArray = new Uint32Array(1);
// set the first element to the passed in integer
firstArray[0] = integer;

// create the second array from the first array's buffer
secondArray = new Uint16Array(firstArray.buffer);

// console log the second array
console.log(JSON.stringify(secondArray));
