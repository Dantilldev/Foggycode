function greet1(name: string | null | undefined): string {
  // TODO
  const safeName = name ?? "there";
  return `Hi, ${safeName}!`;
}

console.log(greet1("Alice"));
console.log(greet1(null));
console.log(greet1(undefined));

// Greet Maybe Name
// null and undefined mean a value is missing. With strict null checks, you must handle them. Use nullish coalescing (??) to pick a fallback only when the value is null or undefined.

// const raw: string | undefined = undefined;
// const safe = raw ?? "fallback"; // 'fallback'
// Optional chaining (?.) helps when you want to read a property only if the value exists. Keep the rule simple: treat only null and undefined as missing.

// Your Task
// Create a greeter that handles missing names.

// Write function greet(name: string | null | undefined): string.
// Return "Hi, <name>!" when a real string is provided.
// When name is null or undefined, return "Hi, there!".
// Do not trim or change the provided name.
