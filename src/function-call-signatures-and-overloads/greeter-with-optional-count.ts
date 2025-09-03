// Greeter with Optional Count

// Funktionstyp för hälsaren
type Greeter = (name: string, times?: number) => string;

// Enkel implementation av hälsaren
const greet2: Greeter = (name: string, times?: number): string => {
  // Skapa hälsningssträngen
  const greeting = `Hello, ${name}!`;

  // Om times är större än 0, upprepa hälsningen, annars returnera en gång
  if (times && times > 0) {
    return Array(times).fill(greeting).join(" ");
  }

  return greeting;
};

// Testkod
console.log("Testfall 1: Enkel hälsning");
console.log(greet2("Ada")); // "Hello, Ada!"
console.log();

console.log("Testfall 2: Upprepad hälsning");
console.log(greet2("Alan", 3)); // "Hello, Alan! Hello, Alan! Hello, Alan!"
console.log();

console.log("Testfall 3: Med 0 upprepningar");
console.log(greet2("Nikola", 0)); // "Hello, Nikola!"
console.log();

console.log("Testfall 4: Med negativ upprepning");
console.log(greet2("Marie", -1)); // "Hello, Marie!"
console.log();

// En funktionstyp beskriver parametrarnas typer och returtypen. Optional betyder att argumentet kan saknas. När ett optional-värde saknas, välj ett enkelt standardvärde.

// Du ska skriva en liten hälsningsfunktion med ett valfritt antal repetitioner. Håll utdata stabil och undvik bieffekter.

// type Printer = (msg: string, times?: number) => string;

// Din uppgift:

// Definiera en funktionstyp och implementera en hälsare med ett valfritt antal repetitioner.

// Deklarera typen Greeter = (name: string, times?: number) => string.
// Implementera greet: Greeter.
// När times saknas, returnera "Hello, <name>!".
// När times anges, upprepa den hälsningen så många gånger och slå ihop dem med ett mellanslag (t.ex. 3 gånger).
// Mutera inte indata.
