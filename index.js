let squares = document.getElementsByClassName('square');
let container = document.querySelector(".container");


let selector = "x";


for (let square of squares){
    square.addEventListener("click", () =>{
        square.textContent = selector;
    })
}


