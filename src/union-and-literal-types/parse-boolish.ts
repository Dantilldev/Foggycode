type Boolish = true | false | "true" | "false" | "yes" | "no" | 1 | 0; // TODO

function toBoolean(v: Boolish): boolean {
  // TODO: narrow and return correct boolean based on mapping
  if (v === true || v === "true" || v === "yes" || v === 1) {
    return true;
  }
  return false;
}

console.log("True:", toBoolean(true));
console.log("False:", toBoolean(0));

// Steg 1: Definiera en typ som tillåter olika sätt att uttrycka sant eller falskt.
// Steg 2: Skapa en funktion som tar ett värde av denna typ.
// Steg 3: Kontrollera om värdet motsvarar "sant" (true, 'true', 'yes', 1).
// Steg 4: Om inte, tolka det som "falskt" (false, 'false', 'no', 0).
// Steg 5: Returnera ett boolean-värde baserat på jämförelsen.
// Steg 6: Håll varje kontroll enkel och tydlig så att både människor
