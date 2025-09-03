function normalizeNames(input: unknown): string[] {
  // Den här funktionen tar emot något okänt (unknown)
  // och gör om det till en snygg lista av namn (array av strängar).
  // Varför? För att användare kan skriva in namn på olika sätt,
  // och vi vill alltid få ut en ren lista med bara riktiga namn.

  // Om input är en sträng, t.ex. "Anna, Bo , ,Cecilia"
  // Dela upp på kommatecken, ta bort extra mellanslag och tomma namn
  if (typeof input === "string") {
    // Vi delar upp strängen på varje komma
    // Sedan tar vi bort mellanslag runt varje namn
    // Och vi tar bort tomma namn (t.ex. om användaren skrev två kommatecken i rad)
    return input
      .split(",")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }

  // Om input är en array, t.ex. [" Anna ", "", "Bo", 123, null, "Cecilia "]
  // Vi vill bara ha med de som är strängar, trimma dem och ta bort tomma namn
  if (Array.isArray(input)) {
    // Vi behåller bara de värden som är strängar
    // Sedan tar vi bort mellanslag runt varje namn
    // Och vi tar bort tomma namn
    return input
      .filter((item) => typeof item === "string")
      .map((s) => (s as string).trim())
      .filter((s) => s.length > 0);
  }

  // Om input är något annat (t.ex. ett tal eller null), returnera en tom lista
  // Varför? För att vi bara vill ha riktiga namn, inget annat.
  return [];
}

// Testkod:
console.log(normalizeNames("Anna, Bo , ,Cecilia")); // ["Anna", "Bo", "Cecilia"]
console.log(normalizeNames([" Anna ", "", "Bo", 123, null, "Cecilia "])); // ["Anna", "Bo", "Cecilia"]
console.log(normalizeNames(123)); // []
console.log(normalizeNames([])); // []

// normalizeNames ska alltid ge tillbaka en ren lista av namn (string[]),
// oavsett hur användaren skrev in dem.
// Det är viktigt att kontrollera typen på input,
// så att vi inte får fel i programmet eller råkar använda felaktiga värden.
// Vi vill också ta bort tomma namn och mellanslag, så att listan blir snygg och användbar.
// Vi ändrar aldrig på input-värdet, utan skapar alltid en ny lista.
