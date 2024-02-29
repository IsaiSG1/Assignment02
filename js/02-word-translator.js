// Prompt the user to enter a language code
let languageCode = prompt("Enter a language code (es, de, en, fr):");

// Initialize the translated message variable
let translatedMessage;

// Check the language code and assign the translated message accordingly
switch (languageCode) {
    case "es":
        translatedMessage = "Hola Mundo";
        break;
    case "de":
        translatedMessage = "Hallo Welt";
        break;
    case "en":
        translatedMessage = "Hello World";
        break;
    case "fr":
        translatedMessage = "Bonjour le monde";
        break;
    default:
        translatedMessage = "Hello World"; // Default to English for any other language code
}

// Display the translated message in the console
console.log("Hello World translated in " + languageCode + " is: " + translatedMessage);