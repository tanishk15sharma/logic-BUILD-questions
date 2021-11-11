// Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8
function squareOf(num,power) {
    let value = num ;
    for(let i=1;i<power;i++){
        value *= num;
    }
    return value;
}
console.log(squareOf(2,5));




// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80
function areaHexagon(length) {
    let formula  = (3 * Math.sqrt(3) / 2 ) * (length * length); 
    return formula.toFixed(2);
}
console.log(areaHexagon(10) );



// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3
function giveNumberOfWords(sentence) {
    let counter = 1
    for(let i=0; i <sentence.length;i++){
        if(sentence[i]===" ") {
            counter++;
        }
    }
    return counter;
}
console.log(giveNumberOfWords("hey i am tanishk"));



// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
function getMaxValue(...numbers) {
    let max = 0;
    for (let i =0 ; i<numbers.length; i++ ){
        if(numbers[i] > max ){
            max = numbers[i];
        }
    }
    return max
   // console.log(getMini(2,3,4,5));
}
console.log(getMaxValue(2,3,4,5,1));


// Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all. Example:
// Input: typeOfTriangle(30, 60, 90) ––> Output: Scalen Triangle.

function checkTriangle(angle1,angle2,angle3){
    if(angle1 + angle2 + angle3 === 180   ){
        if(angle1 === angle2 && angle3 === angle2  ){
            return "equilateral triangle ";
        }else if (angle1 === angle2 || angle3 === angle2 || angle3 === angle1  ){
            return "isosceles tirangle";
        }else  {
            return "scalen triangle "
        }
    }else {
        return "this is not a trinagle"
    }
} 
console.log(checkTriangle(50,110,20)   );