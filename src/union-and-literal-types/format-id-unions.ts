type Id = string | number; // TODO

function formatId(id: Id): string {
  // TODO: narrow with typeof and return 'ID: <value>'
  if (typeof id === "number") {
    return "NUM: " + id;
  }
  return "STR: " + id;
}

console.log(formatId(42));
console.log(formatId("abc"));

// Uppgift:
// 1. Skapa typen Id = string | number.
// 2. Skriv funktionen formatId(id: Id): string.
// 3. Om id är ett nummer, returnera "NUM: <id>".
// 4. Om id är en sträng, returnera "STR: <id>".
// 5. Använd typeof för att avgöra typen.
