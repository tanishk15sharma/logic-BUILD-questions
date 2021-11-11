const initialPrice = document.querySelector("#initialprice")
const currentPrice = document.querySelector("#currentprice")
const clickBtn = document.querySelector("#clickbtn")
const output = document.querySelector("#output")

clickBtn.addEventListener("click",checkProfit  )


function checkProfit(){
    let value1 = Number(initialPrice.value);
    let value2 = Number(currentPrice.value);

    if(  Number(initialPrice.value) > Number(currentPrice.value) ){
        output.innerHTML = `it is loss and amount of loss is ${Number(initialPrice.value) - Number(currentPrice.value)}`  
    }else {
        output.innerHTML = `it is a profit and profit amount is ${value2 - value1}`
    }
}
