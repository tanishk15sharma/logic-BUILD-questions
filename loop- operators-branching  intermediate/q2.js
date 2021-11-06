// Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

const starButton = document.querySelector("#starbtn");
const output = document.querySelector("#output");

starButton.addEventListener("click",starOutput);

function starOutput(){
    var star = "*" + " "  ;
    var txt = "";
    for (let i=0 ; i<5 ; i++   ){
     txt += star;   
     console.log(txt);        
    }
}

