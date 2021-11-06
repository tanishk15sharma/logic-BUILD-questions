const userInput = document.querySelector("#userinput");
const clickButton = document.querySelector("#clickbtn");
const outPut1 = document.querySelector("#output1");
const outPut2 = document.querySelector("#output2");


clickButton.addEventListener("click",checkVowels );

function checkVowels() {
let counter = 0;    
let vowelarray = ["a","e","i","o","u"];
let input = userInput.value ;
//vowelarray.push(input);
let counterConsonent = 0;    


for(let i = 0 ;i<input.length;i++){
   // vowelarray.push(input);
    if(vowelarray.includes(input[i])){
        counter++;
    }else{
        counterConsonent++;
    }
}
outPut1.innerHTML = "There are " + counter + " vowels present in the sentence.";
outPut2.innerHTML = "There are " + counterConsonent + " consonent present in the sentence.";


}




