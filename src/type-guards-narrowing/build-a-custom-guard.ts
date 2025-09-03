// Nummer eller Text Storlek

// Skapa en funktion som beräknar "storleken" på ett värde som kan vara antingen en sträng eller ett nummer.
//
// Skriv funktionen sizeOf(value: string | number): number
// - Om value är en sträng, returnera dess längd (.length)
// - Om value är ett nummer, returnera numret direkt
// - Hantera tomma strängar korrekt (storlek 0)
//
// Varför är detta användbart? För att i verkliga program behöver vi ofta hantera olika typer
// av data från användare eller API:er, och då måste vi kunna avgöra vilken typ
// av data vi har fått för att kunna bearbeta den korrekt.

function sizeOf2(value: string | number): number {
  // TODO
  if (typeof value === "string") {
    return value.length;
  }

  if (typeof value === "number") {
    return value;
  }
  return 0;
}

// Testkod:
console.log(sizeOf2("hej")); // 3 (längden av strängen "hej")
console.log(sizeOf2("")); // 0 (längden av en tom sträng)
console.log(sizeOf2(42)); // 42 (numret returneras direkt)
console.log(sizeOf2(-10)); // -10 (numret returneras direkt)

// I TypeScript kan vi använda "typeof" för att avgöra vilken typ en variabel har när programmet körs.
// Detta kallas "type narrowing" (typinskränkning) och är mycket användbart.
//
// Varför är det viktigt? Jo, för att när vi har en union typ (t.ex. string | number),
// måste vi vara säkra på vilken typ vi har innan vi använder typ-specifika egenskaper.
//
// Till exempel:
// - En sträng har egenskapen .length (hur många tecken den innehåller)
// - Ett nummer har inga sådana egenskaper
//
// Så här kan vi använda typeof för att säkert hantera både strängar och nummer:
//
// function describe(v: string | number) {
//   if (typeof v === "string") {
//     // Nu vet TypeScript att v är en sträng här
//     return "text:" + v.length;  // Vi kan använda .length säkert
//   }
//   // TypeScript förstår att v måste vara ett nummer här
//   return "num:" + v;  // Vi kan använda v direkt
// }
//
