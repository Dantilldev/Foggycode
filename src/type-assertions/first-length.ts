function firstLength(list: unknown): number {
  // TODO

  if (Array.isArray(list)) {
    const listStrArr = list as string[];
    const first = listStrArr[0];
    return typeof first === "string" ? first.length : 0;
  }
  return 0;
}

console.log(firstLength(["ab", "abc"]));
console.log(firstLength("abc"));
// First Length (Array Assert)
// You can mix checks and assertions. If a value is an array, you can still assert its element type when you know it.

// Here the input is unknown. If it is an array of numbers, return the double of the first number. Otherwise return 0.

// function firstDouble(a: unknown) {
//   if (Array.isArray(a)) {
//     const n = (a as number[])[0];
//     return typeof n === "number" ? n * 2 : 0;
//   }
//   return 0;
// }
// Your Task
// Return the length of the first string when the input is a string array.

// Implement firstLength(list: unknown): number.
// If list is an array, assert it as string[] and return the length of its first element.
// If it is not an array or is empty, return 0.
// Do not mutate the input.
