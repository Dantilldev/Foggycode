// Bygg en egen typvakt (Custom Guard)
function isNonEmptyString(v: unknown): v is string {
  // TODO
  return typeof v === "string" && v.trim().length > 0;
}

function joinNonEmpty(parts: unknown[]): string {
  // TODO

  const stringParts = parts.filter(isNonEmptyString);

  const trimmedParts = stringParts.map((s) => s.trim());

  const result = trimmedParts.join(",");

  return result;
}

// Testkod för isNonEmptyString:
console.log(isNonEmptyString("Hej")); // true
console.log(isNonEmptyString("")); // false
console.log(isNonEmptyString("   ")); // false (bara mellanslag)
console.log(isNonEmptyString(123)); //se (inte en sträng)
console.log(isNonEmptyString(null)); // false (inte en sträng)
console.log(isNonEmptyString(undefined)); // false (inte en sträng)

// Testkod för joinNonEmpty:
console.log(joinNonEmpty(["Hej", "världen"])); // "Hej,världen"
console.log(joinNonEmpty(["Hej", "", "där"])); // "Hej,där"
console.log(joinNonEmpty(["  Hej  ", "  ", "  där  "])); // "Hej,där" (trimmat)
console.log(joinNonEmpty([123, "text", null, "mer"]));
// "text,mer" (bara strängar)
console.log(joinNonEmpty([]));

// En egen typvakt låter dig uttrycka din egen kontroll och lära ut den till TypeScript.
// Använd returtypen value is Type för att snäva in typen vid anropsställen.
// Håll runtime-kontrollen enkel och i linje med typen du påstår.
// VARFÖR? Detta gör att TypeScript kan förstå och hjälpa dig med typkontroll även för egna regler,
// inte bara de inbyggda.

// function isNum(x: unknown): x is number {
//   return typeof x === "number";
// }
// Filtrera en array av okända värden till icke-tomma strängar, och slå sedan ihop dem för visning.

// Din uppgift
// Skapa en typvakt och använd den för att filtrera och slå ihop värden.

// Skriv funktionen isNonEmptyString(v: unknown): v is string som returnerar true endast för strängar där v.trim().length > 0.
// Skriv funktionen joinNonEmpty(parts: unknown[]): string.
// joinNonEmpty ska endast behålla värden där isNonEmptyString returnerar true, sedan trim() varje och slå ihop med ','.
// Mutera inte input-arrayen.
