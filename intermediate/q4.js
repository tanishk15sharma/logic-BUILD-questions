const clickButton = document.querySelector("#clickbtn");
const outPut = document.querySelector("#output");

clickButton.addEventListener("click",showFibonacci )

function showFibonacci(){
  let   value1 = 0;
  let   value2 = 1;
  let   value3 ;
    let  arrayFibonacci = [value1,value2];

    for (let i=0;i<=100;i++){
        value3 = value1+value2 ;
        arrayFibonacci.push(value3);
        value1=value2;
        value2=value3;
        
    }
  // return arrayFibonacci;
    outPut.innerHTML =   arrayFibonacci;
   // console.log(JSON.stringify(arrayFibonacci));  
}


