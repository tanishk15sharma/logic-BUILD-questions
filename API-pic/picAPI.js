// Create a web app, which on the click of a button fetches and show profile photo of your github profile
//api.github.com/users/your_username

const fetchButton = document.querySelector("#fetchbtn")
const imgGithub = document.querySelector("#imgtab")

//const newImage = document.createElement("img")

var url = "https://api.github.com/users/tanishk15sharma"



fetchButton.addEventListener("click" ,fetchPic )


function fetchPic(){


    fetch(url   )
    .then(response => response.json() )
    .then(data => { 
       imgGithub.src=`${data.avatar_url}`
        console.log(data);
    }
    )
}