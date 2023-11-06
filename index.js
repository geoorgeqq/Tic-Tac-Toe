let squares = document.getElementsByClassName('square');
let container = document.querySelector(".container");
let options = document.getElementsByClassName("options")
let optionsDiv = document.querySelector(".options-div")
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
let player;
let selector;
let clicked = false;


for (let option of options) {
    option.addEventListener("click", () => {
        player = option.textContent;
        optionsDiv.style.visibility = "hidden";
        optionsDiv.style.display = "none";
        container.style.visibility = "visible";
    })
}

const getNextState = (player) => {
    return (player === "O") ? "X" : "O";
}



for (let square of squares) {
    clicked = false;
    square.addEventListener("mouseover", () => {
        if (!clicked && square.textContent === "") {
            square.textContent = player;
        }
    })

    square.addEventListener("mouseout", () => {
        if (!clicked && square.textContent === "") {
            square.textContent = "";
        }
    })
    square.addEventListener("click", () => {
        square.off("mouseout");
        clicked = true;
        if (!gameEnded && square.textContent === "") {
            square.textContent = player;
            selector = getNextState(player);
            player = selector;
            checkWin();
        }
    })

}

let gameEnded = false;
let tied = false;

function checkWin() {
    if (gameEnded) {
        return;
    }
    for (const condition of winningConditions) {
        const [a, b, c] = condition;
        const squareA = squares[a].textContent;
        const squareB = squares[b].textContent;
        const squareC = squares[c].textContent;

        if (squareA == squareB && squareB == squareC && squareA != "") {
            gameEnded = true;
            tied = false;
            declareWinner(squareA);
            return;
        }

        if (Array.from(squares).every(square => square.textContent != "") && !gameEnded) {
            gameEnded = true;
            tied = true;
            declareWinner("It's a tie!")
        }
    }

}

function declareWinner(winner) {
    const messageDiv = document.querySelector(".message");
    if (!tied) {
        messageDiv.innerHTML = "Winner: " + "<br>" + winner;
    } else { messageDiv.innerHTML = winner; }

    messageDiv.style.visibility = "visible";
    container.style.backgroundColor = "#008080";
}


