const inputNumber = document.querySelector("#numberinput");
const checkButton = document.querySelector("#checkbtn");
const outPut = document.querySelector("#output");

checkButton.addEventListener("click",takePrime );



function passFunction(number){
for (var i=2;i<number;i++ ) 
        if(number % i === 0) return false;
        return number >1;
       // console.log(isPrime);
       
}
passFunction();
function takePrime() {
    let num = Number(inputNumber.value);
       // console.log(isPrime);
       if(passFunction(num)){
           output.innerHTML = "This is a PRIME NUMBER "

           //console.log("prime number ");
       }else{
           output.innerHTML = "This is NOT a PRIME NUMBER "
           //console.log("not a prime number ");
       }    
}
   takePrime();