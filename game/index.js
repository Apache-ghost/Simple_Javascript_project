const prompt = require("prompt-sync")();

const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter the deposit amount: ");
    const numberDeposit = parseFloat(depositAmount);
    if (isNaN(numberDeposit) || numberDeposit <= 0) {
      console.log("Invalid deposit amount, try again");
    } else {
      return numberDeposit;
    }
  }
};

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines you want to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);
    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid line number, try again");
    } else {
      return numberOfLines;
    }
  }
};

const getBetAmount = (depositAmount) => {
  while (true) {
    const bet = prompt("Enter the bet amount: ");
    const betAmount = parseFloat(bet);
    if (isNaN(betAmount) || betAmount <= 0 || betAmount > depositAmount) {
      console.log("Invalid bet amount, try again");
    } else {
      return betAmount;
    }
  }
};

const spinSlotMachine = (numberOfLines) => {
  const symbols = ["cherry", "lemon", "orange", "plum", "bell", "bar", "seven"];
  const result = [];
  for (let i = 0; i < numberOfLines; i++) {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    const symbol = symbols[randomIndex];
    result.push(symbol);
  }
  return result;
};

const checkWin = (spinResult, betAmount) => {
  const uniqueSymbols = new Set(spinResult);
  const winAmount = betAmount * 3; // Example: 3x the bet amount for a win
  if (uniqueSymbols.size === 1) {
    console.log("Congratulations! You won!");
    console.log("Your winning amount: " + winAmount);
    return winAmount;
  } else {
    console.log("Sorry, you didn't win this time.");
    return 0;
  }
};

const playAgain = () => {
  const playAgainInput = prompt("Do you want to play again? (yes/no): ");
  if (playAgainInput.toLowerCase() === "yes") {
    startGame();
  } else {
    console.log("Thank you for playing!");
  }
};

const startGame = () => {
  console.log("Welcome to the Spinning Game!");
  const depositAmount = deposit();
  const numberOfLines = getNumberOfLines();
  const betAmount = getBetAmount(depositAmount);
  const spinResult = spinSlotMachine(numberOfLines);
  const winnings = checkWin(spinResult, betAmount);
  depositAmount += winnings;
  console.log("Your current balance: " + depositAmount);
  playAgain();
};

startGame();