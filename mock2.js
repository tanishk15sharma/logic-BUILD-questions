const userInput = document.querySelector("#txtinput");
const rgp1Input = document.querySelector("#rgp1");
const rgp2Input = document.querySelector("#rgp2");
const rgp3Input = document.querySelector("#rgp3");
const clickButton = document.querySelector("#clickbtn");
const outputTxt = document.querySelector("#output");

clickButton.addEventListener("click",changeColor )

function changeColor() {
    var value= userInput.value;
    outputTxt.innerHTML = value;
    outputTxt.style.color = `rgb(${rgp1Input.value},${rgp2Input.value},${rgp3Input.value})`
}