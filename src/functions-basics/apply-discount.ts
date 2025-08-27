console.log("---Apply Discount---");
function applyDiscount(
  price: number,
  calculate: (p: number) => number
): number {
  // TODO: call the callback with price and return the result
  return calculate(price);
}

console.log(applyDiscount(100, (p) => p * 0.9)); //90
console.log(applyDiscount(50, (p) => p - 5)); //45

// Tillämpa rabatt med hjälp av en callback.
// Tar ett pris och en beräkningsfunktion.
// Returnerar det nya rabatterade priset.
// Exempel: applyDiscount(100, p => p * 0.9) → 90
