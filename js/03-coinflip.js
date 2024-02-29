// Step 1: Generate a random number (0 or 1) representing heads or tails
let coinFlip = Math.round(Math.random());

// Step 2: Prompt user to select "Heads" or "Tails"
let choice = prompt("Select 'Heads' or 'Tails':");

// Step 3: Using a conditional to determine the result of the coin flip
if (coinFlip === 0) { // If the result is heads
    if (choice.toLowerCase() === "heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else {
        alert("The flip was heads but you chose tails...you lose!");
    }
} else { // If the result is tails
    if (choice.toLowerCase() === "heads") {
        alert("The flip was tails but you chose heads...you lose!");
    } else {
        alert("The flip was tails and you chose tails...you win!");
    }
}