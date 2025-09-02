function firstDefined(
  a: string | number | boolean | null | undefined,
  b: string | number | boolean | null | undefined,
  c: string | number | boolean | null | undefined
): string | number | boolean | undefined {
  // TODO
  return a ?? b ?? c ?? undefined;
}
console.log(firstDefined(0, 1, 2)); // 0
console.log(firstDefined(null, false, true)); // false
console.log(firstDefined(undefined, "", "hej")); // ""
console.log(firstDefined(undefined, null, 42)); // 42
console.log(firstDefined(undefined, null, undefined)); // undefined

// First Defined
// Sometimes you have several candidates and want the first one that isn’t missing. Use the rule “missing means null or undefined”. Do not skip valid falsy values like 0, '', or false.

// function pick(a?: number | null, b?: number | null) {
//   return a ?? b; // picks a unless it is null/undefined
// }
// Return whatever type the caller passed in, as long as it was present.

// Your Task
// Return the first value that isn’t null or undefined.

// Complete the function firstDefined.
// Return the first argument that is not null or undefined.
// If all are missing, return undefined.
// Respect falsy values like 0, '', and false (they should be returned if first non-missing).
