interface UnknownMap {
  // TODO
  [key: string]: unknown;
}

function sumValues(map: UnknownMap): number {
  // TODO
  let total = 0;

  for (let key in map) {
    total += map[key] as number;
  }
  return total;
}

const num = {a: 1, b: 1};
console.log(sumValues(num));

// Sum Values from Unknown Map
// Sometimes you get a dictionary where the values are unknown. If you know this map holds numbers, you can assert the value type when reading.

// You will sum numeric values from a { [key: string]: unknown } object.

// const m: { [k: string]: unknown } = { a: 1, b: 2 };
// let total = 0;
// for (const k in m) total += m[k] as number;
// Your Task
// Add up all numeric values from a map with unknown values.

// Define interface UnknownMap { [key: string]: unknown }.
// Implement sumValues(map: UnknownMap): number that adds up all values by asserting each to number.
// Treat missing keys as 0 (normal for…in will skip them anyway).
// Do not mutate the input.
