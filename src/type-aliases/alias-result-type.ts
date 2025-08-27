type Ok = {ok: true; value: string}; // TODO

type Fail = {ok: false; error: string}; // TODO

type Result = Ok | Fail; // TODO

function summarize(r: Result): string {
  // TODO: check r.ok and format accordingly
  if (r.ok) {
    return `OK: ${r.value}`;
  }
  return `ERROR: ${r.error}`;
}

const okRes: Result = {ok: true, value: "Allt klart!"};
const failRes: Result = {ok: false, error: "Något gick fel"};
console.log(summarize(okRes)); // Förväntat: OK: Allt klart!
console.log(summarize(failRes)); // Förväntat: ERROR: Något gick

// Övningen går ut på att skapa tydliga och säkra typer för resultat som kan vara antingen lyckade eller misslyckade, och sedan använda dessa för att returnera olika strängar beroende på resultatet.

// Skapa en typ för lyckat resultat: // Ok representerar ett lyckat resultat med en sträng som värde
// Skapa en typ för misslyckat resultat: // Fail representerar ett misslyckat resultat med ett felmeddelande
// Skapa en unionstyp: // Result kan vara antingen Ok eller Fail
// Implementera funktionen: // summarize returnerar olika strängar beroende på om resultatet är ok eller fail
