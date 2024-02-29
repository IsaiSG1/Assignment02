// Prompt the user to enter two integers
let num1 = parseInt(prompt("Enter the first integer:"));
let num2 = parseInt(prompt("Enter the second integer:"));

// Check are equal
if (num1 === num2) {
   console.log("The numbers are equal.");
} 
// If the first number is larger, display
else if (num1 > num2) {
   console.log("The larger number is: " + num1);
} 
// If the second number is larger, display
else {
   console.log("The larger number is: " + num2);
}