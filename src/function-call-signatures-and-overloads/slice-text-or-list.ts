// Slice Text or List
function sliceEither(input: string, start: number, end?: number): any {
  // TODO: add overloads above and keep one implementation here
  return Array.isArray(input)
    ? (input as string[]).slice(start, end as any)
    : (input as string).slice(start, end as any);
}

// Overloads can return different types based on input. Here, slicing a string should return a string. Slicing a string array should return a string array.

// Write the overloads first, then one body using Array.isArray and the built-in slice method. Handle the optional end index.

// function head(xs: string[]) {
//   return xs.slice(0, 1);
// }

// Your Task:
// Create a sliceEither that slices strings or string arrays.
// Overloads:
// sliceEither(input: string, start: number, end?: number): string
// sliceEither(input: string[], start: number, end?: number): string[]
// Implement once with a union parameter and a small check.
// Do not mutate the original value.
