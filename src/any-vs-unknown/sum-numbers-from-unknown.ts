function sumNumbers(x: unknown): number {
  // Kolla om x är en array och alla värden är siffror
  if (Array.isArray(x) && x.every((num) => typeof num === "number")) {
    let sum = 0;
    x.forEach((num) => {
      sum += num;
    });
    return sum;
  }
  // Om inte, returnera 0
  return 0;
}

// Testkod:
console.log(sumNumbers([1, 2, 3])); // 6
console.log(sumNumbers([1, "hej"])); // 0
console.log(sumNumbers(123)); // 0
console.log(sumNumbers([])); // 0

// När du får in något okänt (unknown) måste du alltid kontrollera vad det är innan du använder det.
// Den här uppgiften tränar dig på att vara försiktig och bara använda array-metoder om du är säker på typen.
//
// Exempel på kontroll:
// function avg(x: unknown) {
//   if (Array.isArray(x) && x.every((n) => typeof n === "number")) {
//     const sum = x.reduce((a, b) => a + b, 0);
//     return x.length ? sum / x.length : 0;
//   }
//   return 0;
// }
//
// Din uppgift:
// Skriv funktionen sumNumbers(x: unknown): number
// - Om x är en array och alla värden är siffror, returnera summan.
// - Annars, returnera 0.
// - Returnera 0 även för en tom array.
// - Ändra inte på arrayen (undvik mutation).
//
// Detta visar hur unknown hjälper dig att skriva säker kod, medan any hade låtit dig göra vad som helst utan kontroll.
