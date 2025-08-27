type Stringifier = (n: number) => string;

function formatAll(nums: number[], fmt: Stringifier): string[] {
  // TODO: return nums mapped with fmt
  return nums.map(fmt);
}

const stringify = (n: number) => `#${n}`;
console.log(formatAll([1, 2, 3], stringify)); // ["#1", "#2", "#3"]

// Uppgift:
// Steg 1: Definiera typen Stringifier = (n: number) => string
//         - Det är en funktionstyp som tar ett nummer och returnerar en sträng
//
// Steg 2: Skriv funktionen formatAll(nums: number[], fmt: Stringifier): string[]
//         - Den ska ta en lista med nummer och en formatteringsfunktion
//
// Steg 3: Gå igenom varje nummer i nums-arrayen
//         - Använd fmt för att omvandla varje nummer till en sträng
//
// Steg 4: Samla alla formatterade strängar i en ny array
//         - Använd t.ex. map för att skapa en ny lista utan att ändra originalet
//
// Steg 5: Return

// Uppgiften går ut på att:
// Skapa en typ för en funktion som tar ett nummer och returnerar en sträng.
// Skriva en funktion som tar en lista med nummer och en sådan funktion,
// och returnerar en lista med strängar där varje nummer har omvandlats med funktionen.
// Kort sagt: Du ska kunna formatera en lista med tal till en lista med strängar, med valfri formattering.
