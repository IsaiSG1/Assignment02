// Step 1: Collect a number between 1 and 100 from the user
let score = parseInt(prompt("Enter your score (between 1 and 100):"));

// Step 2: Check if the number is between 1 and 100
if (score >= 1 && score <= 100) {
    // Step 3: Use else if statements to assign grades based on the score range
    if (score >= 90 && score <= 100) {
        console.log("You received an A");
    } else if (score >= 80 && score <= 89) {
        console.log("You received a B");
    } else if (score >= 70 && score <= 79) {
        console.log("You received a C");
    } else if (score >= 60 && score <= 69) {
        console.log("You received a D");
    } else {
        console.log("You received an F");
    }
} else {
    // If the number is not between 1 and 100, display an error message
    console.log("Only numbers between 1 and 100 are accepted.");
}