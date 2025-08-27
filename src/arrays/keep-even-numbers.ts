function isEven(n: number): boolean {
  // TODO: return true for even numbers
  return n % 2 === 0;
}

function keepEven(nums: number[]): number[] {
  // TODO: return a NEW array with only even numbers
  return nums.filter((n) => isEven(n));
}

console.log(keepEven([1, 2, 3, 4, 5]));
console.log(keepEven([]));

// Your Task
// Complete the function isEven(n: number): boolean.
// Complete the function keepEven(nums: number[]): number[] using isEven.
// Do not mutate the input array.
// Examples
// keepEven([1, 2, 3, 4, 5]) → [2, 4]
// keepEven([]) → []
