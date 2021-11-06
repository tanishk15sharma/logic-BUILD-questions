// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".
// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 ....
const clickBtn = document.querySelector("#clickbtn");
const output = document.querySelector("#output");

//var data = Array.from({length: 100}, (_, i) => i + 1)
//var number = Array.from(Array(101).keys())
//clickBtn.addEventListener("click",fizzBuzz )

var lengthArray = Array.from({ length: 100}, (_, i) => i + 1);
clickBtn.addEventListener("click", dataArray)

console.log(lengthArray);

function dataArray() {
  output.innerHTML =    lengthArray.map((e) => {
        if (e % 3 === 0 && e % 5 === 0) {
           return   "FizzBuzz"
        } else if (e % 3 === 0) {
            return    "Fizz"
        } else if (e % 5 === 0) {
           return  "Buzz"
        }else{
           return  e;  
        }
    })
}

