function safeParse(json: string): unknown {
  // TODO
  return JSON.parse(json);
}

function readTitle(v: unknown): string {
  // TODO

  if (typeof v === "object" && v !== null && "title" in v) {
    return (v as any).title;
  }
  return "untitled";
}

// function readTitle(v: unknown): string {
//  if(typeof v === "object" && v !== null && "title" in v ){
//      const n = (v as {title?: unknown}).title
//     if (typeof n === "string") return n
//  }
//  return "untitled"

// Testexempel:
const json1 = '{"title": "Hej världen"}';
const json2 = '{"name": "Anna"}';
const json3 = "123";
const json4 = '{"name": "Anna", "title": "Rubrik"}';

console.log(readTitle(safeParse(json1))); // Hej världen
console.log(readTitle(safeParse(json2))); // untitled
console.log(readTitle(safeParse(json3))); // untitled
console.log(readTitle(safeParse(json4))); // Rubrik

// === Safe JSON Title ===
// Uppgift: Läs ut en titel ur okänd JSON på ett säkert sätt.

// 1. Skriv en funktion safeParse(json: string): unknown
//    - Använd JSON.parse(json) och returnera resultatet som unknown.

// 2. Skriv en funktion readTitle(v: unknown): string
//    - Om v är ett objekt (och inte null) och har en egenskap 'title' som är en sträng,
//      returnera titeln.
//    - Annars returnera 'untitled'.

// Exempel på typkontroll:
// function readName(v: unknown) {
//   if (typeof v === "object" && v !== null && "name" in v) {
//     const n = (v as { name?: unknown }).name;
//     return typeof n === "string" ? n : "unknown";
//   }
//   return "unknown";
// }

// Ditt mål:
// - Implementera safeParse(json: string): unknown
// - Implementera readTitle(v: unknown): string
// - Om v är ett objekt och har en sträng-titel, returnera den. Annars 'untitled'.
// - Båda funktionerna ska vara "pure" (inte ändra något utanför sig själva).
