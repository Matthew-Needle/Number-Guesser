let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  const randomTarget = Math.floor(Math.random() * 9);
  return randomTarget;
};

const getAbsoluteDistance = (a, b) => {
  const distance = Math.abs(a - b);
  return distance;
};

const compareGuesses = (humanScore, computerScore, targetNumber) => {
  const humanGuess = getAbsoluteDistance(humanScore, targetNumber);
  const computerGuess = getAbsoluteDistance(computerScore, targetNumber);

  if(humanGuess < computerGuess || humanGuess === computerGuess){
    return true;
  }
  else if(humanGuess > computerGuess){
    return false;
  }

};

const updateScore = (value) => {
  if(value === 'human'){
    humanScore += 1;
  }
  else if(value === 'comupter'){
    computerScore += 1;
  }
};

const advanceRound = () => {
  currentRoundNumber += 1;
};
