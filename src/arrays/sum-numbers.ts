function sum(nums: number[]): number {
  // TODO: sum all values and return the total (0 for empty arrays)
  let sum = 0;
  nums.forEach((num) => {
    sum += num;
  });
  return sum;
}

console.log(sum([2, 3, 5])); // 10
console.log(sum([])); // 0

// Your Task
// Complete sum(nums: number[]): number.
// Handle the empty array by returning 0.
// Examples
// sum([2, 3, 5]) → 10
// sum([]) → 0
