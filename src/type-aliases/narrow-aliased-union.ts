type Input = string | number; // TODO

function toNumber(x: Input): number {
  // TODO: narrow with typeof and return a number

  if (typeof x === "number") {
    return x;
  }
  return parseFloat(x);
}

console.log(toNumber(5));
console.log(toNumber("5"));

// 1. Definiera en typ som tillåter både sträng och nummer: // Input kan vara antingen en sträng eller ett nummer

// 2. Skriv funktionen som tar emot Input: // toNumber tar emot x av typen Input och returnerar ett nummer

// 3. Använd typeof för att avgöra typen: // Om x redan är ett nummer, returnera det direkt

// 4. Om x är en sträng, konvertera till nummer: // Annars, omvandla strängen till ett nummer med parseFloat

// Returnera resultatet: // Returnera alltid ett nummer oavsett indata

// Övningen går ut på att:
// Skapa en typ som tillåter både sträng och nummer som indata.
// Skriva en funktion som tar emot denna typ och returnerar ett nummer.
// Använda typeof för att avgöra om värdet är ett nummer eller en sträng.
// Om det är ett nummer, returnera det direkt. Om det är en sträng, konvertera till nummer med parseFloat.
// Kort sagt: Du ska hantera både strängar och nummer som indata och alltid returnera ett nummer.
