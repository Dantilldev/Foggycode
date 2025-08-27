function calculateAppleCost(nrApples: number) {
  // Multiply nrApples by 5 and return the result
  return nrApples * 5;
}

let total = calculateAppleCost(3);

console.log(total);

// Beräknar totalkostnaden för äpplen (5 per styck).
// TypeScript gissar returtypen som number när ett värde returneras.
// Exempel: calculateAppleCost(3) → 15
