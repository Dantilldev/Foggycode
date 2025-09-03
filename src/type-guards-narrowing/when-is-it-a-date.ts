// When Is It a Date?

function toMillis(v: Date | number | string): number {
  // TODO
  if (v instanceof Date) {
    return v.getTime();
  }
  if (typeof v === "number") {
    return v;
  }

  return Date.parse(v);
}

// Testkod för toMillis:
console.log(toMillis(new Date(2023, 0, 1))); // Millisekunder för 1 jan 2023
console.log(toMillis(1672531200000)); // Bör returnera samma nummer
console.log(toMillis("2023-01-01")); // Bör också konvertera till millisekunder
console.log(toMillis(0)); // Bör returnera 0 (1 jan 1970)

// Använd instanceof för klassbaserade kontroller som Date. Kombinera det med typeof för att hantera andra primitiva typer. Returnera ett enda nummer så att anropare kan jämföra tider.
// Det är viktigt att särskilja mellan Date, number och string för att undvika felaktiga konverteringar.
// Date.parse används för att tolka datumsträngar till millisekunder, men returnerar NaN om strängen är ogiltig.
// Genom att hantera alla tre typerna blir funktionen flexibel och robust för olika indataformat.

// function toMs(v: Date | number) {
//   return v instanceof Date ? v.getTime() : v;
// }
// Tolka strängar med Date.parse som returnerar millisekunder sedan epoken. Håll beteendet enkelt och tydligt.

// Din uppgift
// Konvertera olika tidsinmatningar till millisekunder.

// Skriv funktionen toMillis(v: Date | number | string): number.
// Om v är en Date, returnera v.getTime().
// Om v är ett nummer, returnera det som det är.
// Om v är en sträng, returnera Date.parse(v).
