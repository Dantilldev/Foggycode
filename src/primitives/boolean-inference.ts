function calculateAppleCost2(nrApples: number) {
  return nrApples * 5;
}

let isExpensive = calculateAppleCost2(10) > 40; // Your code here

console.log(typeof isExpensive, isExpensive);

// Output: boolean true
// Checks if buying 10 apples costs more than 40.
// TypeScript infers the type as boolean from the comparison.
