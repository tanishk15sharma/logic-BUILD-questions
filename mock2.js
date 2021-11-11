const txtInput = document.querySelector("#txt")
const plusBtn = document.querySelector("#plusbtn")
const minusBtn = document.querySelector("#minusbtn")
const resetBtn = document.querySelector("#resetbtn")

plusBtn.addEventListener("click", increaseTxt)
minusBtn.addEventListener("click", decreaseTxt)
resetBtn.addEventListener("click", resetTxt)

minusBtn.disabled = false

//let sum = 0
function increaseTxt() {
    minusBtn.disabled = false
   sum += 1;
    // let sum  = 0 
    txtInput.innerHTML = sum;
}
function decreaseTxt() {
    if (sum === 0) {
        minusBtn.disabled = true
    } else {
        sum -= 1;
        // let sum  = 0 
        txtInput.innerHTML = sum;
    }
}
function resetTxt() {
    minusBtn.disabled = true
    sum = 0;
    // let sum  = 0 
    txtInput.innerHTML = sum;
}
let sum = 0
console.log(a);
var a = 10 ;
console.log(a);