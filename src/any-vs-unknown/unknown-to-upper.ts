function shout2(x: unknown): string {
  // TODO

  if (typeof x === "string") {
    return x.toUpperCase();
  }
  return "";
}
// eller
//return typeof x === "string" ? x.toUpperCase() : "";

// Unknown to Upper
// any lets anything through and can hide bugs. unknown is safer: you must check before you use it. Here you will accept an unknown value and return uppercase text only when it is a string.

// Use typeof x === 'string' to narrow. Return a default when the value is not a string. Keep the function small and pure.

// function toLowerIfString(x: unknown) {
//   return typeof x === "string" ? x.toLowerCase() : "";
// }
// Your Task
// Implement a function that uppercases a value only when it is a string.

// Write function shout(x: unknown): string.
// If x is a string, return x.toUpperCase().
// Otherwise return an empty string ''.
// Do not mutate the input.
