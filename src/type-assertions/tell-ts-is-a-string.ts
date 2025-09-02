function shout(x: unknown): string {
  // TODO
  return (x as string).toUpperCase();
}

console.log(shout("hello")); // Förväntat: "HELLO"
console.log(shout("TypeScript")); //

// Tell TS It’s a String
// Sometimes you have a value typed as unknown, but you know it is a string at this point. An assertion lets you say “treat this as a string.” It only affects types; it does not convert the value at runtime.

// Prefer real checks when possible. Here we will assert because the input is guaranteed by the caller in this small example.

// function double(x: unknown) {
//   return (x as number) * 2;
// }
// Your Task
// Make a function that returns the uppercased string.

// Implement shout(x: unknown): string.
// Use a type assertion to treat x as a string and return it in upper case.
// Keep the body small and do not mutate anything.
