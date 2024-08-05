let userscore = 0;
let compscore = 0;

let gestures = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".win-msg");
let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");

let drawgame = () => {
    msg.innerText = "GAME WAS A DRAW. TRY AGAIN";
    msgContainer.style.backgroundColor = "rgba(12, 50, 155, 0.911)";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        userscore++;
        userScorepara.innerHTML = `${userscore} <br>YOU`;
        msg.innerText = `YOU WON :) !! Your ${userChoice} beats ${compChoice}`;
        msgContainer.style.backgroundColor = "green";
    } else {
        compscore++;
        compScorepara.innerHTML = `${compscore} <br>COMP`;
        msg.innerText = `YOU LOST :( ${compChoice} beats your ${userChoice}`;
        msgContainer.style.backgroundColor = "red";
    }
}

const generateChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}

const playGame = (userChoice) => {
    const compChoice = generateChoice();

    if (userChoice === compChoice) {
        drawgame(); // Draw function callback
    } else {
        let userWin = false; // Variable to track who wins

        // Determine the winner based on choices
        if (userChoice === "rock") {
            userWin = compChoice === "scissors" ? true : false;
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock" ? true : false;
        } else if (userChoice === "scissors") {
            userWin = compChoice === "paper" ? true : false;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

gestures.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
