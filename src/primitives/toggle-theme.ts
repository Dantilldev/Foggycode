let isDarkMode = true; // Your code here

function toggle() {
  // Your code here
  isDarkMode = !isDarkMode;
  return isDarkMode;
}

toggle();
console.log(isDarkMode);

toggle();
console.log(isDarkMode);

// Uppgift:
// 1. Skapa variabeln isDarkMode och tilldela true eller false.
// 2. TypeScript ska automatiskt gissa att typen är boolean.
// 3. Skriv funktionen toggle() som växlar isDarkMode mellan true och false.
// 4. Anropa toggle() två gånger och logga isDarkMode efter varje gång.
