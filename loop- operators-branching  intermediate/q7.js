const dayInput = document.querySelector("#dayinput")
const checkBtn = document.querySelector("#clickbtn")

var dayData = ["saturday" , "sunday" ]


checkBtn.addEventListener("click",checkDate)

function checkDate(){
    if(dayData.includes(dayInput.value)){
        console.log("its a weekend");
    }else{
        console.log("its a weekday");
    }
}




