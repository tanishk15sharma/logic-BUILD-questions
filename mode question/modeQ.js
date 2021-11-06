const inputField = document.querySelector("#txtinput");
const highlightBtn = document.querySelector("#modebtn");
const outputDiv = document.querySelector("#output");

highlightBtn.addEventListener("click", () => {
 highlightWord(inputField.value);
    
});

function highlightWord(sentence) {
    let wordObj = {};
    let word ='';
    let maxWord = '';
    let maxLength = 0;
    for(let i=0; i< sentence.length; i++) {
        if(sentence[i] === " " || sentence[i] === "."){
            wordObj[word] = word.length;
            word = "";
        } else {
            word += sentence[i];
        }
    }
    for(let i in wordObj) {
        if(wordObj[i] > maxLength) {
            maxLength = wordObj[i];
            maxWord = i;
        }
    }
    outputDiv.innerHTML = `${sentence.replace(maxWord,`<span>${maxWord}</span>`)}`;
}





// function highlightWord(sentence) {
//     let numArray = sentence.split("").sort((x, y) => x - y)
//     // let letterObj = {};
//     // let word ='';
//     // let maxWord = '';
//     //  let maxLength = 0;
//     //  let currentNum  = numArray[0] ;
//     var bestStreak = 1;
//     var bestElem = numArray[0];
//     var currentStreak = 1;
//     var currentElem = numArray[0];


//      for (let i = 1; i < numArray.length; i++) {
//         if (numArray[i - 1] !== numArray[i]) {
//             if (currentStreak > bestStreak) {
//                 bestStreak = currentStreak;
//                 bestElem = currentElem;
//             }
// //[1,1,2,2,2,3,4]
//             currentStreak = 0;
//             currentElem = numArray[i];
//         }

//         currentStreak++;
//     }
//  //   console.log(bestStreak);
//     return currentStreak > bestStreak ? currentElem : bestElem;

// }
// // for(let i=0; i< sentenceArray.length; i++) {
// //     // if(letterObj.hasOwnProperty(sentenceArray[i])        ){
// //     //    // letterObj[word] = word.length;
// //     //    // word = "";
// //     //     letterObj[sentenceArray[i]]++ ;
// //     // } else {
// //     //   //  word += sentence[i];
// //     //     letterObj[sentenceArray[i]] = 1;
// //     // }


// // }
// //console.log(letterObj);
// //console.log(sentenceArray);

// //thank you  
// //letterObj.hasOwnProperty(sentence[i])