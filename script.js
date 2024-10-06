let playerScore = 0;
let computerScore = 0;

// Function to get a random computer choice
function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

// Function to check if the player has won the round
function hasPlayerWonTheRound(player, computer) {
    return (
        (player === "Rock" && computer === "Scissors") ||
        (player === "Scissors" && computer === "Paper") ||
        (player === "Paper" && computer === "Rock")
    );
}

// Function to get round results
function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult(); // Get the computer's choice

    // Check if the player has won the round
    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore += 1; // Update player score
        return `Player wins! ${userOption} beats ${computerResult}.`;
    }

    // Check for a tie
    if (userOption === computerResult) {
        return `It's a tie! Both chose ${userOption}.`;
    }

    // If the computer wins
    computerScore += 1; // Update computer score
    return `Computer wins! ${computerResult} beats ${userOption}.`;
}

// Function to update the displayed scores
function updateScores() {
    document.getElementById("player-score").textContent = playerScore;
    document.getElementById("computer-score").textContent = computerScore;
}

// Function to check for a game winner
function checkGameWinner() {
    if (playerScore === 3) {
        document.getElementById("winner-msg").textContent = "Congratulations! You are the overall winner!";
        document.getElementById("reset-game-btn").style.display = "block";
    } else if (computerScore === 3) {
        document.getElementById("winner-msg").textContent = "Sorry, the computer wins the game!";
        document.getElementById("reset-game-btn").style.display = "block";
    }
}

// Event listeners for button clicks
document.getElementById("rock-btn").addEventListener("click", function () {
    const resultMessage = getRoundResults("Rock");
    document.getElementById("results-msg").textContent = resultMessage;
    updateScores();
    checkGameWinner();
});

document.getElementById("paper-btn").addEventListener("click", function () {
    const resultMessage = getRoundResults("Paper");
    document.getElementById("results-msg").textContent = resultMessage;
    updateScores();
    checkGameWinner();
});

document.getElementById("scissors-btn").addEventListener("click", function () {
    const resultMessage = getRoundResults("Scissors");
    document.getElementById("results-msg").textContent = resultMessage;
    updateScores();
    checkGameWinner();
});

// Reset game button
document.getElementById("reset-game-btn").addEventListener("click", function () {
    playerScore = 0;
    computerScore = 0;
    document.getElementById("results-msg").textContent = "";
    document.getElementById("winner-msg").textContent = "";
    updateScores();
    this.style.display = "none";
});
