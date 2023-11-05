let squares = document.getElementsByClassName('square');
let container = document.querySelector(".container");
let lastClicked;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

for (let square of squares){
    square.addEventListener("click", () =>{   
        if(!gameEnded){ 
        let selector = "X";
        if(selector !==lastClicked && square.textContent ==""){
            square.textContent = "X";
            lastClicked = "X";

        }else if(square.textContent ==""){
            square.textContent ="O";
            lastClicked = "O";

        }
        
        checkWin();
    }
        })
        
    }

    let gameEnded = false;

    function checkWin() {
        if(gameEnded){
            return;
        }
        for(const condition of winningConditions){
            const [a,b,c] = condition;
            const squareA = squares[a].textContent;
            const squareB = squares[b].textContent;
            const squareC = squares[c].textContent;

            if(squareA ==squareB && squareB == squareC && squareA !=""){
                gameEnded = true;
                declareWinner(squareA);
                return;
            }

            if(Array.from(squares).every(square => square.textContent !="") && !gameEnded){
                gameEnded= true;
                declareWinner("It's a tie!")
            }
        }

    }

   function declareWinner(winner){
        const messageDiv = document.createElement("div");
        messageDiv.textContent = "Winner: " + winner;
        messageDiv.classList.add("message");
        container.appendChild(messageDiv);
}


