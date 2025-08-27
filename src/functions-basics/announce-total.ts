console.log("----Announce Total----");
function announceTotal(a: number, b: number): number {
  // TODO: compute sum, log 'Total: <sum>', and return the sum
  console.log("Total: " + (a + b));
  return a + b;
}
announceTotal(3, 4); // Total: 7
announceTotal(10, 0); // Total: 10

// announceTotal summerar två tal, loggar resultatet och returnerar det.
// Loggar i formatet: 'Total: <sum>'.
// Användbar när du både vill skriva ut och få tillbaka värdet.
// Exempel: announceTotal(3, 4) → loggar 'Total: 7' och returnerar 7.
