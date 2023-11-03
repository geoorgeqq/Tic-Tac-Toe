let squares = document.getElementsByClassName('square');
let container = document.querySelector(".container");
let lastClicked;
for (let square of squares){
    square.addEventListener("click", () =>{    
        let selector = "X";
        if(selector !==lastClicked && square.textContent ==""){
            square.textContent = "X";
            lastClicked = "X";
        }else if(square.textContent ==""){
            square.textContent ="O";
            lastClicked = "O";
        }
        
        })
    }





