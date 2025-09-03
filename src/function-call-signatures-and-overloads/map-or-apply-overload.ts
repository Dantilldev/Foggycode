// Map or Apply Overload

function applyOrMap(fn: (n: number) => number, x: any): any {
  // TODO: add overloads above this implementation
  return Array.isArray(x) ? x.map(fn) : fn(x);
}

const double2 = (n: number) => n * 2;

// A single function can work on both one value and an array of values. Overloads let the return type match the input shape. Keep one implementation using a small Array.isArray check.

// You will transform numbers with a provided function.

// function inc(n: number) {
//   return n + 1;
// }
// Your Task
// Create an overloaded applyOrMap that applies a transform to a number or an array of numbers.

// Write overloads:
// (fn: (n: number) => number, x: number): number
// (fn: (n: number) => number, x: number[]): number[]
// Implement once using Array.isArray.
// Do not mutate the array.
// Keep runtime small.
