const inputTxt = document.querySelector("#inputtxt")
const clickBtn = document.querySelector("#clickbtn")
const output = document.querySelector("#output")
const showTxt = document.querySelector("#show")

showTxt.addEventListener("click",() => {

    if(inputTxt.type == "password" ){
    inputTxt.type = "text";
    }else {
    inputTxt.type = "password";
    }
    
}  )


clickBtn.addEventListener("click",changeColour  )

function changeColour() {

    if(inputTxt.value.includes("green")    ){
        output.innerText = inputTxt.value;
        output.style.color = "green"

    }else if(inputTxt.value.includes("blue")    ){
        output.innerText = inputTxt.value;
        output.style.color = "blue"

    }else if(inputTxt.value.includes("red")    ){
        output.innerText = inputTxt.value;
        output.style.color = "red"

    }
}
