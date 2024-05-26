//get all the buttons
const playerScissorsbtn = document.getElementById("scissors-btn");
const playerRockbtn = document.getElementById("rock-btn");
const playerPaperbtn = document.getElementById("paper-btn");

// Get all the output/display
const playerDisplay = document.getElementById("player-display");
const computerDisplay = document.getElementById("computer-display");
const resultsCommentDisplay = document.getElementById("results-comment-display");

// Get all the scores display
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");

// Initialize scores,results and rps array
let playShakes = 1;
const rps = [
  {
    name: "rock",
    image: "✊",
    code: "r",
  },
  {
    name: "paper",
    image: "✋",
    code: "p",
  },
  {
    name: "scissors",
    image: "✌️",
    code: "s",
  },
];
const results = { playerScore: 0, computerScore: 0, comment: "Currently Draw" };

// Function to get the result
function getResult(playerChoice, computerChoice) {
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    results.playerScore += 1;
    results.comment = "Player Wins";
  } else if (playerChoice === computerChoice) {
    results.comment = "Draw";
  } else {
    results.computerScore += 1;
    results.comment = "Computer Wins";
  }

  return results;
}

// Function to handle click
function handleClick(playerChoice) {
  const playerChoiceEmoji = rps.find((choice) => choice.name === playerChoice);
  const computerChoiceEmoji = rps[Math.floor(Math.random() * rps.length)];

  // Update the display of user and computer choice
  playerDisplay.innerHTML = playerChoiceEmoji.image;
  computerDisplay.innerHTML = computerChoiceEmoji.image;

  if (playShakes === 3) {
    const res = getResult(playerChoiceEmoji.name, computerChoiceEmoji.name);

    // console.log("results :", res);

    playerScoreDisplay.innerHTML = results.playerScore;
    computerScoreDisplay.innerHTML = results.computerScore;

   //show result in text display
    resultsCommentDisplay.innerHTML = `${results.comment}`.toUpperCase();
    
  }

  //increase the round and shakes
  playShakes === 3 ? (playShakes = 1) : playShakes++;
}

// Attach event listener to the container
playerRockbtn.addEventListener("click", (event) => {
  event.preventDefault();
  handleClick("rock");
});
playerPaperbtn.addEventListener("click", (event) => {
  event.preventDefault();
  handleClick("paper");
});
playerScissorsbtn.addEventListener("click", (event) => {
  event.preventDefault();
  handleClick("scissors");
});
