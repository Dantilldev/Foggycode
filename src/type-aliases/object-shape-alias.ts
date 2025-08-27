type Person = {
  readonly id: number;
  name: string;
  nickname?: string;
}; // TODO

function display(p: Person): string {
  // TODO: return formatted string based on presence of nickname
  return p.nickname ? `${p.name} (${p.nickname})` : `${p.name}`;
}
// 1. Skapa en typ Person med egenskaperna name (string), age (number) och nickname (valfri string).
// 2. I funktionen display, kontrollera om p har en nickname.
// 3. Om nickname finns, returnera "<name> (<nickname>), <age> years".
// 4. Om nickname saknas, returnera "<name>"

// Uppgiften går ut på att:
// Skapa en typ för en person med egenskaperna name (sträng), age (nummer) och en valfri nickname (sträng).
// Skriva en funktion som tar en person och returnerar en sträng.
// Om personen har en nickname ska strängen innehålla både namn, nickname och ålder.
// Om personen inte har en nickname ska bara namnet returneras.
// Kort sagt: Du ska visa information om en person på olika sätt beroende på om de har ett smeknamn eller inte.
