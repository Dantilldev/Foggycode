interface UnknownMap2 {
  // TODO
  [key: string]: unknown;
}

function countTrue(map: UnknownMap2): number {
  // TODO
  let sumTrues = 0;
  for (const key in map) if (map[key] === true) sumTrues++;
  return sumTrues;
}

// // Testkod:
console.log(countTrue({a: true, b: false, c: true})); // 2
console.log(countTrue({a: 1, b: "true"})); // 0
console.log(countTrue({})); // 0

// Räkna true i okänd karta
//
// Ibland får du in ett objekt (en "karta") där värdena kan vara vad som helst.
// Din uppgift är att räkna hur många värden som är exakt true.
// Hoppa över allt annat. Returnera 0 om objektet är tomt.
//
// Exempelfunktion:
// function räknaJa(m: { [k: string]: unknown }) {
//   let c = 0;
//   for (const k in m) if (m[k] === true) c++;
//   return c;
// }
//
// Your Task
// Build a function that counts true values in a map with unknown values.

// Define interface UnknownMap { [key: string]: unknown }.
// Implement countTrue(map: UnknownMap): number that returns the number of keys whose value is exactly true.
// Do not mutate the input.
// Return 0 for an empty map.
