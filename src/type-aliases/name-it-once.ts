type UserId = string | number;
type AccountState = "new" | "verified" | "banned";

function makeTag(id: UserId, state: AccountState): string {
  // Your code here
  return `user:${id}/${state}`;
}

console.log(makeTag(42, "new"));

// Uppgift:
// Steg 1: Definiera typen UserId = string | number
//         - Tillåter att ett användar-ID kan vara antingen ett nummer eller en sträng
//
// Steg 2: Definiera typen AccountState = 'new' | 'verified' | 'banned'
//         - Representerar möjliga tillstånd för ett konto
//
// Steg 3: Skriv funktionen makeTag(id: UserId, state: AccountState): string
//         - Den ska ta ett ID och ett kontotillstånd som argument
//
// Steg 4: Returnera en sträng i formatet "user:${id}/${state}"
//         - Använd template string för att kombinera id och state
//         - Resultatet ska vara exakt t.ex. "user:42/verified" eller "user:abc/new"
//
// Steg 5: Håll funktionen ren och tydlig – inga sidoeffekter, bara returnera strängen

// Övningen går ut på att:
// Skapa en typ för användar-ID som kan vara både sträng och nummer.
// Skapa en typ för kontots status med tre möjliga värden.
// Skriva en funktion som tar ett ID och en status och returnerar en sträng i formatet "user:{id}/{state}".
// Kort sagt: Du ska kombinera ett ID och ett kontotillstånd till en tydlig sträng, med hjälp av tydliga typer.
