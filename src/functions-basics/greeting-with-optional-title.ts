function greet(name: string, title?: string): string {
  // TODO: return a formatted greeting based on whether title is provided
  if (title) {
    return `Hello, ${title} ${name}`;
  }
  return `Hello, ${name}`;
}

greet("Alex"); // 'Hello, Alex'

greet("River", "Dr."); // 'Hello, Dr. River'

// Steg för steg på svenska:

// Skriv en funktion greet med parametrarna name (sträng) och title (valfri sträng).
// Kolla om title är angiven.
// Om title finns, returnera "Hello, " + title + " " + name.
// Om title inte finns, returnera "Hello, " + name.
// Returnera bara strängen.

// Kort: Lägg till TITELN om den finns, annars bara namnet.
