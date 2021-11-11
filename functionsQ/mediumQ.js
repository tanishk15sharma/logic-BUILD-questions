// Given an array, your function should return the length of the array.
// Example:
// Input: arrayLength([1,5,3,7,8]) ––> Output: 5
function findLength(arr) {
    var findNum = 0
    for (let i = 0; i < arr.length; i++) {
        findNum++
    }
    return findNum
}
console.log(findLength([1, 3, 6, 4, 6, 7, 9, 3, 2]));





// Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2
function showIndexPlace(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i
        }
    }
}
console.log(showIndexPlace([2, 3, 5, 6, 8], 5));




// Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]
function replaceNumbers(arr, newNumber, oldNumber) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === oldNumber) {
            arr[i] = newNumber;
        }
    }
    return arr
}
console.log(replaceNumbers([6, 1, 2, 4, 5, 6, 7, 8, 3, 6, 8, 6], 10, 6));





// Given two arrays, your function should return single merged array.
// Example:
// Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]
function addArray(arr1, arr2) {
    let finalArr = [];
    // finalArr.push(arr1);
    // finalArr.push(arr2);
    for (let i = 0; i < arr1.length; i++) {
        finalArr.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        finalArr.push(arr2[i]);
    }
    return finalArr;
}
console.log(addArray([2, 3, 4], [3, 4, 1]));




// Given a string and an index, your function should return the character present at that index in the string.
// Example:
// Input: charAt("neoGcamp", 4) ––> Output: c
function returnCharacter(sentence, index) {
    return sentence[index]
}
console.log(returnCharacter("Hello world", 4));



// Given two dates, your function should return which one comes before the other.
// Example:
// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021


function checkDate(date1, date2) {
    var dateValue1 = new Date(date1);
    var dateValue2 = new Date(date2);
 //   let data1Time = dateValue1.getTime()
    if (dateValue1.getTime() < dateValue2.getTime()  ) {
        return date1;
    } else {
        return date2;
    }    
  //  console.log(dataValue1);
}
//checkDate()
console.log(checkDate('02/03/2021','24/09/2021')  );

    
    



