function safeLength(s: string | null | undefined): number {
  // TODO
  return s?.length ?? 0;
}

console.log(safeLength("Hello"));
console.log(safeLength(null));
console.log(safeLength(undefined));

// Safe Length
// Reading a property on null or undefined throws an error at runtime. Use optional chaining (?.) to read safely and nullish coalescing (??) to choose a default.

// const s: string | undefined = "hi";
// const n = s?.length ?? 0; // 2
// Return a number so it’s easy to check in tests and code.

// Your Task
// Compute a string’s length, treating missing as 0.

// Write function safeLength(s: string | null | undefined): number.
// If s is a string, return its .length.
// If s is null or undefined, return 0.
// Do not throw or use non-null assertions.
