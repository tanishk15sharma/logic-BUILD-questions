const fetchBtn = document.querySelector("#fetchbtn")
const output = document.querySelector("#output")


let url = "https://dog.ceo/api/breeds/image/random";


fetchBtn.addEventListener("click",displayMessage  )

function displayMessage() {
    fetch(url)
    .then(data => data.json() )
    .then(item =>  output.innerHTML = `<img  src=${item.message}  ></img>`  )
}

